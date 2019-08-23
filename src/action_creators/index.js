import {
  ERROR,
  FETCH_HOUSES,
  FETCH_HOUSE,
  START,
  SUCCESS
} from "../constants";
import { push } from "connected-react-router";



export const fetchHouses = () => async dispatch => {
  dispatch({
    type: FETCH_HOUSES + START,
  });

  try {
    const res = await fetch("https://www.anapioficeandfire.com/api/houses");
    const response = await res.json();

    dispatch({
      response,
      type: FETCH_HOUSES + SUCCESS
    });
  } catch (error) {
    dispatch({
      error,
      type: FETCH_HOUSES + ERROR
    });

    dispatch(push("/error"));
  }
};

export const fetchHouse = id => ({
  type: FETCH_HOUSE,
  payload: { id },
  callAPI: `/api/house/${id}`
});
