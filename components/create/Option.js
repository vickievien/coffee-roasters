import { useState } from 'react';
import styles from '../../styles/Create.module.css';
import Link from 'next/link';

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

    const asideList = ['Preferences', 'Bean Type', 'Quantity', 'Grind Option', 'Deliveries']

    const [showSection, setShowSection] = useState(false)
    
    const toggleShowSection = () => {
        setShowSection(!showSection)
    }

    const [selected, setSelected] = useState(false);
    const toggleSelected = () => {
        setSelected(!selected);
    }

    const getKey = (e, key) => {
        console.log(e.target);
        console.log('key index:', key);

        // onClick={e => getKey(e, key)}
    }

    const allListMapped = allLists.map((list, index, key) => {
        return (
            <section key={list[index]} id={asideList[index]} className={styles.section_container} onClick={e => getKey(e, key)}>
                <div className={styles.section_title_container}>
                    <h2 className={styles.question_title} key={questionList[index]} >{questionList[index]}</h2>
                    <img src="/assets/plan/desktop/icon-arrow.svg" alt="arrow" onClick={toggleShowSection}/>
                </div>
                {showSection ?
                <div className={styles.section_cards_container}>
                {
                    list.map((card, i) => {
                        return (
                            <article key={card.title} 
                            className={`${styles.card_container} ${selected ? `${styles.selected}` : ""}`}
                            onClick={toggleSelected}
                            >
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

    const asideListItems = asideList.map((listItem, i) => {
        return (
            <Link key={i} href={`#${listItem}`} className={styles.list_item_link}>
                <li className={styles.list_item}>
                    <div className={styles.list_num_wrapper}>
                        <p className={styles.list_num}>0{i+1}</p>
                    </div>
                    <p className={styles.list_title}>{listItem}</p>
                </li>
            </Link>
        )
    })

    return (
        <section className={styles.option_container}>
            <aside className={styles.aside}>
                <ol className={styles.aside_order_list}>
                    {asideListItems}
                </ol>
            </aside>
            <div className={styles.main}>
                {allListMapped}
            </div>
        </section>
    );
}
 
export default CreateOption;