import React from "react";
import { Box, Button } from "@chakra-ui/react";

function Pages({
  currentHotels,
  page,
  setHotelsPerPage,
  hotelsPerPage,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(currentHotels / hotelsPerPage) && i < 6; i++) {
    pageNumbers.push(i);
  }

  function handleNext() {
    setCurrentPage((x) => x + 1);
  }
  function handlePrev() {
    setCurrentPage((x) => x - 1);
    if (currentPage === 1) {
      setHotelsPerPage(10);
      setCurrentPage(1);
      return;
    }
  }
  return (
    <Box mt="20px">
      <Button
        mr="5px"
        colorScheme="teal"
        backgroundColor="teal"
        size="md"
        onClick={() => handleNext()}
      >
        {" "}
        Prev
      </Button>
      {pageNumbers.map((number) => {
        return (
          <Button
            color="teal"
            border="solid"
            borderColor="teal"
            backgroundColor="white"
            size="md"
            onClick={() => page(number)}
          >
            {number}
          </Button>
        );
      })}
      <Button
        ml="5px"
        colorScheme="teal"
        backgroundColor="teal"
        size="md"
        onClick={() => handlePrev()}
      >
        {" "}
        Next
      </Button>
    </Box>
  );
}
export default Pages;
