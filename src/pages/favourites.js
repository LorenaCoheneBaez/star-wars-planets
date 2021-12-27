import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function Favorites() {
  //let urlApi = `https://swapi.dev/api/planets/1`

  //const { planetList } = useFetchHook(urlApi)
  return (
    <div>
      <h1>Favoritos  <i className="fas fa-heart text-white"></i></h1>
      <Container >
        <Row lg={2} >
          <h1>Hola</h1>
          
          </Row> 
      </Container >
      
    </div>
  )
}

export default Favorites