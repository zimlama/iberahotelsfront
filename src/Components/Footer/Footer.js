import React from 'react'
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../../images/ibera.jpeg";

function Footer() {
  return (
    <div> 
      <Box backgroundColor="grey" opacity="0.5"mt="30px">
        <Flex align="center" justify="center">
        <Image src={logo} boxSize="150px" borderRadius="full" alt="logo"/>
        </Flex>
        <Text></Text>

      </Box>
    </div>
  )
}

export default Footer