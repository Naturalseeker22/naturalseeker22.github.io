import { highlights } from '../data';
import { motion } from 'motion/react';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Bio */}
      <section className="space-y-4">
        <p className="text-[15px] text-zinc-300 leading-relaxed max-w-2xl">
          I'm currently an AI engineer at a startup. I do ML
          systems, GPU kernels and love competing in ML competitions.
        </p>
        <p className="text-[15px] text-zinc-400 leading-relaxed max-w-2xl">
          While completing my degree at Boston University, I wrote my thesis on
          test-time fine-tuning with diverse rewards using Conditional Variational Reward Models under{' '}
          <a
            href="https://eshed1.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 border-b border-emerald-400/30 hover:border-emerald-400 transition-colors"
          >
            Professor Eshed Ohn-Bar
          </a>{' '}
          and collaborated with{' '}
          <a
            href="https://www.leedokyun.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 border-b border-emerald-400/30 hover:border-emerald-400 transition-colors"
          >
            Professor Dokyun (DK) Lee
          </a>{' '}
          Before that, I worked on deep learning for audio data.
        </p>
      </section>

      {/* News */}
      <section className="space-y-3">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-wider">News</h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="divide-y divide-zinc-800/60"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex gap-4 py-2.5 group"
            >
              <span className="text-xs font-mono text-zinc-600 w-20 shrink-0 pt-0.5">
                {item.date}
              </span>
              <div className="min-w-0">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-200 hover:text-emerald-400 transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-zinc-200">{item.title}</span>
                )}
                <p className="text-xs text-zinc-500 mt-0.5">{item.result}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <p className="text-sm text-zinc-500">
        Reach me at{' '}
        <a href="mailto:shivaco@bu.edu" className="text-emerald-400 border-b border-emerald-400/30 hover:border-emerald-400 transition-colors">
          email
        </a>
      </p>

    </div>
  );
}
