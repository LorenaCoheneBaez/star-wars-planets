import { types } from "../types/index";

export const reducers = (state = {}, action) => {


  switch (action.type) {
    case types.createData:

      return {

        planetList: action.payload.planets,

      }
    case types.deleteData:

      return {}

    default:
      return state;
  }

}