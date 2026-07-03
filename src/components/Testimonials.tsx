"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;

  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n]);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  const t = testimonials[i];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="panel relative overflow-hidden rounded-3xl px-6 py-12 sm:px-14">
        <span className="pointer-events-none absolute left-5 top-2 font-display text-8xl text-gold-500/25 select-none">
          &ldquo;
        </span>
        <div className="min-h-[190px] sm:min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="font-serif text-xl italic leading-relaxed text-cream/90 sm:text-2xl">
                {t.quote}
              </p>
              <footer className="mt-6">
                <div className="mb-2 flex justify-center gap-1 text-gold-400">
                  {"★★★★★".split("").map((s, k) => (
                    <span key={k}>{s}</span>
                  ))}
                </div>
                <p className="font-display text-gold-300">{t.name}</p>
                <p className="font-sans text-sm text-cream/55">{t.event}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          className="grid h-10 w-10 place-items-center rounded-full gold-border text-gold-300 transition-colors hover:bg-maroon-700/60"
          aria-label="Previous testimonial"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to testimonial ${k + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                k === i ? "w-7 bg-gold-400" : "w-2.5 bg-gold-500/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          className="grid h-10 w-10 place-items-center rounded-full gold-border text-gold-300 transition-colors hover:bg-maroon-700/60"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </div>
  );
}
