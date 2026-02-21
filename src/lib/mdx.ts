import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
}

export interface ProjectMeta {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    url?: string;
    featured?: boolean;
}

export function getAllPosts(): PostMeta[] {
    const postsDir = path.join(contentDirectory, "blog");
    if (!fs.existsSync(postsDir)) return [];

    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

    const posts = files.map((filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        const filePath = path.join(postsDir, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);

        return {
            slug,
            title: data.title || slug,
            date: data.date || "",
            excerpt: data.excerpt || "",
            tags: data.tags || [],
        };
    });

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string) {
    const filePath = path.join(contentDirectory, "blog", `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
        meta: {
            slug,
            title: data.title || slug,
            date: data.date || "",
            excerpt: data.excerpt || "",
            tags: data.tags || [],
        } as PostMeta,
        content,
    };
}

export function getAllProjects(): ProjectMeta[] {
    const projectsDir = path.join(contentDirectory, "projects");
    if (!fs.existsSync(projectsDir)) return [];

    const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".mdx"));

    return files.map((filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        const filePath = path.join(projectsDir, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);

        return {
            slug,
            title: data.title || slug,
            description: data.description || "",
            tags: data.tags || [],
            url: data.url || undefined,
            featured: data.featured || false,
        };
    });
}
