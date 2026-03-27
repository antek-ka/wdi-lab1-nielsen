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
import { cn } from "@/lib/utils";

type Rule = (typeof rules)[number];
type RuleExample = {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
  translation?: string;
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
    <main className="relative bg-background px-4 pt-48 pb-6 lg:grid lg:grid-cols-[280px_1fr] lg:gap-6 lg:pt-6">
      <aside className="fixed top-0 left-0 z-20 w-full bg-background py-2 lg:sticky lg:top-4 lg:mb-0 lg:self-start lg:bg-transparent lg:py-0">
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
            <nav
              aria-label="Table of contents"
              className="relative flex flex-col gap-3"
            >
              <Button
                variant="outline"
                className="w-full justify-start lg:hidden"
                onClick={() => setNavOpen((current) => !current)}
                aria-expanded={navOpen}
                aria-controls="table-of-contents-list"
              >
                {navOpen ? "Hide sections" : "Show sections"}
              </Button>
              <div
                className={cn(
                  "absolute top-full right-0 left-0 z-30 mt-2 max-h-[60vh] overflow-auto rounded-md border bg-card p-4 shadow-lg lg:static lg:mt-0 lg:max-h-none lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none",
                  !navOpen && "hidden lg:block",
                )}
              >
                <ul id="table-of-contents-list" className="flex flex-col gap-2">
                  {rules.map((rule) => (
                    <li key={rule.id} className="text-sm">
                      <Link
                        href={`#${rule.id}`}
                        className="text-white hover:underline"
                      >
                        {rule.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </CardContent>
        </Card>
      </aside>

      <section className="flex flex-col items-center gap-4 lg:gap-10">
        <Card
          asChild
          className="w-full lg:max-w-[80%] mb-10 border-primary/30 bg-linear-to-br from-primary/10 via-background to-background shadow-lg"
          data-component="hero"
        >
          <article>
            <CardHeader className="gap-3 pb-4">
              <span className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
                Jakob Nielsen · Interaction design
              </span>
              <CardTitle
                titleTag="h1"
                className="text-3xl leading-tight md:text-4xl"
              >
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
            className="w-full lg:max-w-[80%]"
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
                      PL
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
                              {"translation" in example &&
                              example.translation ? (
                                <div className="mt-4 rounded-md border p-4">
                                  <h3 className="text-sm font-semibold tracking-wide uppercase">
                                    PL
                                  </h3>
                                  <p className="mt-2 text-muted-foreground">
                                    {example.translation}
                                  </p>
                                </div>
                              ) : null}
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
