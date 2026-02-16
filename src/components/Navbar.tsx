import { NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/projects', label: 'Projects' },
]

export default function Navbar() {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <nav className="navbar">
            <div className="navbar__inner">
                {!isHome && (
                    <NavLink to="/" className="navbar__avatar">
                        <img src="/avatar.jpg" alt="Avatar" />
                    </NavLink>
                )}
                <div className="navbar__pill">
                    {navItems.map(({ path, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            end={path === '/'}
                            className={({ isActive }) =>
                                `navbar__link${isActive ? ' navbar__link--active' : ''}`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
                <ThemeToggle />
            </div>
        </nav>
    )
}
