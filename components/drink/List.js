import { useState, useEffect } from 'react';
import styles from '../../styles/Drink.module.css'

const DrinkList = () => {
    const [icedDrinks, setIcedDrinks] = useState([])
    const [hotDrinks, setHotDrinks] = useState([])

    const getIcedDrinks = async() => {
        const resp = await fetch('https://api.sampleapis.com/coffee/iced')
        const json = await resp.json();
        setIcedDrinks(json);
        console.log(json);
    }

    const getHotDrinks = async() => {
        const resp = await fetch('https://api.sampleapis.com/coffee/hot')
        const json = await resp.json();
        setHotDrinks(json);
        console.log(json);
    }

    useEffect(() => {
        getIcedDrinks();
        getHotDrinks();
      }, []);

    const icedDrinkList = icedDrinks.map(drink => {
        return (
            <article key={drink.id}>
                <div>
                    <img src={drink.image} alt={drink.title} />
                </div>
                <div>
                    <h2>{drink.title}</h2>
                    <p>{drink.description}</p>
                    <p>{drink.ingredients}</p>
                </div>
            </article>
        )
    })

    const hotDrinkList = hotDrinks.map(drink => {
        return (
            <article key={drink.id}>
                <div>
                    <img src={drink.image} alt={drink.title} />
                </div>
                <div>
                    <h2>{drink.title}</h2>
                    <p>{drink.description}</p>
                    <p>{drink.ingredients}</p>
                </div>
            </article>
        )
    })
      
    return (
        <section className={styles.list_container}>
            {icedDrinkList}
            {hotDrinkList}
        </section>
    );
}
 
export default DrinkList;