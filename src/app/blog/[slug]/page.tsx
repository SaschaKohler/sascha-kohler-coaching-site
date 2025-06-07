import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts, formatDate } from "@/lib/blog/utils";
import Link from "next/link";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: { slug: string; };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return { title: "Blog-Post nicht gefunden" };
  return {
    title: `${post.title} | Sascha Kohler Coaching Blog`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date, authors: [post.author] },
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
    <main className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zum Blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-slate-500 text-sm">{post.readingTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-800">
              {post.title}
            </h1>

            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold mr-4">
                {post.author.split(" ").map((name) => name[0]).join("")}
              </div>
              <div>
                <p className="font-medium text-slate-800">{post.author}</p>
                <p className="text-slate-600">{formatDate(post.date)}</p>
              </div>
            </div>
          </header>

          {/* Blog Content */}
          <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-800 prose-headings:font-bold
            prose-h1:text-4xl prose-h1:mb-6
            prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
            prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-amber-600 prose-a:hover:text-amber-700 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-800 prose-strong:font-semibold
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
            prose-li:leading-relaxed prose-li:mb-1
            prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:pl-4 
            prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-slate-600 
            prose-blockquote:bg-amber-50 prose-blockquote:py-2 prose-blockquote:rounded-r
            prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
            prose-pre:bg-slate-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-hr:my-8 prose-hr:border-slate-300">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-amber-50 rounded-xl border border-amber-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Interesse an einem persönlichen Gespräch?
              </h3>
              <p className="text-slate-600 mb-6">
                Wenn Sie mehr über meine Arbeit erfahren oder ein unverbindliches 
                Beratungsgespräch führen möchten, freue ich mich auf Ihre Nachricht.
              </p>
              <Link
                href="/kontakt"
                className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
