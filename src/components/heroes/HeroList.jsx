import { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

// eslint-disable-next-line react/prop-types
export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="card-columns animate__animated animate_fadeIn">
      {heroes.map((hero) => {
        <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};
