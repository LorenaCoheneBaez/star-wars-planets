import React from 'react'
import { useDispatch } from 'react-redux'
import { favoriteAdd } from "../actions/data"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const UlCard = ({name, diameter, climate, terrain}) => {
  const dispatch = useDispatch()
  
  

  const handleAddFavorite = () => {
    dispatch(favoriteAdd({ name, climate, terrain, diameter }))
   alert('Se agregó el favorito')

  }

 

  return (
    <ListGroup >
      <ListGroup.Item className="list text-white fs-6">Diámetro: {diameter}</ListGroup.Item>
      <ListGroup.Item className="list text-white fs-6">Clima: {climate}</ListGroup.Item>
      <ListGroup.Item className="list text-white fs-6">Terreno: {terrain}</ListGroup.Item>
      <ListGroup.Item className="list text-white fs-6 " >
        <Button className='buttonFav' onClick={handleAddFavorite}><i className="fas fa-heart"> Agregar a favoritos</i></Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default UlCard;
