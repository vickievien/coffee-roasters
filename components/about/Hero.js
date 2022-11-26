import styles from '../../styles/About.module.css'

const AboutHero = () => {
    return (
        <section className={styles.hero_container}>
            <div className={styles.hero_text_container}>
                <h2>About us</h2>
                <p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
            </div>
        </section>
    )
}

export default AboutHero;