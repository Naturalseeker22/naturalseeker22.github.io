import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Github, Twitter, Terminal, Mail } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-sm px-6 py-4 md:px-8">
        <div className="max-w-3xl mx-auto w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-100 font-mono font-semibold hover:text-emerald-400 transition-colors">
            <Terminal className="w-5 h-5" />
            <span>~/naturalseeker</span>
          </Link>
          <nav className="flex gap-6 text-sm font-mono">
            <Link
              to="/"
              className={`hover:text-emerald-400 transition-colors ${location.pathname === '/' ? 'text-emerald-400' : 'text-zinc-400'}`}
            >
              ./about
            </Link>
            <Link
              to="/blog"
              className={`hover:text-emerald-400 transition-colors ${location.pathname.startsWith('/blog') ? 'text-emerald-400' : 'text-zinc-400'}`}
            >
              ./blog
            </Link>
          </nav>
        </div>
      </header>

      <div className="min-h-screen flex flex-col max-w-3xl mx-auto px-6 py-12 md:py-20">
        <main className="flex-grow">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </main>

        <footer className="mt-20 pt-8 border-t border-zinc-900 flex items-center justify-center gap-6 text-sm text-zinc-500 font-mono">
          <a href="https://github.com/Naturalseeker22" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors"><Github className="w-4 h-4" /></a>
          <a href="https://x.com/naturalseeker22" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors"><Twitter className="w-4 h-4" /></a>
          <a href="https://www.kaggle.com/naturalseeker" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors"><span className="text-sm font-bold">K</span></a>
          <a href="mailto:shivaco@bu.edu" className="hover:text-emerald-400 transition-colors"><Mail className="w-4 h-4" /></a>
        </footer>
      </div>
    </>
  );
}
