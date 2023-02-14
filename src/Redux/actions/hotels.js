import axios from "axios";

import {
  GET_ALL_HOTELS,
  CITIES,
  FILTER_BY_CITY,
  FILTER_BY_STARS,
  GET_HOTEL_BY_ID,
} from "../actions-types/index";

const { REACT_APP_GET_ALL_HOTELS } = process.env;

export function getAllHotels() {
  return async function (dispatch) {
    try {
      const response = await axios.get(REACT_APP_GET_ALL_HOTELS);
      const filterBycity = response.data.map((e) => e.city);
      dispatch({ type: CITIES, payload: filterBycity });
      return dispatch({ type: GET_ALL_HOTELS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
  // return async function(dispatch){
  //     let json = await axios('http://localhost:3010/hotels');
  //     // console.log(json)
  //     return dispatch({
  //         type:'GET_HOTELS',
  //         payload: json.data
  //     })
  // }
}

export function filterHotelsByCity(city) {
  return { type: FILTER_BY_CITY, payload: city };
}

export function filterHotelByStars(stars) {
  return { type: FILTER_BY_STARS, payload: stars };
}

export function getHotelById(id) {
  return async function (dispatch) {
    try {
      let response = await axios.get(REACT_APP_GET_ALL_HOTELS + id);
      return dispatch({ type: GET_HOTEL_BY_ID, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
