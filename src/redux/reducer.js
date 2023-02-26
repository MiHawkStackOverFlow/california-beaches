import { TOGGLE_FAVOURITE } from "./actions";

const initialData = {
  favourites: []
}

const beachReducer = (state = initialData, action) => {
  switch(action.type) {
    case TOGGLE_FAVOURITE:
      let beach = action.payload;
      let beachFromFavourite = state.favourites.find((favBeach) => beach.id === favBeach.id);
      return {
        ...state,
        favourites: beachFromFavourite ? [...state.favourites.filter((beach) => beach.id !== beachFromFavourite.id )] :
                                         [...state.favourites, action.payload],
      };
    default:
      return state;  
  }
}

export default beachReducer;