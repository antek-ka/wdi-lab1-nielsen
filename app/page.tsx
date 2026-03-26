"use client";

import Link from "next/link";
import Image from "next/image";
import { rules } from "@/public/content/rules";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Rule = (typeof rules)[number];
type RuleExample = {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
};

const hasTranslation = (rule: Rule): rule is Rule & { translation: string } =>
  "translation" in rule && Boolean(rule.translation);

const hasExamples = (rule: Rule): rule is Rule & { examples: RuleExample[] } =>
  "examples" in rule &&
  Array.isArray(rule.examples) &&
  rule.examples.length > 0;

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  return (
    <main className="relative bg-background px-4 py-6 lg:grid lg:grid-cols-[280px_1fr] lg:gap-6">
      <aside className="sticky top-0 z-20 mb-4 bg-background py-2 md:top-4 md:mb-0 md:self-start md:bg-transparent md:py-0">
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between gap-3">
              <CardTitle className="text-base">Table of contents</CardTitle>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                <Sun className="hidden dark:block" />
                <Moon className="block dark:hidden" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <nav aria-label="Table of contents" className="flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setNavOpen((current) => !current)}
                aria-expanded={navOpen}
                aria-controls="table-of-contents-list"
              >
                {navOpen ? "Hide sections" : "Show sections"}
              </Button>
              {navOpen ? (
                <ul id="table-of-contents-list" className="flex flex-col gap-2">
                  {rules.map((rule) => (
                    <li key={rule.id} className="text-sm">
                      <Link
                        href={`#${rule.id}`}
                        className="text-primary hover:underline"
                      >
                        {rule.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </nav>
          </CardContent>
        </Card>
      </aside>

      <section className="flex flex-col items-center gap-4">
        <Card
          asChild
          className="w-full max-w-4xl border-primary/30 bg-linear-to-br from-primary/10 via-background to-background shadow-lg"
          data-component="hero"
        >
          <article>
            <CardHeader className="gap-3 pb-4">
              <span className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
                Jakob Nielsen · Interaction design
              </span>
              <CardTitle className="text-3xl leading-tight md:text-4xl">
                10 Usability Heuristics for User Interface Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground md:text-lg">
                General principles that help you spot usability issues quickly,
                without needing a full UX study.
              </p>
            </CardContent>
          </article>
        </Card>

        {rules.map((rule) => (
          <Card
            asChild
            className="w-full max-w-3xl"
            data-component="card"
            key={rule.id}
          >
            <article id={`${rule.id}`}>
              <CardHeader>
                <CardTitle className="text-xl">{rule.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{rule.description}</p>

                {hasTranslation(rule) ? (
                  <section className="mt-5 rounded-md border p-4">
                    <h3 className="text-sm font-semibold tracking-wide uppercase">
                      Polish translation
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {rule.translation}
                    </p>
                  </section>
                ) : null}

                {hasExamples(rule) ? (
                  <section className="mt-6">
                    <h3 className="mb-3 text-sm font-semibold tracking-wide uppercase">
                      Examples
                    </h3>
                    <Carousel
                      opts={{ align: "start", loop: true }}
                      className="px-10"
                    >
                      <CarouselContent>
                        {rule.examples.map((example) => (
                          <CarouselItem key={example.id}>
                            <article className="rounded-md border bg-background p-4">
                              <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                                {example.category}
                              </p>
                              <h4 className="mt-1 text-lg font-semibold">
                                {example.title}
                              </h4>
                              {/* External placeholders; keep native img to avoid image config overhead. */}
                              {}
                              <Image
                                src={example.image}
                                alt={example.title}
                                className="mt-3 aspect-16/10 w-full rounded-md border object-cover"
                                width={1000}
                                height={1000}
                              />
                              <p className="mt-3 text-muted-foreground">
                                {example.description}
                              </p>
                            </article>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </section>
                ) : null}
              </CardContent>
            </article>
          </Card>
        ))}
      </section>
    </main>
  );
}
