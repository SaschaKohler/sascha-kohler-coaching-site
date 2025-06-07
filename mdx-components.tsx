import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Standard HTML elements with custom styling for coaching blog
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-slate-800 font-display">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-4 mt-8 text-slate-800 font-display">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mb-3 mt-6 text-slate-800 font-display">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mb-2 mt-4 text-slate-800">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-slate-700 leading-relaxed text-lg">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-amber-600 hover:text-amber-700 underline decoration-amber-200 hover:decoration-amber-400 transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-700">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed text-lg">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-amber-500 pl-6 my-8 italic text-slate-600 bg-amber-50 py-4 rounded-r-lg text-lg">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-800">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto my-6">
        {children}
      </pre>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-800">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-slate-700">{children}</em>
    ),
    hr: () => <hr className="my-12 border-slate-300" />,
    ...components,
  }
}
