import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validierung der erforderlichen Felder
    const { name, email, message, phone, subject } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich' },
        { status: 400 }
      );
    }

    // E-Mail-Format validieren
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültiges E-Mail-Format' },
        { status: 400 }
      );
    }

    // Webhook-URL aus Umgebungsvariablen
    const webhookUrl = process.env.MAKE_CONTACT_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error('MAKE_CONTACT_WEBHOOK_URL ist nicht konfiguriert');
      return NextResponse.json(
        { error: 'Server-Konfigurationsfehler' },
        { status: 500 }
      );
    }

    // Daten für Make.com Webhook vorbereiten
    const webhookData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      phone: phone?.trim() || '',
      subject: subject?.trim() || 'Neue Coaching-Anfrage',
      timestamp: new Date().toISOString(),
      source: 'sascha-kohler.at',
      page: 'kontakt',
      language: 'de',
      userAgent: request.headers.get('user-agent') || '',
      ip: request.headers.get('x-forwarded-for') || 
          request.headers.get('x-real-ip') || 
          'unknown'
    };

    // Webhook an Make.com senden
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'SaschaKohler-Website/1.0'
      },
      body: JSON.stringify(webhookData),
      signal: AbortSignal.timeout(10000) // 10 Sekunden Timeout
    });

    if (!webhookResponse.ok) {
      console.error('Make.com Webhook Fehler:', {
        status: webhookResponse.status,
        statusText: webhookResponse.statusText
      });
      
      return NextResponse.json(
        { error: 'Fehler beim Versenden der Nachricht' },
        { status: 500 }
      );
    }

    // Erfolgreiche Antwort
    return NextResponse.json({
      success: true,
      message: 'Ihre Nachricht wurde erfolgreich übermittelt. Ich melde mich innerhalb von 24 Stunden bei Ihnen.',
      data: {
        name: webhookData.name,
        email: webhookData.email,
        timestamp: webhookData.timestamp
      }
    });

  } catch (error) {
    console.error('Contact Form API Fehler:', error);
    
    // Unterschiedliche Fehlerbehandlung
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Ungültige Anfrage-Daten' },
        { status: 400 }
      );
    }
    
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Anfrage-Timeout - bitte versuchen Sie es erneut' },
        { status: 408 }
      );
    }

    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten' },
      { status: 500 }
    );
  }
}

// Für Preflight-Requests (CORS)
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
