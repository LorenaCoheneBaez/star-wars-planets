import { types } from "../types/index";

const initialState = {
  favorites: [],
  //active: null
}

export const reducersFavorites = (state = initialState, action) => {
  switch (action.type) {

    case types.favoriteAdd:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    case types.removeFavorite:
      return {
        ...state,
        favorites: state.favorites.filter(planet => planet.name !== action.payload.name)
      }
    case types.searchPlanets:
      return {
        ...state,
        search: action.payload
      }
    default:
      return state
  }
}