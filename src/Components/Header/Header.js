import React from "react";
// import {
//   Box,
//   Button,
//   Image,
//   Link,
//   HStack,
//   Flex,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverFooter,
//   PopoverArrow,
//   PopoverCloseButton,
// } from "@chakra-ui/react";

import {
  Box,
  Button,
  Image,
  Link,
  HStack,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
} from "@chakra-ui/react";
import logo from "../../images/ibera.jpeg";
import Icon from "@chakra-ui/icon";
import { RiLuggageCartLine } from "react-icons/ri";
import {} from "@chakra-ui/react";

function Header() {
  return (
    <div>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="0.9rem"
        bg="white"
        color="white"
      >
        <Flex align="center" mr={5}>
          <Link href="/">
            <Image
              borderRadius="full"
              boxSize="80px"
              src={logo}
              alt="logo"
              ml="25px"
            />
          </Link>
        </Flex>

        <Box color="teal">
          <HStack spacing="30px">
            <Popover trigger="hover">
              <PopoverTrigger>
                <Link fontSize={18} href="/destinations">
                  Destinations
                </Link>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />

                <PopoverHeader>
                  <Link href="/destinations">Reserve Now!</Link>
                </PopoverHeader>
              </PopoverContent>
            </Popover>

            {/* <Link fontSize={18} ml="10px" href="/reserve">
              Reserve Now!
            </Link> */}
            <Link fontSize={18} href="/activities">
              Local Experiences
            </Link>
            <Link fontSize={18} href="/aboutus">
              About Us{" "}
            </Link>
            <Link color="red" fontSize={18} href="/createHotel">
              Create Hotel{" "}
            </Link>

            <Link href="/shoppingcart">
              <Icon href="#" as={RiLuggageCartLine} boxSize={7} />
            </Link>

            <Link href="/login">
              <Button colorScheme="teal" variant="solid">
                Log In
              </Button>
            </Link>

            <Link href="/sing-up">
              <Button colorScheme="teal" variant="outline">
                Sign Up
              </Button>
            </Link>
          </HStack>
        </Box>
      </Flex>
    </div>
  );
}

export default Header;
