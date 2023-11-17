import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useMemo } from 'react';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
export const SearchScreen = ({ history }) => {
  debugger;
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === '' && <div className="alert alert-info">Search a Hero</div>}
          {q !== '' && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">Thre is no a hero with {q}</div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
