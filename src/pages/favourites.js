// import React from 'react'
// import useFetchHook from '../hooks/useFetchHook'
// import { Card } from "react-bootstrap";
// import UlCard from "../components/CardList";
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'

// function Favorites() {
//   let urlApi = `https://swapi.dev/api/planets/1`

//   const { planetList } = useFetchHook(urlApi)
//   return (
//     <div>
//       <h2>Favoritos  <i className="fas fa-heart text-white"></i></h2>
//       <Container >
//         <Row lg={2} >
//           <h1>Hola</h1>
//           {planetList.map((item, index) => {
//         <Card style={{ width: "18rem" }} key={index + item.url} className="m-2 border border-white border-4 list">
      
//           <Card.Body >
//             <Card.Title><h3>8</h3></Card.Title>
//             <UlCard
//               diameter={item.diameter}
//               climate={item.climate}
//               terrain={item.terrain}
//             /> 
//            </Card.Body>
//         </Card>
//           }
//           )}
//           </Row> 
//       </Container >
      
//     </div>
//   )
// }

// export default Favorites