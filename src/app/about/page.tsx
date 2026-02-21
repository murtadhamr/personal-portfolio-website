import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About me — background, experience, and skills.",
};

const experience = [
    {
        role: "Senior Data Analyst",
        company: "Tech Company",
        period: "2024 — Present",
        description:
            "Leading data analysis initiatives and building dashboards for business intelligence across cross-functional teams.",
    },
    {
        role: "Data Engineer",
        company: "Startup Inc.",
        period: "2022 — 2024",
        description:
            "Designed and maintained ETL pipelines using Apache Airflow and dbt, processing millions of records daily.",
    },
    {
        role: "Data Analyst",
        company: "Finance Corp.",
        period: "2020 — 2022",
        description:
            "Built automated reporting systems and predictive models for market analysis and risk assessment.",
    },
];

const skills = [
    { category: "Languages", items: ["Python", "SQL", "TypeScript", "R"] },
    {
        category: "Data Engineering",
        items: ["Apache Airflow", "dbt", "Spark", "Kafka"],
    },
    {
        category: "Analytics",
        items: ["Tableau", "Power BI", "Looker", "Metabase"],
    },
    {
        category: "ML & Data Science",
        items: ["scikit-learn", "TensorFlow", "Pandas", "NumPy"],
    },
    { category: "Databases", items: ["PostgreSQL", "Snowflake", "BigQuery", "Redis"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "GCP"] },
];

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-content px-6 py-16">
            {/* Intro */}
            <section className="mb-16">
                <h1 className="mb-4 text-3xl font-bold tracking-tight">About Me</h1>
                <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                    <p>
                        I am a Data & Analytics leader obsessed with the {"\"why\""} behind the numbers.
                        With a Master of Science in Business Analytics from USC and experience across global tech giants (Amazon, GoTo, Grab),
                        I bridge the gap between complex machine learning and actionable business strategy.
                        I don{"'"}t just extract data; I build the roadmaps that drive user growth and operational efficiency.
                    </p>
                    <p>
                        I enjoy building end-to-end data systems — from pipeline development to
                        dashboard creation — and writing about what I learn along the way.
                        When I{"'"}m not working with data, you{"'"}ll find me exploring new
                        technologies and contributing to open-source projects.
                    </p>
                </div>
            </section>

            {/* Experience */}
            <section className="mb-16">
                <h2 className="mb-6 text-xl font-semibold">Experience</h2>
                <div className="space-y-0">
                    {experience.map((exp, i) => (
                        <div
                            key={i}
                            className="relative border-l-2 border-[var(--border)] py-5 pl-6"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[5px] top-6 h-2 w-2 rounded-full bg-[var(--muted)]" />
                            <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                <h3 className="font-medium text-[var(--foreground)]">
                                    {exp.role}
                                    <span className="text-[var(--muted)] font-normal"> · {exp.company}</span>
                                </h3>
                                <span className="shrink-0 text-sm text-[var(--muted)]">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-sm text-[var(--muted)]">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section>
                <h2 className="mb-6 text-xl font-semibold">Skills</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                    {skills.map((group) => (
                        <div key={group.category}>
                            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-[var(--tag-bg)] px-2.5 py-0.5 text-xs text-[var(--tag-text)]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
