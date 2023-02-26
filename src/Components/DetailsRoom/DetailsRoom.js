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
  Select,
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
  const [dayqty, setDayqty] = useState("");

  function handleBanana() {
    let room = {
      idRooms: idRooms, //en mp es id
      name: name, // aca es title en mp
      bed_quantity: bed_quantity,
      price: price, //aca es unit_price
      image: image, //picture_url
      quantity: dayqty,

      //
    };

    window.localStorage.setItem("roomcart", JSON.stringify(room)); //a localSt solo le podemos enviar strings
    window.localStorage.setItem(
      "totalprice",
      JSON.stringify(room.price * room.quantity)
    );
    return navigate("/shoppingcart");
  }
  function handleSelect(e) {
    setDayqty(e.target.value);
  }
  const bed_icons = [];
  for (let i = 0; i < bed_quantity; i++) {
    bed_icons.push(<Icon key={i} as={IoBedSharp} />);
  }

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
            <Select onChange={(e) => handleSelect(e)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </Select>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
}

export default DetailsRoom;
