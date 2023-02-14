import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Text,
  CardFooter,
  Heading,
  Button,
  Divider,
  Box,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CardHotel({ id, name, city, img, stars }) {
  return (
    <HStack display="inline-flex">
      <Box ml="20px" mb="19px">
        <Card maxW="sm">
          <CardBody>
            <Image src={img} alt="hotelImg" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading color="teal" size="md">
                {city}
              </Heading>
              <Text>{name}</Text>
              <Text>This is a {stars} stars hotel</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link to={`/hotels/${id}`}>
              <Button variant="solid" colorScheme="teal">
                View more info
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </Box>
    </HStack>
  );
}

export default CardHotel;

