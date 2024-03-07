import Link from "next/link"

export default function Navbar() {
    return <nav className="nav flex">
        <a href="/" className="site-title">Home</a>
        <ul className="flex">
            <li className="px-3">
                <a href="/">About</a>
            </li>
            <li>
                <a href="/loginPage">Login</a>
            </li>
        </ul>
    </nav>
};

