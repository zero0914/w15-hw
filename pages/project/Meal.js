import meals from './data';
import styles from '../../styles/meal.module.css';
import Meals from './meals';

export default function CardsPage() {
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


