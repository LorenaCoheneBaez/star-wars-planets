import { types } from "../types/index";

const initialState = {
  favorites: [],
  //active: null
}

export const reducersFavorites = (state = initialState, action) => {


  switch (action.type) {
        case types.addFavorite:
console.log(action.payload)

return {
  ...state,
  favorites: [{ ...action.payload }]
}

    default: return state
}

}