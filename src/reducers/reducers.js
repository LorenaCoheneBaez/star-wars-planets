import { types } from "../types/index";

export const reducersFavorites = (state = {}, action) => {


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