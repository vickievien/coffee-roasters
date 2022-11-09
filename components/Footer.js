import Link from "next/link";

const Footer = () => {
    return ( 
        <footer>
            <div>
                <h2>Logo</h2>
            </div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/create">Create Your Plan</Link></li>
            </ul>
            <ul>
                <li><Link href="/" target="_blank">Facebook</Link></li>
                <li><Link href="/" target="_blank">Twitter</Link></li>
                <li><Link href="/" target="_blank">Instagram</Link></li>
            </ul>
        </footer>
     );
}
 
export default Footer;