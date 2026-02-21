import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import type { Metadata } from "next";

interface PageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const post = getPostBySlug(params.slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: post.meta.title,
        description: post.meta.excerpt,
    };
}

export default function BlogPostPage({ params }: PageProps) {
    const post = getPostBySlug(params.slug);
    if (!post) notFound();

    return (
        <div className="mx-auto max-w-content px-6 py-16">
            {/* Header */}
            <header className="mb-10">
                <time className="text-sm text-[var(--muted)]">
                    {new Date(post.meta.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
                <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                    {post.meta.title}
                </h1>
                {post.meta.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                        {post.meta.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-[var(--tag-bg)] px-2.5 py-0.5 text-xs text-[var(--tag-text)]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </header>

            {/* Content */}
            <article className="prose prose-neutral dark:prose-invert max-w-none">
                <MDXRemote
                    source={post.content}
                    options={{
                        mdxOptions: {
                            rehypePlugins: [rehypeHighlight, rehypeSlug],
                        },
                    }}
                />
            </article>

            {/* Back link */}
            <div className="mt-16 border-t border-[var(--border)] pt-8">
                <Link
                    href="/blog"
                    className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                    ← Back to all posts
                </Link>
            </div>
        </div>
    );
}
