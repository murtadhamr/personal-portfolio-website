import { getAllProjects } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "A collection of technical projects in data science, engineering, and analytics.",
};

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <div className="mx-auto max-w-content px-6 py-16">
            <h1 className="mb-2 text-3xl font-bold tracking-tight">Projects</h1>
            <p className="mb-12 text-[var(--muted)]">
                Technical projects in data science, data engineering, and analytics.
            </p>

            <div className="grid gap-4">
                {projects.map((project) => (
                    <a
                        key={project.slug}
                        href={project.url || "#"}
                        target={project.url ? "_blank" : undefined}
                        rel={project.url ? "noopener noreferrer" : undefined}
                        className="group rounded-xl border border-[var(--border)] p-5 transition-all hover:border-[var(--muted)] hover:shadow-sm"
                    >
                        <div className="mb-3 flex items-start justify-between">
                            <h2 className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                                {project.title}
                            </h2>
                            {project.url && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                >
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            )}
                        </div>
                        <p className="mb-4 text-sm text-[var(--muted)] line-clamp-3">
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
                    </a>
                ))}
            </div>
        </div>
    );
}
