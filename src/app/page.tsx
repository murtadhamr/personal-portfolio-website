import Link from "next/link";
import { getAllPosts, getAllProjects } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "murtadhamr.com — Portfolio",
  description:
    "Personal portfolio and blog — data science, business intelligence, and data engineering.",
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const projects = getAllProjects().filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-content px-6 py-16">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Hi, I'm Ado 👋
        </h1>
        <p>
          I'm a Strategy & Analytics Manager working at <a href="https://gojek.com"><u>Gojek (GoTo Group)</u></a>.
          focusing on leading and managing IDR billions on-demand services business portfolio using data analytics and business intelligence.
          <br></br>
          <br></br>
          Prior to Gojek, I was working at some big tech companies namely Amazon, Tokopedia (Tiktok Shop), and Grab. I'm mainly using SQL, Python, Data Viz tools,and Spreadsheets
          to compose data stories and insights to support business decisions.
          <br></br>
          <br></br>
          I've lived in several cities including Jakarta, Los Angeles, and Seattle for either work or studies — now in Jakarta.
          I enjoy solving problems through data and AI which can drive substantial impacts and enormous values to not only for me as person, but for wider societies.
        </p>
      </section>

      {/* Latest Insights */}
      <section className="mb-20">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Latest Insights</h2>
          <Link
            href="/blog"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            See all posts →
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group -mx-3 rounded-lg px-3 py-4 transition-colors hover:bg-[var(--card-bg)]"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h3>
                <time className="shrink-0 text-sm text-[var(--muted)]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-1 text-sm text-[var(--muted)] line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-20">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            See all projects →
          </Link>
        </div>
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group rounded-xl border border-[var(--border)] p-5 transition-all hover:border-[var(--muted)] hover:shadow-sm"
            >
              <h3 className="mb-2 font-medium text-[var(--foreground)]">
                {project.title}
              </h3>
              <p className="mb-3 text-sm text-[var(--muted)] line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--tag-bg)] px-2.5 py-0.5 text-xs text-[var(--tag-text)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Let&apos;s Connect</h2>
        <p className="mb-6 text-[var(--muted)]">
          If you want to get in touch about something or just say hi, feel free
          to reach out on socials or email me. You can write to me in English or
          Bahasa Indonesia.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/murtadhamr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/murtadhamr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </Link>
        </div>
      </section>
    </div>
  );
}
