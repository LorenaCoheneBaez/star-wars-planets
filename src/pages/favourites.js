import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import UlCard from "../components/CardList";
import { Card } from "react-bootstrap";

function Favorites(planet,
  FavPlanets,
  state,
  setFavouritesPlanets,
  favouritesPlanets) {
  //let urlApi = `https://swapi.dev/api/planets/1`

  //const { planetList } = useFetchHook(urlApi)
  let localSave = JSON.parse(localStorage.getItem('favoritos'))
  if (!localSave) {
    localSave = []
  }
  //const [favouritesPlanets, setFavouritesPlanets] = useState(localSave.length)
  const initialState = 0;
  

  //const myFavorites = JSON.parse(localStorage.getItem(favorites))

  return (
    <div>
      <h1>Favoritos <i className="fas fa-heart text-white"></i></h1>
      <Container >
        {
          localSave.map((item, index) =>
            <Row lg={2} >
              <h1>Hola</h1>
              <Card style={{ width: "18rem" }}  className="m-2 border border-white border-4 list" initialState={initialState}
                key={planet.id}
                FavPlanets={localSave}
                planet={planet}
                setFavouritesPlanets={setFavouritesPlanets}
                favouritesPlanets={favouritesPlanets}
              >

                <Card.Body >
                  <Card.Title><h3>{item.name}</h3></Card.Title>
                  <UlCard
                    diameter={item.diameter}
                    climate={item.climate}
                    terrain={item.terrain}
                    name={item.name}
                  />
                </Card.Body>
              </Card>
            </Row>
          )

        }
      </Container >

    </div>
  )
}

export default Favorites
