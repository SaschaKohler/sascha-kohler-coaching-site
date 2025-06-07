import Link from "next/link";
import Image from "next/image";
import { formatDate, getAllBlogPosts } from "@/lib/blog/utils";

export const metadata = {
  title:
    "Coaching Blog | Sascha Kohler - Gedanken zu Lebensberatung & persönlicher Entwicklung",
  description:
    "Lesen Sie meine Gedanken und Erfahrungen zu Lebensberatung, der KLARE-Methode und persönlicher Entwicklung. Praktische Tipps für mehr Kongruenz im Leben.",
};

export default async function BlogPage() {
  const isAdminMode = process.env.NEXT_PUBLIC_ADMIN_MODE === "true";
  const blogPosts = await getAllBlogPosts(isAdminMode);

  return (
    <main className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-800">
            Gedanken zur <span className="text-amber-600">Lebensberatung</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Willkommen in meinem Blog. Hier teile ich meine Erfahrungen und
            Gedanken zu Lebensberatung, der KLARE-Methode und persönlicher
            Entwicklung. Entdecken Sie praktische Ansätze für mehr Kongruenz und
            Authentizität in Ihrem Leben.
          </p>
        </div>
        {blogPosts.length > 0 && (
          <div className="bg-white shadow-xl rounded-xl overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-auto flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-amber-600"></div>
                <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-10 text-center w-full h-full">
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm text-white">
                      Neuer Beitrag
                    </span>
                    {!blogPosts[0].published &&
                      process.env.NEXT_PUBLIC_ADMIN_MODE === "true" && (
                        <span className="bg-amber-500/80 px-4 py-1.5 rounded-full text-sm text-white">
                          Entwurf
                        </span>
                      )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white max-w-sm">
                    {blogPosts[0].title}
                  </h2>

                  <div className="flex flex-col items-center">
                    <p className="text-white/90 text-base mb-8 max-w-xs">
                      {blogPosts[0].excerpt}
                    </p>

                    <Link
                      href={`/blog/${blogPosts[0].slug}`}
                      className="bg-white text-amber-600 px-6 py-2.5 rounded-full
                      font-medium hover:bg-gray-50 transition-colors"
                    >
                      Jetzt lesen
                    </Link>
                  </div>
                </div>
              </div>{" "}
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold">
                    {blogPosts[0].author
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{blogPosts[0].author}</p>
                    <p className="text-sm text-slate-600">
                      {formatDate(blogPosts[0].date)}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center">
                  <span className="text-sm text-slate-600 mr-2">
                    {blogPosts[0].readingTime}
                  </span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded-full text-slate-600">
                    {blogPosts[0].category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-amber-600 flex items-center justify-center">
                  <div className="absolute top-0 right-0 bg-white/20 text-white text-xs py-1 px-3 m-2 rounded-full">
                    {post.category}
                  </div>
                  {!post.published &&
                    process.env.NEXT_PUBLIC_ADMIN_MODE === "true" && (
                      <div className="absolute top-0 left-0 bg-amber-500/80 text-white text-xs py-1 px-3 m-2 rounded-full">
                        Entwurf
                      </div>
                    )}
                </div>
              </div>{" "}
              <div className="p-5">
                <p className="text-sm text-slate-600 mb-2">
                  {formatDate(post.date)}
                </p>
                <h3 className="text-xl font-bold mb-2 text-slate-800">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
                    {post.author
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>
                  <p className="ml-2 text-sm text-slate-600">{post.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-amber-600 text-white rounded-xl p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Bleiben Sie auf dem Laufenden
            </h3>
            <p className="mb-8">
              Erhalten Sie neue Blog-Artikel und Einblicke zu Lebensberatung und
              persönlicher Entwicklung direkt in Ihr Postfach.
            </p>
            <Link href="/kontakt">
              <button className="bg-white text-slate-800 hover:bg-gray-100 py-3 px-6 rounded-full font-medium transition-all text-lg shadow-lg">
                Newsletter abonnieren
              </button>
            </Link>
          </div>
        </div>
        {/* Über den Autor */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-0">
            <div className="md:col-span-1 relative h-full min-h-[280px] md:min-h-full bg-gradient-to-br from-slate-800 to-amber-600 flex items-center justify-center p-8">
              <div className="bg-white/10 w-48 h-48 rounded-full overflow-hidden mx-auto relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">SK</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 p-8">
              <h3 className="text-2xl font-bold mb-3 text-slate-800">
                Über mich - Sascha Kohler
              </h3>
              <p className="text-slate-600 mb-4">
                Als diplomierter Lebens- und Sozialberater (ab Sept 2025),
                NLP-Trainer und Schöpfer der KLARE-Methode begleite ich Menschen
                dabei, ihre eigenen Fähigkeiten wieder bewusst wahrzunehmen und
                zu integrieren.
              </p>
              <p className="text-slate-600 mb-4">
                Mein Ansatz verbindet bewährte psychologische Konzepte mit
                praktischer Alltagsanwendung. Dabei liegt der Fokus auf
                Selbsterfahrung und authentischer Transformation durch
                Kongruenz.
              </p>
              <div className="mt-4">
                <Link
                  href="/ueber-mich"
                  className="text-amber-600 font-medium hover:underline inline-flex items-center"
                >
                  Mehr über mich erfahren
                  <svg
                    className="w-4 h-4 ml-1"
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
  );
}
