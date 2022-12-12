import styles from '../../styles/Create.module.css'

const CreateHero = () => {
    return (
        <section className={styles.hero_container}>
            <div className={styles.hero_text_container}>
                <h2>Create a plan</h2>
                <p>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
            </div>
        </section>
    )
}

export default CreateHero;