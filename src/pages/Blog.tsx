import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { blogPosts } from '../data/blogPosts'
import './Blog.css'

export default function Blog() {
    const [query, setQuery] = useState('')

    const filtered = useMemo(() => {
        if (!query.trim()) return blogPosts
        const lower = query.toLowerCase()
        return blogPosts.filter(
            (p) =>
                p.title.toLowerCase().includes(lower) ||
                p.excerpt.toLowerCase().includes(lower),
        )
    }, [query])

    return (
        <section className="blog">
            <div className="blog__header">
                <h1>From the blog</h1>
                <p className="page-subtitle">
                    A collection of my thoughts on data engineering, machine learning,
                    and other topics — organized chronologically.
                </p>
            </div>

            <div className="blog__search">
                <input
                    type="text"
                    className="blog__search-input"
                    placeholder="Search articles"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <FiSearch className="blog__search-icon" />
            </div>

            <div className="blog__list">
                {filtered.length === 0 ? (
                    <p className="blog__empty">No articles found matching your search.</p>
                ) : (
                    filtered.map((post) => (
                        <article key={post.slug} className="blog__post">
                            <span className="blog__post-date">{post.date}</span>
                            <div className="blog__post-content">
                                <h2 className="blog__post-title">{post.title}</h2>
                                <p className="blog__post-excerpt">{post.excerpt}</p>
                                <Link to={`/blog/${post.slug}`} className="blog__post-link">
                                    Read article ›
                                </Link>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </section>
    )
}
