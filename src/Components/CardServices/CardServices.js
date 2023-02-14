import React from "react";
import { Box, Card, Text, Image, ButtonGroup, Button } from "@chakra-ui/react";

function CardServices({
  id,
  name,
  image,
  price,
  handleAddToCart,
  handleRemoveItem,
}) {
  return (
    <Box>
      <Card border="solid" borderColor="teal">
        <Text>{name}</Text>
        <Image boxSize="50px" src={image} />
        <Text>$ {price}</Text>
        <ButtonGroup>
          <Button onClick={() => handleRemoveItem(id)}>-</Button>
          <Button onClick={() => handleAddToCart(id)}>+</Button>
        </ButtonGroup>
      </Card>
    </Box>
  );
}

export default CardServices;
