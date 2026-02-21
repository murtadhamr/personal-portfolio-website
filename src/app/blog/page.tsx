import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "A collection of articles on data science, engineering, and technology.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    // Group posts by year
    const postsByYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
        const year = new Date(post.date).getFullYear().toString();
        if (!acc[year]) acc[year] = [];
        acc[year].push(post);
        return acc;
    }, {});

    const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

    return (
        <div className="mx-auto max-w-content px-6 py-16">
            <h1 className="mb-2 text-3xl font-bold tracking-tight">Blog</h1>
            <p className="mb-12 text-[var(--muted)]">
                A collection of articles on topics I&apos;m passionate about.
            </p>

            {years.map((year) => (
                <section key={year} className="mb-12">
                    <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                        {year}
                    </h2>
                    <div className="flex flex-col gap-1">
                        {postsByYear[year].map((post) => (
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
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </time>
                                </div>
                                {post.excerpt && (
                                    <p className="mt-1 text-sm text-[var(--muted)] line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                )}
                            </Link>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
