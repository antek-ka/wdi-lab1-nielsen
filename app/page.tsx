"use client";

import Link from "next/link";
import { rules } from "@/public/content/rules";
import { useState } from "react";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <main className="relative flex flex-col md:grid md:grid-cols-[1fr_7fr] bg-slate-100">
      <nav
        className={`md:relative p-4 ${navOpen ? "sticky top-0" : ""} bg-slate-100`}
      >
        <button
          className="w-full text-left"
          onClick={() => setNavOpen(!navOpen)}
        >
          Table of contents
        </button>
        <ul className="md:sticky md:top-0 flex flex-col gap-2 items-start">
          {navOpen ? (
            <ul>
              {rules.map((rule) => (
                <li key={rule.id} className="text-sm">
                  <Link href={`#${rule.id}`}>{rule.title}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </ul>
      </nav>
      <section className="flex flex-col gap-4 justify-center items-center py-6">
        <article
          className="p-4 md:p-8 bg-white rounded-lg max-w-2xl flex flex-col gap-4"
          data-component="hero"
        >
          <span>Jakob Nielsen · Interaction design</span>
          <h1>10 Usability Heuristics for User Interface Design</h1>
          <p>
            General principles that help you spot usability issues quickly,
            without needing a full UX study.
          </p>
        </article>
        {rules.map((rule) => (
          <article
            key={rule.id}
            className="p-4 md:p-8 bg-white rounded-lg max-w-2xl"
            data-component="card"
          >
            <h2>{rule.title}</h2>
            <p>{rule.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
