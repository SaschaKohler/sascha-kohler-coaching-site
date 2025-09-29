import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WarmNavigation from "@/components/WarmNavigation";
import WarmFooter from "@/components/WarmFooter";
import PersonalGallery from "@/components/PersonalGallery";

export const metadata: Metadata = {
  title: "Über mich | Sascha Kohler - Mein Weg zur Lebensberatung",
  description:
    "Erfahren Sie mehr über meinen persönlichen Weg, meine Erfahrungen und warum ich Lebens- und Sozialberater geworden bin. Authentisch und ohne Beschönigung.",
  openGraph: {
    title: "Über mich | Sascha Kohler - Mein Weg zur Lebensberatung",
    description:
      "Erfahren Sie mehr über meinen persönlichen Weg, meine Erfahrungen und warum ich Lebens- und Sozialberater geworden bin. Authentisch und ohne Beschönigung.",
    type: "website",
  },
};

export default function UeberMichPage() {
  return (
    <>
      <WarmNavigation />
      <main className="pt-28 pb-16 bg-warm-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Header mit Bild */}
          <div className="text-center mb-12">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden">
              <Image
                src="/images/sascha-profile.png"
                alt="Sascha Kohler - Mensch und Mentaltrainer"
                width={200}
                height={200}
                className="w-full h-full rounded-full"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-800">
              Über mich
            </h1>
            <p className="text-xl text-slate-600 italic">
              „Authentisch sein heißt auch, die eigenen Brüche zu zeigen“
            </p>
          </div>
        </div>

        {/* Authentische Vorstellung */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 p-8 rounded-xl mb-8 border-l-4 border-amber-500">
            <h2 className="text-2xl font-bold mb-4 text-slate-800 mt-0">
              Warum ich Ihnen meine Geschichte erzähle
            </h2>
            <p className="text-slate-700 mb-0">
              Weil ich glaube, dass echte Beratung nur dann entstehen kann, wenn
              Sie wissen, wer vor Ihnen sitzt. Nicht die polierte Fassade,
              sondern der Mensch mit all seinen Erfahrungen, Fehlern und
              Lernprozessen.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Mein Weg - ohne Beschönigung
          </h2>

          <h3 className="text-xl font-semibold mb-4 text-slate-800">
            Der Apotheker, der eigentlich Informatiker werden wollte
          </h3>
          <p className="text-slate-700 mb-6">
            Ich bin Sascha, 53 Jahre alt, und mein Lebensweg war alles andere
            als geradlinig. Ursprünglich wollte ich Informatik studieren,
            landete aber durch familiäre Erwartungen und eigene Unsicherheit bei
            der Pharmazie in Berlin. 20 Jahre lang war ich Apotheker - ein
            Beruf, den ich respektiere, der aber nie wirklich zu mir gepasst
            hat.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-slate-800">
            Der Ausbruch: Von der Apotheke in die Bäume
          </h3>
          <p className="text-slate-700 mb-6">
            2017 begann ich parallel zu meiner Apothekentätigkeit mit der
            Baumpflege. Klettern, Motorsäge, körperliche Herausforderungen bei
            jedem Wetter - das war meine Befreiung aus dem „achso boring out
            fördernden Leben eines Apothekers“. Nach verschiedenen
            Zertifikatserlangungen machte ich die Baumpflege zwei Jahre
            hauptberuflich. Ein sicheres Leben ist eben auch ein langweiliges
            Leben.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-slate-800">
            Der Hang zum Extremen
          </h3>
          <p className="text-slate-700 mb-6">
            Nicht jeder versteht meinen Hang zum Extremen, doch mich begleitet
            dieser Wunsch permanent: meine Grenzen neu zu definieren, ein Leben
            lang. 2021 legte ich meinen Beruf als Apotheker schließlich ruhend -
            der endgültige Schritt in ein authentisches Leben.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-slate-800">
            „Wie machst Du das, Sascha?“
          </h3>
          <p className="text-slate-700 mb-6">
            Diese Frage wurde mir unzählige Male gestellt. Ich hatte keine
            Ahnung - ich machte es einfach so oder so, und wenn etwas nicht
            ging, machte ich solange daran weiter bis es ging, oder legte es
            ganz schnell zur Seite. Der Wunsch, meine Erkenntnisse und
            Erfahrungen aus meiner Biographie anderen Menschen philosophisch und
            auch physisch näher zu bringen, war schon immer vorhanden.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-slate-800">
            Warum ich erst mit 44 wusste, was ich will
          </h3>
          <p className="text-slate-700 mb-6">
            Es hat über vier Jahrzehnte gedauert, bis ich verstanden habe, wer
            ich wirklich bin. Das ist nicht beschämend - das ist menschlich.
            Viele von uns leben Jahre oder Jahrzehnte in Rollen, die andere für
            uns entworfen haben. Der Mut zur Veränderung kommt oft spät, aber er
            kommt. Bei mir führte er vom sicheren Apotheker-Dasein über die
            körperliche Herausforderung der Baumpflege hin zur Lebensberatung.
          </p>

          <div className="bg-slate-50 p-8 rounded-xl my-8">
            <h3 className="text-xl font-semibold mb-4 text-slate-800 mt-0">
              Was mich qualifiziert, Sie zu beraten
            </h3>
            <p className="text-slate-700 mb-4">
              <strong>
                Nicht meine Perfektion, sondern meine Erfahrung mit dem
                Unvollkommenen:
              </strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                Ich kenne das Gefühl, jahrelang im falschen Leben zu stecken
              </li>
              <li>Ich weiß, wie es ist, Angst vor Veränderung zu haben</li>
              <li>
                Ich habe erlebt, wie schmerzhaft und befreiend echter Wandel
                sein kann
              </li>
              <li>
                Ich verstehe die Schwierigkeit, authentisch zu leben in einer
                Welt voller Erwartungen
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Meine fachliche Entwicklung
          </h2>

          <h3 className="text-xl font-semibold mb-4 text-slate-800">
            Strukturen für die Intuition
          </h3>
          <p className="text-slate-700 mb-6">
            Die Ausbildung zum Lebens- und Sozialberater mit dem Schwerpunkt auf
            Eigenerfahrungen brachte mir endlich die Notwendigkeit von
            Strukturen und Methodiken, um meine Erkenntnisse lebensbejahend und
            wohlwollend fordernd zu vermitteln. Vorher machte ich einfach -
            jetzt kann ich auch erklären, warum es funktioniert.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-slate-800">
            Die KLARE-Methode: Mein persönlicher Beitrag
          </h3>
          <p className="text-slate-700 mb-6">
            Aus meinen eigenen Erfahrungen und der Arbeit mit meinen ersten
            Klienten entwickelte ich die KLARE-Methode. Sie basiert auf einer
            einfachen Erkenntnis: Transformation geschieht nicht durch das
            Hinzufügen von etwas Neuem, sondern durch das Entdecken dessen, was
            bereits da ist.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-slate-800">
            „Ja zum Leben“ – Ein gemeinsamer Weg
          </h3>
          <p className="text-slate-700 mb-6">
            Anfang 2024 entstand aus der Synergie mit meiner Frau Gerda Ahorner
            das Projekt „Ja zum Leben“. Gerda, ebenfalls ausgebildete
            Pharmazeutin mit tiefgreifendem Wissen über Bachblüten und
            energetische Heilmethoden, bringt ihre eigenen wertvollen
            Erfahrungen ein. Unser gemeinsamer Leitgedanke: „Die Zustimmung zum
            Leben ist das große Glück, die Kontrolle jedoch nicht.“
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-6 my-8 italic text-slate-600 bg-amber-50 py-4 rounded-r-lg text-lg">
            „Ich bin nicht hier, um Ihnen zu sagen, wer Sie sein sollen. Ich bin
            hier, um Ihnen zu helfen, zu entdecken, wer Sie bereits sind.“
          </blockquote>

          <p className="text-slate-700 mb-6">
            Meine Rolle sehe ich als die eines Wegbegleiters, nicht als die
            eines Wegweisers.
          </p>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">
              Bereit für ein Gespräch?
            </h3>
            <p className="text-slate-600 mb-6">
              Wenn meine Geschichte bei Ihnen Resonanz findet und Sie Lust auf
              ein unverbindliches Kennenlernen haben, freue ich mich auf Ihre
              Nachricht.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>

        <PersonalGallery />
      </main>
      <WarmFooter />
    </>
  );
}
