import React, { useState } from 'react';
import useFetchHook from '../hooks/useFetchHook'
import PageNumber from '../components/PageNumber'
import UlCard from "../components/CardList";
import { Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import Pagination from 'react-bootstrap/Pagination'

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  
  //paginación
  const [number, setNumber] = useState(1)

    let urlApi = `https://swapi.dev/api/planets/?page=${number}`

    const {planetList, loadingSpinner} = useFetchHook(urlApi)

    let pages = [1, 2, 3, 4, 5, 6]

  
  return (
    
    <main>
      <div className='fondo'>
        <h1 className="mb-3 mt-4">Planetas de Star Wars</h1>
        <React.Fragment>
          <Container >
            <Row lg={2} >
              {
                loadingSpinner ?
                  (
                    <Spinner animation="grow" variant='light' />
                  )
                  : (
                    
              planetList.map((item, index) => {
                return (
                  <Card style={{ width: "18rem" }} key={index + item.url} className="m-2 border border-white border-4 list">

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
                );
              })
                  )

              }
            </Row>
          </Container>
          <Container className='mt-4 d-flex justify-content-center'>
          <Pagination size='lg' >
            <Pagination.Item className=" bg-light">
            {
              pages.map((pages, index) => <PageNumber key={index} num={pages} setNumber={setNumber} />)

            }
            </Pagination.Item>
          </Pagination>
          </Container>
        </React.Fragment>
      </div>
    </main>

  );

}

export default Home;
