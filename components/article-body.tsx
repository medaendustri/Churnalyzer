import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface ArticleBodyProps {
  content: string
}

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mt-12 mb-6 first:mt-0">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-10 mb-4">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 mt-8 mb-3">{children}</h3>
        ),
        p: ({ children }) => <p className="text-slate-700 leading-relaxed mb-6">{children}</p>,
        ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-700">{children}</ol>,
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-red-500 pl-6 py-2 my-6 bg-slate-50 italic text-slate-700">
            {children}
          </blockquote>
        ),
        strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        code: ({ children }) => (
          <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm font-mono">{children}</code>
        ),
        pre: ({ children }) => (
          <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">{children}</pre>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
