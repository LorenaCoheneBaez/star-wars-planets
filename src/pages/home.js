import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetchHook from '../hooks/useFetchHook'
import useForm from '../hooks/useForm';
import PageNumber from '../components/PageNumber'
import UlCard from "../components/CardList";
import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import Pagination from 'react-bootstrap/Pagination'

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  //paginación
  const [number, setNumber] = useState(1)

  let urlApi = `https://swapi.dev/api/planets/?page=${number}`

  const { planetList, loadingSpinner } = useFetchHook(urlApi)

  let pages = [1, 2, 3, 4, 5, 6]

//búsqueda
  const [searchParams, setSearchParams] = useSearchParams({
    keyword: ""
  });

  const [{ keyword }, handleInputChange] = useForm({
    keyword: searchParams.get('keyword')
  });

  const getSearch = (keyword = "") => {
    if (keyword === "") {
      return []
    }
    return planetList.filter(planeta => planeta.name.toLowerCase().includes(keyword.toLowerCase()))
  }

  const planetFiltered = useMemo(() => getSearch(searchParams.get('keyword')), [searchParams]);
  
  const handleSubmit = e => {
    e.preventDefault();
    keyword !== "" && setSearchParams({ keyword })

  }
  
  return (
    
    <main>
      <div className='fondo'>
        <h1 className="mb-3 mt-4">Planetas de Star Wars</h1>
        <React.Fragment>
          
            <Form onSubmit={handleSubmit} className="d-flex mb-4">
              <Form.Control
                name="keyword"
                value={keyword}
                onChange={handleInputChange}
                type="search"
                placeholder="Buscar un planeta"
                className="me-1"
                aria-label="Search"
              />
              <Button type='submit' variant="outline-light"><i className="fas fa-search"></i></Button>
            </Form>
            {
             planetFiltered.length !== 0 ?
                (
                <Container >
            <div className="col-9">

              <h4 className='mt-4'>Resultado de la búsqueda: </h4>
              <hr />
              <div className="row animate__animated animate__fadeIn">
                {
                  planetFiltered.map((item, index) => (
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
                  ))
                }
              </div>
            </div>
          </Container>

              )
              : (

          <Container>
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
          
              
          <div className='mt-4 d-flex justify-content-center'>
          <Pagination size='lg' >
            <Pagination.Item className=" bg-light">
            {
              pages.map((pages, index) => <PageNumber key={index} num={pages} setNumber={setNumber} />)

            }
            </Pagination.Item>
          </Pagination>
          </div>
          </Container>

              )
          }
              
        </React.Fragment>
      </div>
    </main>

  );

}

export default Home;
