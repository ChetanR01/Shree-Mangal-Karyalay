"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/data/site";
import { Mandala, Toran, Diya, Icon } from "./Ornaments";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleUp = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-royal paisley-texture pt-24"
    >
      {/* Parallax mandalas */}
      <motion.div style={{ y: yBack, scale: scaleUp }} className="pointer-events-none absolute inset-0">
        <Mandala className="spin-slow absolute -right-40 -top-32 h-[36rem] w-[36rem] opacity-25 sm:opacity-30" />
        <Mandala className="spin-slow-reverse absolute -left-48 bottom-[-14rem] h-[44rem] w-[44rem] opacity-20" />
      </motion.div>

      {/* Central glowing halo */}
      <motion.div
        style={{ y: yMid }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        aria-hidden="true"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_62%)]" />
        <Mandala className="spin-slow absolute inset-0 opacity-40" />
      </motion.div>

      {/* Toran garland across the top */}
      <div className="pointer-events-none absolute inset-x-0 top-20 z-20 px-2">
        <Toran className="h-20 w-full" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-30 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-deva text-lg text-marigold sm:text-xl"
        >
          ॥ शुभ मंगल सावधान ॥
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-deva text-5xl leading-tight text-gold-gradient drop-shadow-[0_2px_18px_rgba(212,175,55,0.35)] sm:text-7xl"
        >
          {site.nameDeva}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mt-2 font-display text-xl tracking-[0.35em] text-cream/85 uppercase sm:text-2xl"
        >
          {site.name}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-3"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/60" />
          <span className="font-serif text-lg italic text-cream/75 sm:text-xl">{site.tagline}</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.9 }}
          className="mt-3 flex items-center justify-center gap-2 font-sans text-sm text-cream/60"
        >
          <Icon name="pin" className="h-4 w-4 text-gold-400" />
          {site.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full gold-surface px-8 py-3.5 font-sans font-semibold transition-transform hover:scale-105"
          >
            Book Your Date
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-full gold-border bg-maroon-800/40 px-8 py-3.5 font-sans font-semibold text-gold-200 backdrop-blur-sm transition-colors hover:bg-maroon-700/60"
          >
            <Icon name="phone" className="h-4 w-4" /> {site.phonePrimary}
          </a>
        </motion.div>
      </motion.div>

      {/* Diyas along the bottom */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-10 sm:gap-20">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 + i * 0.15, duration: 0.7 }}
          >
            <Diya className="h-16 w-12" />
          </motion.div>
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-gold-500/50 p-1"
        >
          <span className="h-2 w-1 rounded-full bg-gold-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
