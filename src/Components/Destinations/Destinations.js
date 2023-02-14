import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardHotel from "../CardHotel/CardHotel.js";

import allActions from "../../Redux/actions";
import { Box, Flex, Select } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar.js";

const { getAllHotels, filterHotelsByCity, filterHotelByStars } = allActions;

function Destinations() {
  const dispatch = useDispatch();

  const hotels = useSelector((state) => state.hotels);
  const cities = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);

  function handleFilterByCity(e) {
    dispatch(filterHotelsByCity(e.target.value));
  }
  function handleFilterByStars(e) {
    dispatch(filterHotelByStars(e.target.value));
  }

  return (
    <div>
      <Box mt="30px">
        <SearchBar />
      </Box>

      <Flex justifyContent="flex-start" ml="50px" mt="40px">
        <Box>
          <Select
            onChange={(e) => handleFilterByCity(e)}
            placeholder="All Cities"
          >
            {cities &&
              cities.map((city) => <option value={city}>{city}</option>)}
          </Select>
        </Box>

        <Box ml="20px">
          <Select
            onChange={(e) => handleFilterByStars(e)}
            placeholder="All Stars"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Select>
        </Box>
      </Flex>

      <br></br>
      <br></br>
      {hotels &&
        hotels.map((hotel) => {
          return (
            <CardHotel
              name={hotel.name}
              city={hotel.city}
              img={hotel.image}
              stars={hotel.stars}
              id={hotel.idHotels}
            />
          );
        })}
    </div>
  );
}

export default Destinations;
