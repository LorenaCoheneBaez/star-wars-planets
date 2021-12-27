import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { favoriteAdd, deleteFavorite } from "../actions/data"
import ListGroup from 'react-bootstrap/ListGroup'
//import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const UlCard = ({name, diameter, climate, terrain}) => {
  const dispatch = useDispatch()
  const initialState = true;

  const [buttonFavorite, setButton] = useState(initialState)

  const handleAddFavorite = () => {
    dispatch(favoriteAdd({ name, climate, terrain, diameter }))
    setButton(false)

  }

  const handleDeleteFavorite = () => {
    setButton(true)
    dispatch(deleteFavorite({ name, climate, terrain, diameter }))

  }


  return (
    <ListGroup >
      <ListGroup.Item className="list text-white fs-6">Diámetro: {diameter}</ListGroup.Item>
      <ListGroup.Item className="list text-white fs-6">Clima: {climate}</ListGroup.Item>
      <ListGroup.Item className="list text-white fs-6">Terreno: {terrain}</ListGroup.Item>
      <ListGroup.Item className="list text-white fs-6 " >
        {/* button for cards  */}
        {
          buttonFavorite ?
            <button className="button-card cursor shoe" onClick={handleAddFavorite} >
              <h3 className="text-uppercase" >Add to Favorite</h3>
            </button>
            :
            <div className="button-card cursor shoe" onClick={handleDeleteFavorite} >
              <h3 className="text-uppercase-delete" >Delete to Favorite</h3>
            </div>
        }
      </ListGroup.Item>
    </ListGroup>
  );
}

export default UlCard;
