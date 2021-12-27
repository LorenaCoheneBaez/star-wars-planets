import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFavorite } from '../actions/data'
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css';


function CardFavorite({ name, climate, terrain, diameter }) {


  const dispatch = useDispatch()


  const handleDeleteFavorite = () => {
    dispatch(deleteFavorite({ name, climate, terrain, diameter }))
    alert('¿Seguro quiere eliminar?')
  }


  return (
    <Container>
      <Row lg={2} className='mt-4 d-flex justify-content-center'>
        <Card style={{ width: "18rem" }}  className="m-2 border border-white border-4 list">

          <Card.Body >
            <Card.Title><h3>{name}</h3></Card.Title>
            <ListGroup >
              <ListGroup.Item className="list text-white fs-6">Diámetro: {diameter}</ListGroup.Item>
              <ListGroup.Item className="list text-white fs-6">Clima: {climate}</ListGroup.Item>
              <ListGroup.Item className="list text-white fs-6">Terreno: {terrain}</ListGroup.Item>
              <ListGroup.Item className="list text-white fs-6 " >
                <Button className='buttonFav' onClick={handleDeleteFavorite}>
                  <i className="fas fa-trash"> Eliminar de favoritos</i>
                </Button>
                                    
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}


export default CardFavorite