import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions";
// import {
//   Card,
//   Image,
//   CardBody,
//   Heading,
//   Stack,
//   Text,
//   Icon,
//   Flex,
//   Box,
// } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Icon,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FiWifi } from "react-icons/fi";
import { GiTowel, GiDesk } from "react-icons/gi";
import { MdShower, MdChair } from "react-icons/md";

import DetailsRoom from "../DetailsRoom/DetailsRoom";

const { getHotelById, getAmenities } = allActions;

function HotelDetails(props) {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotelById(id));
    dispatch(getAmenities());
  }, [dispatch, id]);

  const dtHotel = useSelector((state) => state.hotelDetails);
  const amenity = useSelector((state) => state.amenities);

  console.log("aca esta amenities", amenity);
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        size="md"
      >
        <Stack>
          <CardBody ml="40px">
            <Heading color="teal" size="xl">
              {dtHotel.city}
            </Heading>
            <Text py="12">
              {dtHotel.name}
              <Text> {dtHotel.stars} Stars Quality </Text>
            </Text>
            <Flex display="inline-flex">
              <Text as="b" fontSize="xl" mb="30px" mr="30px">
                Amenities availables:
              </Text>
              <Icon ml="10px" boxSize={7} as={FiWifi}></Icon>
              <Icon ml="10px" boxSize={7} as={GiTowel}></Icon>
              <Icon ml="10px" boxSize={7} as={GiDesk}></Icon>
              <Icon ml="10px" boxSize={7} as={MdChair}></Icon>
              <Icon ml="10px" boxSize={7} as={MdShower}></Icon>
            </Flex>
            <Box>
              <Text
                mr="70%"
                as="b"
                fontSize="xl"
                mt="60px"
                color="teal"
                size="4xl"
              >
                Types of Rooms available:{" "}
              </Text>
            </Box>
            <Box mt="30px">
              {dtHotel.rooms &&
                dtHotel.rooms.map((r) => {
                  return (
                    <DetailsRoom
                      bed_quantity={r.bed_quantity}
                      description={r.description}
                      idRooms={r.idRooms}
                      image={r.image}
                      name={r.name}
                      price={r.price}
                    />
                  );
                })}
            </Box>
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
}

export default HotelDetails;
