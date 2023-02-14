import React, { useState } from "react";
import {
  Input,
  Button,
  Box,
  Grid,
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import "./searchbar.css";
import { FiArrowDown } from "react-icons/fi";

function SearchBar() {
  const [destination, setDestination] = useState("");
  const [inDate, setInDate] = useState("");
  const [outDate, setOutDate] = useState("");
  const [beds, setBeds] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const onlyLetters = /^[a-zA-ZÀ-ÿ]+$/;
  const onlyLettersCheck = (input) => {
    return onlyLetters.test(input);
  };
  function handleInputDestination(e) {
    setDestination(e.target.value);
  }

  function handleInputCheckIn(e) {
    setInDate(e.target.value);
  }
  function handleInputCheckOut(e) {
    setOutDate(e.target.value);
  }
  function handleInputBeds(e) {
    setBeds(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (onlyLettersCheck(e.target.value)) {
    }
  }
  const isError = destination === "";

  return (
    <Box
      borderRadius="8px"
      bgColor="teal"
      opacity="0.9"
      paddingBottom="10px"
      paddingTop="10px"
      width="90%"
      marginLeft="70px"
    >
      <Box ml="17%">
        <FormControl onSubmit={(e) => handleSubmit(e)}>
          <Input
            isInvalid={isError}
            mr="300px"
            width="500px"
            backgroundColor="white"
            placeHolder="Destination"
            type="text"
            value={destination}
            onChange={handleInputDestination}
          />
          {isError ? (
            <FormHelperText mr="600px" mt="2px" color="black">
              Select a destination, please
            </FormHelperText>
          ) : (
            <FormErrorMessage mr="200px">
              Destination is required
            </FormErrorMessage>
          )}
          <Grid templateColumns="1fr 1fr 1fr 1fr">
            <Box>
              <FormLabel color="white">Check-In</FormLabel>
              <input
                className="checkin"
                bgColor="white"
                type="date"
                value={inDate}
                min={today}
                onChange={handleInputCheckIn}
              ></input>
            </Box>
            <Box>
              <FormLabel color="white">Check-out</FormLabel>
              <input
                className="checkin"
                bgColor="white"
                type="date"
                value={outDate}
                min={today}
                onChange={handleInputCheckOut}
              ></input>
            </Box>

            <Select
              width="50%"
              color="black"
              bgColor="white"
              mr="10px"
              mt="32px"
              rightIcon={FiArrowDown}
              value={beds}
              onChange={handleInputBeds}
            >
              <option value="option1">1 bed</option>
              <option value="option2">2 beds</option>
              <option value="option3">3 beds</option>
              <option value="option4">4 beds</option>
            </Select>
            <Box>
              <Button
                mr="160px"
                mt="31px"
                color="white"
                colorScheme="teal"
                variant="outline"
                type="submit"
              >
                Check Availability
              </Button>
            </Box>
          </Grid>
        </FormControl>
      </Box>
    </Box>
  );
}

export default SearchBar;
