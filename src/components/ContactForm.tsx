"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/data/site";

const eventTypes = [
  "Wedding",
  "Engagement",
  "Haldi",
  "Naming Ceremony",
  "Birthday",
  "Corporate / Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", type: eventTypes[0], guests: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — compose a WhatsApp enquiry so the venue gets the lead instantly.
    const msg = encodeURIComponent(
      `Namaskar! I would like to enquire about booking ${site.name}.\n\n` +
        `Name: ${form.name}\nPhone: ${form.phone}\nEvent: ${form.type}\n` +
        `Preferred Date: ${form.date || "Flexible"}\nApprox Guests: ${form.guests || "TBD"}`,
    );
    window.open(`${site.whatsappHref}?text=${msg}`, "_blank");
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-gold-500/25 bg-maroon-900/40 px-4 py-3 font-sans text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-gold-400/80 focus:bg-maroon-900/70";

  return (
    <form onSubmit={handleSubmit} className="panel rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1.5 block font-serif text-sm text-gold-300">Your Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Full name"
            className={field}
          />
        </div>
        <div>
          <label className="mb-1.5 block font-serif text-sm text-gold-300">Phone</label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Mobile number"
            className={field}
          />
        </div>
        <div>
          <label className="mb-1.5 block font-serif text-sm text-gold-300">Event Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className={`${field} [color-scheme:dark]`}
          />
        </div>
        <div>
          <label className="mb-1.5 block font-serif text-sm text-gold-300">Occasion</label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className={field}
          >
            {eventTypes.map((t) => (
              <option key={t} className="bg-maroon-900">
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block font-serif text-sm text-gold-300">Approx. Guests</label>
          <input
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            placeholder="e.g. 500"
            className={field}
          />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="mt-6 w-full rounded-xl gold-surface px-6 py-3.5 font-sans font-semibold"
      >
        {sent ? "✓ Opening WhatsApp…" : "Send Enquiry via WhatsApp"}
      </motion.button>
      <p className="mt-3 text-center font-sans text-xs text-cream/50">
        Prefer to talk? Call us at{" "}
        <a href={site.phoneHref} className="text-gold-300 underline-offset-2 hover:underline">
          {site.phonePrimary}
        </a>
      </p>
    </form>
  );
}
