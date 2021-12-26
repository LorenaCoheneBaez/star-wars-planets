import { types } from "../types/types";


export const favouriteData = (planet) => {

  return (dispatch) => {

    dispatch(data(planet))

  }

}

export const data = (planetList) => ({
  type: types.createData,
  payload: {
    planetList
  }
})