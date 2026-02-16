import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__nav">
                    <Link to="/about" className="footer__link">About</Link>
                    <Link to="/blog" className="footer__link">Blog</Link>
                    <Link to="/projects" className="footer__link">Projects</Link>
                </div>
                <p className="footer__copy">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
