import React from 'react'
import { useSelector } from 'react-redux'
import CardFavorite from '../components/CardFavorite'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

function Favorites() {

  const { favorites } = useSelector(state => state.reducersFavorites)

  return (
    <main>
      <h1 className="mb-3 mt-4">Favoritos <i className="fas fa-heart"></i></h1>
      <div className="container-card">
        <div className="row">
          {
            favorites.length !== 0 ?
              (
          
            favorites.map((item, index) =>
              <CardFavorite key={index}
                name={item.name}
                diameter={item.diameter}
                climate={item.climate}
                terrain={item.terrain}
              />
            )
          
              )
              : (
                <p className="alert alert-danger" role="alert">No hay favoritos guardados.</p>

)
          }
        </div>

        < Nav.Item >

          <Nav.Link as={Link} to="/" eventKey="link-1" className='text-light links navBarLink'><i className="fas fa-arrow-circle-left"></i> Volver</Nav.Link>

      </Nav.Item>
      

    </div>

    </main >
  )
}

export default Favorites