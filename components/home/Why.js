import styles from '../../styles/Home.module.css';

const HomeWhyUs = () => {
    return (
        <section className={styles.why_container}>
            <section className={styles.why_title_container}>
                <h3>Why choose us?</h3>
                <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
            </section>
            <ul className={styles.why_list}>
                <li className={styles.why_list_item}>
                    <img className={styles.why_icon} src="/assets/home/desktop/icon-coffee-bean.svg" alt="coffee bean icon" />
                    <div className={styles.why_item_text_container}>
                        <h4>Best quality</h4>
                        <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                    </div>
                </li>
                <li className={styles.why_list_item}>
                    <img className={styles.why_icon} src="/assets/home/desktop/icon-gift.svg" alt="coffee bean icon" />
                    <div className={styles.why_item_text_container}>
                        <h4>Exclusive benefits</h4>
                        <p>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                    </div>
                </li>
                <li className={styles.why_list_item}>
                    <img className={styles.why_icon} src="/assets/home/desktop/icon-truck.svg" alt="coffee bean icon" />
                    <div className={styles.why_item_text_container}>
                        <h4>Free shipping</h4>
                        <p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                    </div>
                </li>
            </ul>
        </section>  
    );
}
 
export default HomeWhyUs;