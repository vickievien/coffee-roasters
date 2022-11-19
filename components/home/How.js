import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const HomeHow = () => {
    return (
        <section className={styles.how_container}>
            <h3>How it works</h3>
            <ol className={styles.how_list}>
                <li className={styles.how_list_item}>
                    <div className={styles.circle}></div>
                    <h4 className={styles.how_list_num}>01</h4>
                    <h4 className={styles.how_list_title}>Pick your coffee</h4>
                    <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                </li>
                <li className={styles.how_list_item}>
                    <div className={styles.circle}></div>
                    <h4 className={styles.how_list_num}>02</h4>
                    <h4 className={styles.how_list_title}>Choose the frequency</h4>
                    <p>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                </li>
                <li className={styles.how_list_item}>
                    <div className={styles.circle}></div>
                    <h4 className={styles.how_list_num}>03</h4>
                    <h4 className={styles.how_list_title}>Receive and enjoy!</h4>
                    <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                </li>
            </ol>
            <Link href="/create" className={`btn ${styles.how_btn}`}>Create your plan</Link>
        </section>
    );
}
 
export default HomeHow;