import Link from "next/link";
import { formatDate, getAllBlogPosts } from "@/lib/blog/utils";
import WarmNavigation from "@/components/WarmNavigation";
import WarmFooter from "@/components/WarmFooter";

export const metadata = {
  title:
    "Mentaltraining Blog | Sascha Kohler - Gedanken zu Mentaltraining & persönlicher Entwicklung",
  description:
    "Lesen Sie meine Gedanken und Erfahrungen zu Mentaltraining, der KLARE-Methode und persönlicher Entwicklung. Praktische Tipps für mentale Stärke und mehr Kongruenz im Leben.",
};

export default async function BlogPage() {
  const isAdminMode = process.env.NEXT_PUBLIC_ADMIN_MODE === "true";
  const blogPosts = await getAllBlogPosts(isAdminMode);

  return (
    <>
      <WarmNavigation />
      <main className="min-h-screen bg-warm-white pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <p className="text-warm-brown text-lg mb-4">Mein Coaching-Blog</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-dark-brown mb-6">
              Gedanken zu <span className="text-klare-r">Mentaltraining</span>
            </h1>
            <p className="text-xl text-warm-brown max-w-3xl mx-auto leading-relaxed">
              Willkommen in meinem Blog. Hier teile ich meine Erfahrungen und
              Gedanken zu Mentaltraining, der KLARE-Methode und persönlicher
              Entwicklung. Entdecken Sie praktische Ansätze für mentale Stärke
              und Authentizität in Ihrem Leben.
            </p>
          </div>
          {blogPosts.length > 0 && (
            <div className="bg-light-beige shadow-lg rounded-2xl overflow-hidden mb-16">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-deep-brown to-klare-r"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-10 text-center w-full h-full">
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      <span className="bg-warm-white/20 px-4 py-1.5 rounded-full text-sm text-warm-white">
                        Neuer Beitrag
                      </span>
                      {!blogPosts[0].published &&
                        process.env.NEXT_PUBLIC_ADMIN_MODE === "true" && (
                          <span className="bg-klare-r/80 px-4 py-1.5 rounded-full text-sm text-warm-white">
                            Entwurf
                          </span>
                        )}
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light mb-6 text-warm-white max-w-sm">
                      {blogPosts[0].title}
                    </h2>

                    <div className="flex flex-col items-center">
                      <p className="text-warm-white/90 text-base mb-8 max-w-xs leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>

                      <Link
                        href={`/blog/${blogPosts[0].slug}`}
                        className="bg-warm-white text-klare-r px-6 py-3 rounded-lg
                      font-medium hover:bg-warm-white/90 transition-colors"
                      >
                        Jetzt lesen
                      </Link>
                    </div>
                  </div>
                </div>{" "}
                <div className="p-6 md:p-8 bg-warm-white">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-deep-brown text-warm-white flex items-center justify-center font-medium font-serif">
                      {blogPosts[0].author
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-dark-brown">
                        {blogPosts[0].author}
                      </p>
                      <p className="text-sm text-warm-brown">
                        {formatDate(blogPosts[0].date)}
                      </p>
                    </div>
                  </div>
                  <p className="text-warm-brown mb-4 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center">
                    <span className="text-sm text-warm-brown mr-2">
                      {blogPosts[0].readingTime}
                    </span>
                    <span className="text-sm bg-light-beige px-3 py-1 rounded-full text-warm-brown">
                      {blogPosts[0].category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-warm-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-light-beige"
              >
                <div className="h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-brown to-klare-r flex items-center justify-center">
                    <div className="absolute top-0 right-0 bg-warm-white/20 text-warm-white text-xs py-1 px-3 m-3 rounded-full">
                      {post.category}
                    </div>
                    {!post.published &&
                      process.env.NEXT_PUBLIC_ADMIN_MODE === "true" && (
                        <div className="absolute top-0 left-0 bg-klare-r/80 text-warm-white text-xs py-1 px-3 m-3 rounded-full">
                          Entwurf
                        </div>
                      )}
                    <div className="text-warm-white/40 text-6xl font-serif">
                      📝
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-warm-brown mb-3">
                    {formatDate(post.date)}
                  </p>
                  <h3 className="font-serif text-xl font-medium mb-3 text-dark-brown leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-warm-brown mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-deep-brown text-warm-white flex items-center justify-center font-serif text-xs">
                      {post.author
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>
                    <p className="ml-3 text-sm text-warm-brown">
                      {post.author}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-r from-deep-brown to-klare-r text-warm-white rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">
                Bleiben Sie auf dem Laufenden
              </h3>
              <p className="mb-8 leading-relaxed">
                Erhalten Sie neue Blog-Artikel und Einblicke zu Mentaltraining
                und persönlicher Entwicklung direkt in Ihr Postfach.
              </p>
              <Link href="/kontakt">
                <button className="bg-warm-white text-deep-brown hover:bg-warm-white/90 py-3 px-8 rounded-lg font-medium transition-all text-lg shadow-lg">
                  Newsletter abonnieren
                </button>
              </Link>
            </div>
          </div>
          {/* Über den Autor */}
          <div className="bg-light-beige shadow-lg rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="md:col-span-1 relative h-full min-h-[280px] md:min-h-full bg-gradient-to-br from-deep-brown to-klare-r flex items-center justify-center p-8">
                <div className="bg-warm-white/10 w-48 h-48 rounded-full overflow-hidden mx-auto relative border-4 border-warm-white/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-serif text-warm-white">
                      SK
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 p-8 bg-warm-white">
                <h3 className="font-serif text-2xl font-light mb-4 text-dark-brown">
                  Über mich - Sascha Kohler
                </h3>
                <p className="text-warm-brown mb-4 leading-relaxed">
                  Als zertifizierter Mentaltrainer, NLP-Master und Schöpfer der
                  KLARE-Methode begleite ich Menschen dabei, ihre mentale Stärke
                  wieder bewusst wahrzunehmen und zu aktivieren.
                </p>
                <p className="text-warm-brown mb-4 leading-relaxed">
                  Mein Ansatz verbindet bewährte Mentaltechniken mit praktischer
                  Alltagsanwendung. Dabei liegt der Fokus auf Selbsterfahrung
                  und authentischer Transformation durch Kongruenz.
                </p>
                <div className="mt-6">
                  <Link
                    href="/ueber-mich"
                    className="text-klare-r font-medium hover:text-klare-r/80 inline-flex items-center transition-colors"
                  >
                    Mehr über mich erfahren
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <WarmFooter />
    </>
  );
}
