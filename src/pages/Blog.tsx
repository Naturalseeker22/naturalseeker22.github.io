import { blogPosts } from '../data';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5 } },
};

export default function Blog() {
  return (
    <div className="space-y-10">
      <header>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-mono text-emerald-400"
        >
          root@ns:~$ ls ./blog/
        </motion.div>
      </header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {blogPosts.map(post => (
          <motion.div key={post.id} variants={item}>
            <Link to={`/blog/${post.id}`} className="block group">
              <article className="card-glow border-b border-zinc-800/50 pb-8 group-hover:border-emerald-400/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-sm font-mono text-zinc-500">{post.date}</time>
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-emerald-400/70 bg-emerald-400/10 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-2xl font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-sm font-mono text-emerald-400 opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2">
                  Read article &rarr;
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
