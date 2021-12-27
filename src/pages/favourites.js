import React from 'react'
import { useSelector } from 'react-redux'
import CardFavorite from '../components/CardFavorite'

function Favorites() {

  const { favorites } = useSelector(state => state.reducersFavorites)

  return (
    <main>
      <h2 className='page'> Favorites</h2>
      <div class="container-card">
        <div class="row">
          {
            favorites.map((item, index) =>
              <CardFavorite key={index}
                name={item.name}
                diameter={item.diameter}
                climate={item.climate}
                terrain={item.terrain}
              />
            )

          }
        </div>
      </div>

    </main>
  )
}

export default Favorites