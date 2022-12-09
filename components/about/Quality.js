import styles from '../../styles/About.module.css'

const AboutQuality = () => {
    return (
        <section className={styles.quality_container}>
            <div className={styles.quality_img_container}>
                <picture>
                    <source media="(min-width: 1280px)" srcSet="/assets/about/desktop/image-quality.jpg"/>
                    <source media="(min-width: 768px)" srcSet="/assets/about/tablet/image-quality.jpg"/>
                    <img src="/assets/about/mobile/image-quality.jpg" alt="cup of coffee with latte art"/>
                </picture>
            </div>
            <div className={styles.quality_text_container}>
                <h2>Uncompromising quality</h2>
                <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </div>
        </section>
    )
}

export default AboutQuality;