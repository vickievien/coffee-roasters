import Link from "next/link";
import { useState } from "react";
import Hamburger from "./nav/Hamburger";
import Logo from "./Logo";
import Close from "./nav/Close";

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        console.log('clicking');
        setMobileNav(!mobileNav);
    }

    return ( 
        <nav>
            <div>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            {mobileNav ? 
            <Close toggleMobileNav={toggleMobileNav} />
            : 
            <Hamburger toggleMobileNav={toggleMobileNav} />
            }
            <ul className={mobileNav ? 'mobile-nav' : 'default-nav'}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/create">Create Your Plan</Link></li>
                <li><Link href="/drink">Drinks</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;