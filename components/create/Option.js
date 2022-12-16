import { useState } from 'react';
import styles from '../../styles/Create.module.css';
import Link from 'next/link';

const CreateOption = () => {
    const optionList = [
        {
            step_num: 1,
            step: 'Preferences',
            question: 'How do you drink your coffee?',
            list: [
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
        },
        {
            step_num: 2,
            step: 'Bean Type',
            question: 'What type of coffee?',
            list: [
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
        },
        {
            step_num: 3,
            step: 'Quantity',
            question: 'How much would you like?',
            list: [
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
        },
        {
            step_num: 4,
            step: 'Grind Option',
            question: 'Want us to grind them?',
            list: [
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
        },
        {
            step_num: 5,
            step: 'Deliveries',
            question: 'How often should we deliver?',
            list: [
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
        },
    ]

    const [showStep, setShowStep] = useState({})
    const toggleShowStep = (step) => {
        setShowStep({
            ...showStep,
            [step]: !showStep[step],
        })
    }

    const [selected, setSelected] = useState({});
    const toggleSelected = (card) => {
        setSelected({
            ...selected,
            [card]: !selected[card],
        })
    }

    const mappedList = optionList.map((list, e) => {
        return (
            <section key={list.step} id={list.step} className={styles.section_container}>
                <div className={styles.section_title_container}>
                    <h2 className={styles.question_title} key={list.question} >{list.question}</h2>
                    <img src="/assets/plan/desktop/icon-arrow.svg" alt="arrow" onClick={() => {toggleShowStep(list.step)}}/>
                </div>
                {showStep[list.step] ?
                <div className={styles.section_cards_container}>
                {
                    list.list.map(card => {
                        return (
                            <article key={card.title} 
                            className={`${styles.card_container} ${selected[card.title] ? `${styles.selected}` : ""}`}
                            onClick={() => {toggleSelected(card.title)}}
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

    const mappedAside = optionList.map((list, i) => {
        return (
            <Link key={list.step} href={`#${list.step}`} className={styles.list_item_link}>
                <li className={styles.list_item}>
                    <div className={styles.list_num_wrapper}>
                        <p className={styles.list_num}>0{list.step_num}</p>
                    </div>
                    <p className={styles.list_title}>{list.step}</p>
                </li>
            </Link>
        )
    })

    return (
        <section className={styles.option_container}>
            <aside className={styles.aside}>
                <ol className={styles.aside_order_list}>
                    {mappedAside}
                </ol>
            </aside>
            <div className={styles.main}>
                {mappedList}
            </div>
        </section>
    );
}
 
export default CreateOption;
