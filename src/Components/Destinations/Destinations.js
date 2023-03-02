import React, { useEffect, useState } from "react";
import CardHotel from "../CardHotel/CardHotel.js";
import { Box, Flex, Button, Select, Stack } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar.js";
import axios from "axios";
const { REACT_APP_GET_ALL_HOTELS } = process.env;


function Destinations() {

  useEffect(() => {

    axios.get(REACT_APP_GET_ALL_HOTELS)
      .then((res) => {
        console.log(res);
        setHotels(res.data);
      })
      .catch((err) => console.log(err))

  }, []);


  const [state, setState] = useState("active");
  const [hotels, setHotels] = useState([]);
  const [newhotels, setNewHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const city = [];
  var ITEMS_PER_PAGE = 8;

  if (hotels.length !== 0) {

    const nextHandler = () => {

      try {

        const totalElementos = hotels.length;

        const nextPage = currentPage + 1;

        const firstIndex = nextPage * ITEMS_PER_PAGE;

        if (nextPage >= totalElementos / ITEMS_PER_PAGE || newhotels.length >= 9 || newhotels.length <= 7) return;

        setNewHotels([...hotels].splice(firstIndex, ITEMS_PER_PAGE))
        setCurrentPage(nextPage);

      } catch (error) {

        console.log(error)

      }

    };

    const prevHandler = () => {

      if (currentPage === 0) return;

      const prevPage = currentPage - 1;

      if (newhotels.length !== 1) {
        if (prevPage < 0 || newhotels.length >= 9 || newhotels.length <= 7) return;
      }

      const firstIndex = prevPage * ITEMS_PER_PAGE;

      setNewHotels([...hotels].splice(firstIndex, ITEMS_PER_PAGE))
      setCurrentPage(prevPage);

    };

    hotels.sort((a, b) => {

      if (a.city > b.city) {
        return 1;
      }
      if (b.city > a.city) {
        return -1;
      }
      return 0;
    });

    for (let i = 0; i < hotels.length; i++) {

      city.push(hotels[i].city)

    }

    const SetCity = [...new Set(city)];

    SetCity.sort((a, b) => {

      if (a > b) {
        return 1;
      }
      if (b > a) {
        return -1;
      }
      return 0;
    });

    const handleSearchCity = (e) => {

      const SelectCity = document.getElementById("select-city");
      const SelectStars = document.getElementById("select-stars");

      if (!SelectCity.value) {

        const hotelsFilter = hotels.filter((dato) => {
          return dato.stars.toString().includes(SelectStars.value.toString())
        });

        setNewHotels([...hotelsFilter]);
        setCurrentPage(0);

      } else {

        const hotelsFilter2 = hotels.filter((dato) => {
          return dato.stars.toString().includes(SelectStars.value.toString())
        });

        setNewHotels([...hotelsFilter2].filter((dato) => {
          return dato.city.toLowerCase().includes(SelectCity.value.toLowerCase())
        }))

        setCurrentPage(0);

      };

    };

    const handleSearchStars = (e) => {


      const SelectCity = document.getElementById("select-city");
      const SelectStars = document.getElementById("select-stars");

      if (!SelectStars.value) {

        const hotelsFilter = hotels.filter((dato) => {
          return dato.city.toLowerCase().includes(SelectCity.value.toLowerCase())
        });

        setNewHotels([...hotelsFilter])
        setCurrentPage(0);

      } else {

        const hotelsFilter2 = hotels.filter((dato) => {
          return dato.city.toLowerCase().includes(SelectCity.value.toLowerCase())
        });

        setNewHotels([...hotelsFilter2].filter((dato) => {
          return dato.stars.toString() === e.target.value.toString()
        }))

        setCurrentPage(0);

      }

    };

    const limpiarFiltros = (e) => {

      const SelectCity = document.getElementById("select-city");
      const SelectStars = document.getElementById("select-stars");

      setNewHotels([...hotels].splice(0, ITEMS_PER_PAGE))
      setCurrentPage(0);

      SelectCity.value = "";
      SelectStars.value = "";

    };

    if (newhotels.length === 0 && state === "active") {
      setNewHotels([...hotels].splice(0, ITEMS_PER_PAGE));
      setState("");
    };

    if (newhotels.length > 16) {
      setNewHotels([...hotels].splice(0, ITEMS_PER_PAGE));
    };

    console.log(hotels);

    return (

      <div>

        <Box mt="30px">
          <SearchBar />
        </Box>

        <Flex justifyContent="flex-start" ml="50px" mt="40px">

          <Box>

            <Button
              variant="solid"
              colorScheme="teal"
              onClick={limpiarFiltros}
            >
              Limpiar Filtros
            </Button>

          </Box>

          <Box>

            <Select
              id="select-city"
              placeholder="All Cities"
              onChange={handleSearchCity}
            >
              {SetCity && SetCity.map((c) => {
                return (
                  <option>{c}</option>
                )
              })}
            </Select>

          </Box>

          <Box ml="20px">

            <Select
              id="select-stars"
              placeholder="Filter by all Stars"
              onChange={handleSearchStars}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Select>

          </Box>

        </Flex>

        <br></br>
        <br></br>


        {newhotels &&
          newhotels.map((hotel) => {
            return (
              <CardHotel
                name={hotel.name}
                city={hotel.city}
                img={hotel.image}
                stars={hotel.stars}
                id={hotel.idHotels}
                status={hotel.status}
              />
            );
          })}

        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={200}
          p={6}
          m="10px auto"
          as="form"
        >

          <Stack direction='row' spacing={4} align='center'>

            <Button
              variant="solid"
              colorScheme="teal"
              onClick={prevHandler}
            >
              Prev
            </Button>

            <div>

              {currentPage}

            </div>

            <Button
              variant="solid"
              colorScheme="teal"
              onClick={nextHandler}
            >
              Next
            </Button>

          </Stack>

        </Box>

      </div>

    );

  } else {

    return (

      <div>Loading...</div>

    )

  }

};

export default Destinations;
