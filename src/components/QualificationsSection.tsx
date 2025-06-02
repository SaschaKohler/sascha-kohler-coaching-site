export default function QualificationsSection() {
  return (
    <section className="py-24 bg-warm-white" id="qualifikationen">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Qualifications */}
          <div className="bg-light-beige p-8 rounded-2xl">
            <h2 className="font-serif text-3xl font-light text-dark-brown mb-6">
              Qualifikationen & Erfahrung
            </h2>
            
            {/* Current Qualifications */}
            <div className="mb-8">
              <h3 className="font-medium text-dark-brown mb-4">Aktuelle Qualifikationen</h3>
              <ul className="space-y-3">
                <li className="text-warm-brown border-b border-soft-beige pb-2">NLP-Master & Trainer (zertifiziert)</li>
                <li className="text-warm-brown border-b border-soft-beige pb-2">Mentaltrainer (zertifiziert)</li>
                <li className="text-warm-brown border-b border-soft-beige pb-2">20+ Jahre Erfahrung als Apotheker</li>
                <li className="text-warm-brown border-b border-soft-beige pb-2">Pharmazeut (Approbation 2003)</li>
                <li className="text-warm-brown">Spezialisierung auf philosophischen Dialog</li>
              </ul>
            </div>

            {/* Upcoming Qualifications */}
            <div className="mb-8">
              <h3 className="font-medium text-dark-brown mb-4">Ab September 2025</h3>
              <ul className="space-y-3">
                <li className="text-warm-brown border-b border-soft-beige pb-2">Diplomierter Lebens- und Sozialberater (LSB in A.u.SV.)</li>
                <li className="text-warm-brown border-b border-soft-beige pb-2">Monodramatisches Spiel</li>
                <li className="text-warm-brown border-b border-soft-beige pb-2">Provokative Methode nach Frank Farrelly</li>
                <li className="text-warm-brown">Systemische und tiefenpsychologische Ansätze</li>
              </ul>
            </div>

            <blockquote className="italic text-warm-brown text-lg leading-relaxed border-l-4 border-klare-k pl-4">
              "Meine Rolle ist es nicht, Ihnen zu sagen, was Sie tun sollen. 
              Vielmehr schaffe ich den Raum, in dem Sie selbst erkennen, 
              was für Sie richtig ist."
            </blockquote>
          </div>

          {/* Right Column - Target Groups */}
          <div>
            <h3 className="font-serif text-3xl font-light text-dark-brown mb-8">Für wen ich da bin</h3>
            
            <div className="bg-warm-white p-6 rounded-xl border border-light-beige mb-6">
              <h4 className="text-dark-brown mb-4 font-medium">Menschen, die...</h4>
              <ul className="space-y-3 text-warm-brown">
                <li className="flex items-start">
                  <span className="text-klare-k mr-3">✓</span>
                  Sich in Lebenskrisen orientieren möchten
                </li>
                <li className="flex items-start">
                  <span className="text-klare-l mr-3">✓</span>
                  Ihre Selbstwirksamkeit stärken wollen
                </li>
                <li className="flex items-start">
                  <span className="text-klare-a mr-3">✓</span>
                  Authentische Entscheidungen treffen möchten
                </li>
                <li className="flex items-start">
                  <span className="text-klare-r mr-3">✓</span>
                  Ihre eigenen Ressourcen (wieder)entdecken wollen
                </li>
                <li className="flex items-start">
                  <span className="text-klare-e mr-3">✓</span>
                  Raum für Selbstreflexion suchen
                </li>
              </ul>
            </div>
            
            <div className="bg-light-beige p-6 rounded-xl">
              <h4 className="text-dark-brown mb-4 font-medium">Meine Schwerpunkte</h4>
              <ul className="space-y-3 text-warm-brown">
                <li>• Motivation & Selbstfürsorge</li>
                <li>• Lebenswandel & Neuorientierung</li>
                <li>• Eigenerfahrung & Selbstentdeckung</li>
                <li>• Dialog als zentrales Element</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
