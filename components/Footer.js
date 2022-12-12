import Link from "next/link";
import Logo from "./Logo";
import FacebookLogo from "./svg/Facebook";
import InstagramLogo from "./svg/Instagram";
import TwitterLogo from "./svg/Twitter";


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
                        <FacebookLogo />
                    </Link>
                </li>
                <li>
                    <Link href="https://twitter.com/" target="_blank">
                        <TwitterLogo />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/" target="_blank">
                        <InstagramLogo />
                    </Link>
                </li>
            </ul>
        </footer>
     );
}
 
export default Footer;