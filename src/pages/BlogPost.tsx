import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="text-center py-20 space-y-4">
        <h1 className="text-2xl font-bold text-zinc-100">Post not found</h1>
        <Link to="/blog" className="text-emerald-400 hover:underline font-mono">
          &larr; Back to blog
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-emerald-400 transition-colors group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        cd ..
      </Link>

      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 pb-8 border-b border-zinc-900"
      >
        <div className="flex items-center gap-3">
          <time className="text-sm font-mono text-zinc-500">{post.date}</time>
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs font-mono text-emerald-400/70 bg-emerald-400/10 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
          {post.title}
        </h1>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose prose-invert prose-zinc max-w-none"
      >
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {post.content}
        </Markdown>
      </motion.div>
    </article>
  );
}
