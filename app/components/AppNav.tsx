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

/*
export const Navbar:React.FC = () => {
    return <header className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="px-3">
                    <Link href="/home">
                        Home
                    </Link>
            </div>
            <div className="px-3">
                <Link href="/">
                    About
                </Link>
            </div>
            <div className="px-3">
                <Link href="/loginPage">
                    Login/Signup
                </Link>
            </div>
        </div>
    </header>;
};

export default Navbar
*/
