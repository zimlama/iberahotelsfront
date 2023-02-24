// import {
//   //GET_HOTELS,
//   CITIES,
//   FILTER_BY_CITY,
//   FILTER_BY_STARS,
//   GET_ALL_HOTELS,
//   GET_HOTEL_BY_ID,
//   GET_ALL_SERVICES,
//   GET_ALL_AMENITIES,
//   CLEAN_FILTER,
//   SORT_PRICE,
//   CREATE_HOTEL,
// } from "../actions-types/index";

import {
  CITIES,
  FILTER_BY_CITY,
  FILTER_BY_STARS,
  GET_ALL_HOTELS,
  GET_HOTEL_BY_ID,
  GET_ALL_SERVICES,
  GET_ALL_AMENITIES,
  CLEAN_FILTER,
  CREATE_HOTEL,
  GET_NAME_CITIES,
} from "../actions-types/index";

const initialState = {
  hotels: [],
  allHotels: [],
  cities: [],
  hotelDetails: {},
  services: [],
  amenities: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        allHotels: action.payload,
      };
    case CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    case FILTER_BY_CITY:
      let filtered = [];
      if (action.payload === "") {
        filtered = state.allHotels;
      } else {
        filtered = state.allHotels.filter((e) => {
          return e.city === action.payload;
        });
      }
      // let filterCity = state.allHotels;
      // let filtered= action.payload === ""
      // ?filterCity
      // :filterCity.filter((e)=>{
      //   return e.city === action.payload
      // }
      // );
      return {
        ...state,
        hotels: filtered,
      };
    case FILTER_BY_STARS:
      // let filterStar = [];
      // if (action.payload === "") {
      //   filterStar = state.allHotels;
      // } else {
      //   filterStar = state.allHotels.filter((e) => {
      //     return e.stars === parseInt(action.payload);
      //   });
      // }
      // let filterByStar = state.allHotels;
      let filterStar =
        action.payload === ""
          ? state.hotels
          : state.hotels.filter((e) => {
              return e.stars === parseInt(action.payload);
            });
      return {
        ...state,
        hotels: filterStar,
      };
    case GET_HOTEL_BY_ID:
      return {
        ...state,
        hotelDetails: action.payload,
      };
    case GET_ALL_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    case GET_ALL_AMENITIES:
      return {
        ...state,
        amenities: action.payload,
      };
    case CLEAN_FILTER:
      let clean = state.allHotels;
      return {
        ...state,
        hotels: clean,
      };
    case CREATE_HOTEL:
      return {
        ...state,
        hotels: [...state.hotels, action.payload],
        allHotels: [...state.allHotels, action.payload],
      };
    case GET_NAME_CITIES:
      return {
        ...state,
        hotels: action.payload,
      };

    default:
      return state;
  }
}
