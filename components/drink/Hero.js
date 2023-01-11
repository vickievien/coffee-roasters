import styles from '../../styles/Drink.module.css'

const DrinkHero = () => {
    return (
        <section className={styles.hero_container}>
            <div className={styles.hero_text_container}>
                <h2>Coffee Concoctions</h2>
                <p>Whether you like your coffee hot or iced, black or sweet, here&#39;s a list of some of the most popular drinks for the coffee afficionados.</p>
            </div>
        </section>
    );
}
 
export default DrinkHero;