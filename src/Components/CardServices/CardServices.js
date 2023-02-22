import React from "react";
<<<<<<< HEAD
import {
  Box,
  Card,
  Text,
  Image,
  ButtonGroup,
  Button,
  Flex,
} from "@chakra-ui/react";
=======
import { Box, Text, Image, ButtonGroup, Button, Grid } from "@chakra-ui/react";
>>>>>>> 312507efe779ce053d7beb0c2f9fd97ee9bc67ae

function CardServices({
  id,
  name,
  image,
  price,
  handleAddToCart,
  handleRemoveItem,
}) {
  return (
    <Box display="center">
      <Box
        display="flex"
        flexDirection="column"
        border="solid"
        borderColor="teal"
        mt="10px"
        maxW="100%"
        padding="20px"
        borderWidth="1px"
        p="4"
      >
        <Box>
          <Image boxSize="50px" src={image} />
        </Box>
        <Box>
          <Text>{name}</Text>
        </Box>
        <Box>
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
