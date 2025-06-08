import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts, formatDate } from "@/lib/blog/utils";
import Link from "next/link";
import { Metadata } from "next";
import WarmNavigation from '@/components/WarmNavigation';
import WarmFooter from '@/components/WarmFooter';

interface BlogPostPageProps {
  params: { slug: string; };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return { title: "Blog-Post nicht gefunden" };
  return {
    title: `${post.title} | Sascha Kohler Mentaltraining Blog`,
    description: post.excerpt,
    openGraph: { 
      title: post.title, 
      description: post.excerpt, 
      type: "article", 
      publishedTime: post.date, 
      authors: [post.author] 
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();
  return (
    <>
      <WarmNavigation />
      <main className="min-h-screen bg-warm-white pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-klare-r hover:text-klare-r/80 font-medium transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Zurück zum Blog
            </Link>
          </div>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-klare-r/10 text-klare-r px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-warm-brown text-sm">{post.readingTime}</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-8 text-dark-brown leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-deep-brown text-warm-white flex items-center justify-center font-serif mr-4">
                {post.author.split(" ").map((name) => name[0]).join("")}
              </div>
              <div>
                <p className="font-medium text-dark-brown">{post.author}</p>
                <p className="text-warm-brown">{formatDate(post.date)}</p>
              </div>
            </div>
          </header>

          {/* Blog Content */}
          <div className="prose prose-lg prose-warm max-w-none 
            prose-headings:text-dark-brown prose-headings:font-serif prose-headings:font-light
            prose-h1:text-4xl prose-h1:mb-6
            prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
            prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
            prose-p:text-warm-brown prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-klare-r prose-a:hover:text-klare-r/80 prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
            prose-strong:text-dark-brown prose-strong:font-semibold
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
            prose-li:leading-relaxed prose-li:mb-1 prose-li:text-warm-brown
            prose-blockquote:border-l-4 prose-blockquote:border-klare-r prose-blockquote:pl-6 
            prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-warm-brown 
            prose-blockquote:bg-klare-r-soft prose-blockquote:py-4 prose-blockquote:rounded-r-lg
            prose-code:bg-light-beige prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-dark-brown
            prose-pre:bg-deep-brown prose-pre:text-warm-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-hr:my-8 prose-hr:border-soft-beige">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-light-beige rounded-2xl border border-klare-r/20">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-light mb-4 text-dark-brown">
                Interesse an einem persönlichen Mentaltraining?
              </h3>
              <p className="text-warm-brown mb-6 leading-relaxed">
                Wenn Sie mehr über meine Arbeit als Mentaltrainer erfahren oder ein 
                unverbindliches Beratungsgespräch führen möchten, freue ich mich auf 
                Ihre Nachricht.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="inline-block bg-klare-r text-warm-white px-6 py-3 rounded-lg font-medium hover:bg-klare-r/90 transition-colors"
                >
                  Kontakt aufnehmen
                </Link>
                <Link
                  href="/online-beratung"
                  className="inline-block bg-transparent text-klare-r px-6 py-3 rounded-lg font-medium border-2 border-klare-r hover:bg-klare-r hover:text-warm-white transition-colors"
                >
                  Online-Termin buchen
                </Link>
              </div>
            </div>
          </div>
        </article>
        </div>
      </main>
      <WarmFooter />
    </>
  );
}
