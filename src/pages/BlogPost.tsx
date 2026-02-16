import { useParams, Link, Navigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { blogPosts } from '../data/blogPosts'
import './BlogPost.css'

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>()
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) return <Navigate to="/blog" replace />

    return (
        <article className="blogpost">
            {/* Meta: back + date */}
            <div className="blogpost__meta">
                <Link to="/blog" className="blogpost__back" aria-label="Back to blog">
                    <FiArrowLeft />
                </Link>
                <span className="blogpost__divider" />
                <span className="blogpost__date">{post.date}</span>
            </div>

            {/* Title */}
            <h1 className="blogpost__title">{post.title}</h1>

            {/* Tags */}
            <div className="blogpost__tags">
                {post.tags.map((tag) => (
                    <span key={tag} className="blogpost__tag">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Content */}
            <div className="blogpost__body">
                {/* First paragraph as blockquote */}
                <blockquote className="blogpost__quote">{post.content[0]}</blockquote>

                {post.content.slice(1).map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
            </div>
        </article>
    )
}
