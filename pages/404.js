import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h2>Oops...</h2>
            <h3>That page cannot be found.</h3>
            <p>Go back to the <Link href="/">Homepage</Link>.</p>
        </div>
    );
}
 
export default NotFound;