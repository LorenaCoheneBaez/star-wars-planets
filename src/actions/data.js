import { types } from "../types/index";


// export const favouriteData = (name, climate, terrain, diameter) => {
//   return (dispatch) => {
//     dispatch(favoriteAdd(name, climate, terrain, diameter))
//   }
// }

// export const favoriteAdd = (name, climate, terrain, diameter) => ({
//   type: types.addFavorite,
//   payload: {
//     name,
//     climate,
//     terrain,
//     diameter
//   }
// })

export const favoriteAdd = (favorites) => ({
  type: types.favoriteAdd,
  payload: favorites
})


export const deleteFavorite = (deleteResult) => ({
  type: types.removeFavorite,
  payload: deleteResult
})