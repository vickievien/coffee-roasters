import Link from "next/link";
import Logo from "./Logo";


const Footer = () => {
    return ( 
        <footer>
            <div>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <ul className="footer-link-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/create">Create Your Plan</Link></li>
            </ul>
            <ul className="social-list">
                <li>
                    <Link href="https://www.facebook.com/" target="_blank">
                        <img src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook" />
                    </Link>
                </li>
                <li>
                    <Link href="https://twitter.com/" target="_blank">
                        <img src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/" target="_blank">
                        <img src="/assets/shared/desktop/icon-instagram.svg" alt="Instagram" />
                    </Link>
                </li>
            </ul>
        </footer>
     );
}
 
export default Footer;