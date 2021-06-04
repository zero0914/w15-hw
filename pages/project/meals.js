import styles from '../../styles/meal.module.css'
import cards from './data';
export default function Meals() {
    return (
        <div>
            <div id="submit" class="flex-box">
                <input type="text" id="search" placeholder="Search for meals or keywords"/>
                <button class="btn__search" type="submit">
                    <i >search</i>
                </button>
            </div>
        <section className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.card__body}>
                    <img src={cards[0].image} alt="" className={styles.card__image}/>
                    <h2 className={styles.card__title}>Beef Wellington</h2>
                    <p className={styles.card__description}>The beef should still be pink in the centre when you serve it!</p>
                </div>
                <button className={styles.card__btn}>View Recipe</button>
            </div>
            <div className={styles.card}>
                
                <div className={styles.card__body}>
                    <img src={cards[1].image} alt="" className={styles.card__image}/>
                    <h2 className={styles.card__title}>Beef and Mustard Pie</h2>
                    <p className={styles.card__description}>To serve, place a large spoonful of pie onto each plate with some green beans alongside!</p>
                </div>
                <button className={styles.card__btn}>View Recipe</button>
            </div>
            <div className={styles.card}>
                
                <div className={styles.card__body}>
                    <img src={cards[2].image} alt="" className={styles.card__image}/>
                    <h2 className={styles.card__title}>Beef Rendang</h2>
                    <p className={styles.card__description}>Serve immediately with steamed rice and save some for overnigh!.</p>
                </div>
                <button className={styles.card__btn}>View Recipe</button>
            </div>
            <div className={styles.card}>  
                <div className={styles.card__body}>
                    <img src={cards[3].image} alt="" className={styles.card__image}/>
                    <h2 className={styles.card__title}>Corned Beef and Cabbage</h2>
                    <p className={styles.card__description}>Slice meat across the grain!</p>
                </div>
                <button className={styles.card__btn}>View Recipe</button>
            </div>
            <div className={styles.card}>  
                <div className={styles.card__body}>
                    <img src={cards[4].image} alt="" className={styles.card__image}/>
                    <h2 className={styles.card__title}>Beef Bourguignon</h2>
                    <p className={styles.card__description}>Garnish with one of the bay leaves, if you like!</p>
                </div>
                <button className={styles.card__btn}>View Recipe</button>
            </div>
      </section>
      </div>
    )
}
