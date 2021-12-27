import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeroCard from '../components/HeroCard';
import useForm from '../hooks/useForm';
// import { getHeroesSearch } from '../selectors/getHeroesSearch';

function Search() {

  const [searchParams, setSearchParams] = useSearchParams({
    keyword: ""
  });

  const [{ keyword }, handleInputChange] = useForm({
    keyword: searchParams.get('keyword')
  });
  
  getHeroesSearch = (keyword = "") => {
    if (keyword === "") {
      return []
    }
    return heroes_db.filter(heroe => heroe.superhero.toLowerCase().includes(keyword.toLowerCase()))
  }

  const heroesFiltered = useMemo(() => getHeroesSearch(searchParams.get('keyword')), [searchParams]);


  const handleSubmit = e => {
    e.preventDefault();
    keyword !== "" && setSearchParams({ keyword })

  }

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <h4>Buscador</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Encuentra tu héroe..."
              className="form-control"
              name="keyword"
              value={keyword}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-dark mt-3 w-100"
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="col-9">
          <h4>Resultado</h4>
          <hr />
          <div className="row animate__animated animate__fadeIn">
            {
              (searchParams.get('keyword') !== "" && heroesFiltered.length === 0)
              &&
              <div className="alert alert-danger">Héroe no encontrado. Sorry!</div>
            }
            {
              heroesFiltered.map(hero => (
                <HeroCard
                  key={hero.id}
                  {...hero}

                />
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search