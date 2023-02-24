import React from "react";
import { v4 } from "uuid";
// import {
//   Box,
//   Card,
//   Text,
//   Image,
//   ButtonGroup,
//   Button,
//   Flex,
// } from "@chakra-ui/react";
import { Box, Text, Image, ButtonGroup, Button } from "@chakra-ui/react";

function CardServices({
  id,
  name,
  image,
  price,
  handleAddToCart,
  handleRemoveItem,
}) {
  return (
    <Box display="center" key={v4()}>
      <Box
        display="flex"
        flexDirection="column"
        border="solid"
        borderColor="teal"
        mt="10px"
        maxW="100%"
        padding="15px"
        borderWidth="1px"
        p="4"
        borderRadius="9px"
        ml="25%"
      >
        <Box>
          <Image boxSize="50px" src={image} />
          <Text>{name}</Text>
          <Text>$ {price}</Text>
        </Box>

        <ButtonGroup color="teal" ml="80px">
          <Button onClick={() => handleRemoveItem(id)}>-</Button>
          <Button onClick={() => handleAddToCart(id)}>+</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default CardServices;
