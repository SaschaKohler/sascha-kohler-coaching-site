import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from 'remark';
import html from 'remark-html';

// Define the blog post metadata type
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  coverImage: string;
  content: string;
  readingTime: string;
  published: boolean;
}

const BLOG_DIRECTORY = path.join(process.cwd(), "content/blog");

// Function to convert markdown to HTML
async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Function to get all blog posts sorted by date
export async function getAllBlogPosts(includeUnpublished = false): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIRECTORY);

  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx?$/, "");
        const fullPath = path.join(BLOG_DIRECTORY, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        const readingTime = calculateReadingTime(content);
        const htmlContent = await markdownToHtml(content);

        return {
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          author: data.author,
          category: data.category,
          coverImage: data.coverImage,
          content: htmlContent,
          readingTime: readingTime,
          published: data.published !== undefined ? data.published : true,
        } as BlogPost;
      })
  );

  return allPostsData
    .filter(post => includeUnpublished || post.published)
    .sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return 1;
      } else {
        return -1;
      }
    });
}
// Function to get a specific blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    let filePath = path.join(BLOG_DIRECTORY, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);
      if (!fs.existsSync(filePath)) {
        return null;
      }
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const readingTime = calculateReadingTime(content);
    const htmlContent = await markdownToHtml(content);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      category: data.category,
      coverImage: data.coverImage,
      content: htmlContent,
      readingTime: readingTime,
      published: data.published !== undefined ? data.published : true,
    } as BlogPost;
  } catch (error) {
    console.error(`Error getting blog post by slug ${slug}:`, error);
    return null;
  }
}

// Format date to locale string
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("de-AT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Function to calculate reading time
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} Min. Lesezeit`;
}
