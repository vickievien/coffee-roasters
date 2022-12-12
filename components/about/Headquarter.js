import styles from '../../styles/About.module.css'

const AboutHeadquarter = () => {
    return (
        <section className={styles.headquarter_container}>
            <h2 className={styles.headquarter_title}>Our headquarters</h2>
            <ul className={styles.headquarter_list}>
                <li className={styles.headquarter_list_item}>
                    <div className={styles.headquarter_img_container}>
                        <img src="/assets/about/desktop/illustration-uk.svg" alt="United Kingdom icon" />
                    </div>
                    <h3>United Kingdom</h3>
                    <div className={styles.headquarter_info_container}>
                        <p className={styles.headquarter_address}>68 Asfordby Rd <br />
                            Alcaston <br />
                            SY6 1YA
                        </p>
                        <p className={styles.headquarter_phone}>+44 1241 918425</p>
                    </div>
                </li>
                <li className={styles.headquarter_list_item}>
                    <div className={styles.headquarter_img_container}>
                        <img src="/assets/about/desktop/illustration-canada.svg" alt="Canada icon" />
                    </div>
                    <h3>Canada</h3>
                    <div className={styles.headquarter_info_container}>
                        <p className={styles.headquarter_address}>1528 Eglinton Avenue <br />
                            Toronto <br />
                            Ontario <br />
                            M4P 1A6
                        </p>
                        <p className={styles.headquarter_phone}>+1 416 485 2997</p>
                    </div>
                </li>
                <li className={styles.headquarter_list_item}>
                    <div className={styles.headquarter_img_container}>
                        <img src="/assets/about/desktop/illustration-australia.svg" alt="Australia icon" />
                    </div>
                    <h3>Australia</h3>
                    <div className={styles.headquarter_info_container}>
                        <p className={styles.headquarter_address}>36 Swanston Street <br />
                        Kewell <br />
                        Victoria
                        </p>
                        <p className={styles.headquarter_phone}>+61 4 9928 3629</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default AboutHeadquarter;