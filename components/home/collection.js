import styles from '../../styles/Home.module.css';

const HomeCollection = () => {
    return (
        <section className={styles.collection_container}>
            <h2>Our Collection</h2>
            <ul className={styles.bean_list}>
                <li className={styles.bean_list_item}>
                    <img className={styles.bean_img}/>
                    <div className={styles.bean_text_container}>
                        <h4>Gran Espresso</h4>
                        <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                    </div>
                </li>
                <li className={styles.bean_list_item}>
                    <img className={styles.bean_img}/>
                    <div className={styles.bean_text_container}>
                        <h4>Planalto</h4>
                        <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                    </div>
                </li>
                <li className={styles.bean_list_item}>
                    <img className={styles.bean_img}/>
                    <div className={styles.bean_text_container}>
                        <h4>Piccollo</h4>
                        <p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                    </div>
                </li>
                <li className={styles.bean_list_item}>
                    <img className={styles.bean_img}/>
                    <div className={styles.bean_text_container}>
                        <h4>Danche</h4>
                        <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}
 
export default HomeCollection;