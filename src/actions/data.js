import { types } from "../types/index";


export const favoriteAdd = (favorites) => ({
  type: types.favoriteAdd,
  payload: favorites
})


export const deleteFavorite = (deleteResult) => ({
  type: types.removeFavorite,
  payload: deleteResult
})