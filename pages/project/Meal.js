import meals from './data';
import styles from '../../styles/meal.module.css';
import Meals from './meals';

export default function CardsPage() {
  // console.log('cards', cards);
  return (
    
      <section className={styles.card_container}>
        {meals.map((card) => (
          <Meals
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>
    
  );
}


