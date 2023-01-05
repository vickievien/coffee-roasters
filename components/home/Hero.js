import Link from "next/link";
import styles from '../../styles/Home.module.css'

const HomeHero = () => {
    return (
        <section className={styles.hero_container}>
            <div className={styles.hero_text_container}>
                <h2>Great coffee made simple.</h2>
                <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <Link href="/create" className={`btn ${styles.hero_btn}`}>Create your plan</Link>
            </div>
        </section>
    );
}
 
export default HomeHero;
