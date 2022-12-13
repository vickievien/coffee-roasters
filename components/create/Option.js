import { useState } from 'react';
import styles from '../../styles/Create.module.css';

const CreateOption = () => {
    const coffeeHowList = [
        {
           title: 'Capsule',
           description: 'Compatible with Nespresso systems and similar brewers' 
        },
        {
            title: 'Filter',
            description: 'For pour over or drip methods like Aeropress, Chemex, and V60'
        },
        {
            title: 'Espresso',
            description: 'Dense and finely ground beans for an intense, flavorful experience'
        }
    ]
    const coffeeTypeList = [
        {
           title: 'Single origin',
           description: 'Distinct, high quality coffee from a specific family-owned farm' 
        },
        {
            title: 'Decaf',
            description: 'Just like regular coffee, except the caffeine has been removed'
        },
        {
            title: 'Blended',
            description: 'Combination of two or three dark roasted beans of organic coffees'
        }
    ]
    const coffeeWeightList = [
        {
           title: '250g',
           description: 'Perfect for the solo drinker. Yields about 12 delicious cups.' 
        },
        {
            title: '500g',
            description: 'Perfect option for a couple. Yields about 40 delectable cups.'
        },
        {
            title: '1000g',
            description: 'Perfect for offices and events. Yields about 90 delightful cups.'
        }
    ]
    const coffeeGrindList = [
        {
           title: 'Wholebean',
           description: 'Best choice if you cherish the full sensory experience' 
        },
        {
            title: 'Filter',
            description: 'For drip or pour-over coffee methods such as V60 or Aeropress'
        },
        {
            title: 'Cafetiére',
            description: 'Course ground beans specially suited for french press coffee'
        }
    ]
    const coffeeFreqList = [
        {
            title: 'Every week',
            description: '$14.00 per shipment. Includes free first-class shipping.' 
        },
        {
            title: 'Every 2 weeks',
            description: '$17.25 per shipment. Includes free priority shipping.'
        },
        {
            title: 'Every month',
            description: '$22.50 per shipment. Includes free priority shipping.'
        }
    ]
    const allLists = [
        coffeeHowList,
        coffeeTypeList,
        coffeeWeightList,
        coffeeGrindList,
        coffeeFreqList
    ]
    const questionList = [
        'How do you drink your coffee?',
        'What type of coffee?',
        'How much would you like?',
        'Want us to grind them?',
        'How often should we deliver?',  
    ]

    const [showSection, setShowSection] = useState(false)
    
    const toggleShowSection = () => {
        setShowSection(!showSection)
    }

    const allListMapped = allLists.map((list, i) => {
        return (
            <section key={list} className={styles.section_container}>
                <div className={styles.section_title_container}>
                    <h2 className={styles.question_title} key={`${list}_q`}>{questionList[i]}</h2>
                    <img src="/assets/plan/desktop/icon-arrow.svg" alt="arrow" onClick={toggleShowSection}/>
                </div>
                {showSection ?
                <div className={styles.section_cards_container}>
                {
                    list.map(card => {
                        return (
                            <article key={`${list}_${card}`} className={styles.card_container}>
                                <h3 className={styles.card_title}>{card.title}</h3>
                                <p className={styles.card_description}>{card.description}</p>
                            </article>
                        )
                    })
                }
                </div> 
                :
                ""}
            </section>

        )
    })

    return (
        <section className={styles.option_container}>
            {allListMapped}
        </section>
    );
}
 
export default CreateOption;