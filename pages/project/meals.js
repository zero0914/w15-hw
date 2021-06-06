import styles from '../../styles/meals.module.css';
import cards from './meal-data';
import Layout from '../../components/Layout2/Layout'
export default function meals() {
    return (
        <Layout>
        <div className={styles.container}>
            <h1>Meal Finder</h1>
            <div className={styles.flex}>
                <form className={styles.flex} id="submit">
                <input
                type="text"
                id="search"
                placeholder="Search for meals or keywords"
                />
            <button className={styles.search_btn} type="submit">
                
            </button>
            </form>
            <button className={styles.random_btn} id="random">
                
            </button>
            </div>

        <div id="result_heading"></div>
      
        <div id="meals" className={styles.meals}>
        
        <div className={styles.meal}>
          <div className={styles.card__body}>
            <img src={cards[0].image} alt='' className={styles.card__image} />
            <h2 className={styles.card__title}>{cards[0].title} </h2>
            
          </div>
        </div>
        <div className={styles.meal}>
          <div className={styles.card__body}>
            <img src={cards[1].image} alt='' className={styles.card__image} />
            <h2 className={styles.card__title}>{cards[1].title} </h2>
          </div>
        </div>
        <div className={styles.meal}>
          <div className={styles.card__body}>
            <img src={cards[2].image} alt='' className={styles.card__image} />
            <h2 className={styles.card__title}>{cards[2].title} </h2>
          </div>
        </div>
        <div className={styles.meal}>
          <div className={styles.card__body}>
            <img src={cards[3].image} alt='' className={styles.card__image} />
            <h2 className={styles.card__title}>{cards[3].title} </h2>
          </div>
        </div>
        <div className={styles.meal}>
          <div className={styles.card__body}>
            <img src={cards[4].image} alt='' className={styles.card__image} />
            <h2 className={styles.card__title}>{cards[4].title} </h2>
          </div>
        </div>
        <div className={styles.meal}>
          <div className={styles.card__body}>
            <img src={cards[5].image} alt='' className={styles.card__image} />
            <h2 className={styles.card__title}>{cards[5].title} </h2>
          </div>
        </div>
        <div className={styles.meal}>
          <div className={styles.card__body}>
            <img src={cards[6].image} alt='' className={styles.card__image} />
            <h2 className={styles.card__title}>{cards[6].title} </h2>
          </div>
        </div>
        </div>
         <div id="single-meal"></div>
        </div>
</Layout>
    )
}
