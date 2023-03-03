// #13 52.26 src/Components/DetailsRoom/DetailsRoom.js
// ﻿#13 52.26   Line 1:17:  'useEffect' is defined but never used          no-unused-vars
// import React, { useEffect } from " react";
import React from "react";
// #13 63.85 src/Components/DetailsRoom/DetailsRoom.js
// ﻿#13 63.85   Line 5:10:  'useDispatch' is defined but never used  no-unused-vars
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";

import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  CardFooter,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoBedSharp } from "react-icons/io5";

// #13 63.85 src/Components/DetailsRoom/DetailsRoom.js
// ﻿#13 63.85   Line 22:8:  'allActions' is defined but never used   no-unused-vars
// import allActions from "../../Redux/actions/";
// #13 52.26 src/Components/DetailsRoom/DetailsRoom.js
// ﻿#13 52.26   Line 20:9:  'takeDate' is assigned a value but never used  no-unused-vars
// const { takeDate } = allActions;

function DetailsRoom({
  idRooms,
  name,
  bed_quantity,
  description,
  price,
  image,
}) {
    // #13 52.26 src/Components/DetailsRoom/DetailsRoom.js
    // ﻿#13 52.26   Line 30:9:  'dispatch' is assigned a value but never used  no-unused-vars
    // const dispatch = useDispatch();

  const navigate = useNavigate();
  const dates = useSelector((state) => state.dates);
  console.log(dates);

  function restarFechas(fecha1, fecha2) {
    let diferencia = new Date(fecha2).getTime() - new Date(fecha1).getTime();
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    return dias;
  }

  let diferenciaEnDias = restarFechas(dates[0], dates[1]);

  function handleBanana() {
    let room = {
      idRooms: idRooms,
      name: name,
      bed_quantity: bed_quantity,
      price: price,
      image: image,
      quantity: diferenciaEnDias,
    };

    window.localStorage.setItem("roomcart", JSON.stringify(room)); //a localSt solo le podemos enviar strings
    window.localStorage.setItem(
      "totalprice",
      JSON.stringify(room.price * room.quantity)
    );
    return navigate("/shoppingcart");
  }
  const bed_icons = [];
  for (let i = 0; i < bed_quantity; i++) {
    bed_icons.push(<Icon key={i} as={IoBedSharp} />);
  }

  // #13 31.06 src/Components/DetailsRoom/DetailsRoom.js
  // ﻿#13 31.06   Line 68:6:  React Hook useEffect has a missing dependency: 'dispatch'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  // useEffect(() => {
  //   dispatch(takeDate());
  // }, []);

  return (
    <Box mt="20px" padding="20px" boxSize="">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="fill"
          maxW={{ base: "100%", sm: "450px" }}
          mb="40px"
          mt="30px"
          padding="20px"
          ml="10px"
          alt="hotelIbera"
          src={image[0]}
        />

        <Stack>
          <CardBody ml="40px">
            <Heading color="teal" size="md" mr="70%">
              {name}
            </Heading>

            <Text fontSize="xl" py="12" mb="50px">
              Beds quantity <Text color="teal">{bed_icons}</Text>
              <Text mt="10px" fontSize="md">
                {description}
              </Text>
            </Text>
            <Text mr="70%" color="teal" mt="10px">
              {" "}
              Price per night: ${price}
            </Text>
          </CardBody>

          <CardFooter>
            <Button
              ml="70%"
              variant="solid"
              colorScheme="teal"
              onClick={() => handleBanana()}
            >
              Reserve
            </Button>
            <Text>Days: {diferenciaEnDias}</Text>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
}

export default DetailsRoom;
