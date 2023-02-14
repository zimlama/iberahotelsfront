import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  CardFooter,
  Button,
  Link,
  Icon,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoBedSharp } from "react-icons/io5";

function DetailsRoom({
  idRooms,
  name,
  bed_quantity,
  description,
  price,
  image,
}) {
  const navigate = useNavigate();

  function handleBanana() {
    let room = {
      idRooms: idRooms,
      name: name,
      bed_quantity: bed_quantity,
      price: price,
      image: image,
    };

    window.localStorage.setItem("roomcart", JSON.stringify(room)); //a localSt solo le podemos enviar strings
    return navigate("/shoppingcart");
  }
  return (
    <Box mt="20px" padding="20px">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "80%", sm: "150px" }}
          alt="hotelIbera"
          src={image[0]}
        />
        {/* {image &&
          image.map((i) => {
            return (
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                alt="hotelIbera"
                src={i}
              />
            );
          })} */}

        <Stack>
          <CardBody ml="40px">
            <Heading color="teal" size="md" mr="70%">
              {name}
            </Heading>

            <Text fontSize="xl" py="12" mb="50px">
              {bed_quantity} beds
              <Icon ml="30px" as={IoBedSharp}></Icon>
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
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
}

export default DetailsRoom;
