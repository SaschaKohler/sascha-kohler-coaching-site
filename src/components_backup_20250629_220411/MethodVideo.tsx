'use client';

import React from 'react';

const MethodVideo = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
              Meine Methode: Die Frage nach der Kongruenz
            </h2>
            <p className="text-lg text-slate-600">
              In meinem Coaching steht eine zentrale Frage im Mittelpunkt: Handeln Sie im Einklang mit Ihren wahren Werten und Überzeugungen? Dieses Video gibt Ihnen einen kurzen Einblick in die Kraft der Kongruenz.
            </p>
          </div>
          
          {/* Video Column */}
          <div className="max-w-md mx-auto">
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-800">
              <video
                className="w-full h-auto"
                src="/images/Kongruenz 23.mp4"
                controls
                loop
                muted
                playsInline
                poster="/images/sascha-kohler-coaching-session.jpg"
              >
                Ihr Browser unterstützt das Video-Tag nicht.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodVideo;
