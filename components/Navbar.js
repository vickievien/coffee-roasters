import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div>
                <Link href="/"><h1>Logo</h1></Link>
            </div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/create">Create Your Plan</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;