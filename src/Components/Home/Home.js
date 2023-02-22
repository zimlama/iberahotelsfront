import React from "react";

import {
  Image,
  Box,
  Text,
  Link,
  Button,
  Grid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import homeImage from "../../images/imageHome.jpg";
import homeImage2 from "../../images/greenmountains.jpg";
import homeImage3 from "../../images/sea.jpg";
import wifiImg from "../../images/wifi.jpg";
import trekking from "../../images/trekking.jpg";
import { FcWiFiLogo } from "react-icons/fc";

// import SearchBar from "../SearchBar/SearchBar";;

function Home() {
  return (
    <div className="main">
      <Grid templateColumns="1fr 1fr 1fr">
        <Box>
          <Image src={homeImage} marginBottom="0px" />
        </Box>
        <Box textAlign="center">
          <Image src={homeImage2} />
          <Text
            color="white"
            fontSize="4xl"
            position="absolute"
            top="350px"
            left="35%"
          >
            {" "}
            Unique places in Argentina{" "}
          </Text>
          <Link paddingTop="50px" href="/reserve">
            <Flex justifyContent="center">
              <Button
                textAlign="center"
                top="400px"
                colorScheme="teal"
                left="46%"
                backgroundColor="white"
                variant="outline"
                size="lg"
                position="absolute"
              >
                Learn More
              </Button>
            </Flex>
          </Link>
        </Box>
        <Box>
          <Image src={homeImage3} />
        </Box>
      </Grid>
      <Box height="4px" width="100%" backgroundColor="teal" />
      <Box marginTop="60px">
        <Text fontSize="5xl" color="teal" fontWeight="bold">
          Our best Offers{" "}
        </Text>
      </Box>
      <Box height="2px" width="50%" ml="25%" backgroundColor="teal" />
      <Grid templateColumns="1fr 1fr">
        <Box marginTop="60px">
          <Text fontSize="3xl"> Stay 3 nights, pay 2</Text>
          <Text padding="20px">
            Reserve 2 night this month in any of our hotels and get one night
            free. Check availability{" "}
          </Text>
          <Link>
            <Button colorScheme="teal" variant="solid" size="md">
              {" "}
              Learn More{" "}
            </Button>
          </Link>
        </Box>
        <Box marginTop="60px">
          <Text fontSize="3xl">Carnival Discounts</Text>
          <Text padding="20px">
            February is OUR discount season!! Enjoy greats discounts all over
            the country
          </Text>
          <Link>
            <Button colorScheme="teal" variant="solid" size="md">
              {" "}
              Learn More{" "}
            </Button>
          </Link>
        </Box>
      </Grid>

      <Grid templateColumns="1fr 1fr">
        <Box marginTop="100px">
          <Text fontSize="3xl">Sooner is Better </Text>
          <Text padding="20px">
            Reserve 30 days before your wishing date and get the best offers
          </Text>
          <Link>
            <Button colorScheme="teal" variant="solid" size="md">
              Learn More
            </Button>
          </Link>
        </Box>
        <Box marginTop="100px">
          <Text fontSize="3xl"> Get free breakfast </Text>
          <Text padding="20px">
            If you need to stay with us more than 25 days, your breakfast is
            FREE{" "}
          </Text>
          <Link>
            <Button
              marginBottom="30px"
              colorScheme="teal"
              variant="solid"
              size="md"
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Grid>
      <Box
        height="2px"
        width="50%"
        ml="25%"
        backgroundColor="teal"
        marginTop="60px"
      />
      <Grid templateColumns="1fr 1fr">
        <Box marginTop="90px">
          <Image borderRadius="8px" boxSize="85%" src={wifiImg} ml="40px" />
        </Box>
        <Box marginTop="120px" mr="150px">
          <Text marginTop="60px" fontSize="3xl" fontWeight="bold" color="teal">
            Stay connected!
          </Text>
          <Icon as={FcWiFiLogo} boxSize={12} />
          <Text marginTop="10px" fontSize="2xl">
            {" "}
            We offer high-speed Wi-Fi in all our hotels and co-working spot{" "}
          </Text>
        </Box>
      </Grid>
      <Box
        height="2px"
        width="50%"
        ml="25%"
        backgroundColor="teal"
        marginTop="10px"
      />

      <Grid templateColumns="1fr 1fr">
        <Box marginTop="85px">
          <Link href="/activities">
            <Text
              marginTop="100px"
              fontSize="3xl"
              fontWeight="bold"
              color="teal"
            >
              Local Experiences
            </Text>
          </Link>
          <Text ml="40px" marginTop="40px" fontSize="2xl">
            {" "}
            We have designed all the activities adapting exclusively to the
            needs of our guests. Walking tours, Horse riding, Trekkings and much
            more!{" "}
          </Text>
          <Link href="/activities">
            <Button mt="30px" colorScheme="teal" variant="solid" size="md">
              {" "}
              See all activities
            </Button>
          </Link>
        </Box>

        <Box mt="70px" mr="30px">
          <Image src={trekking} borderRadius="8px" boxSize="85%" ml="40px" />
        </Box>
      </Grid>
      <Box
        height="2px"
        width="50%"
        ml="25%"
        backgroundColor="teal"
        marginTop="3px"
      />

      <Box mb="40px">
        <Text ml="40px" marginTop="40px" fontSize="3xl">
          {" "}
          Discover this amazing country in a different way !
        </Text>
        <Text ml="40px" marginTop="40px" fontSize="2xl">
          {" "}
          Ibera Hotels has rooms for all types of travellers.{" "}
        </Text>
      </Box>
      <Box
        height="2px"
        width="50%"
        ml="25%"
        backgroundColor="teal"
        marginTop="3px"
      />
      <Grid templateColumns="1fr 1fr" mt="30px">
        <Box>
          <Text fontSize="3xl" color="teal" mt="40px">
            Exclusive offers, New local activities{" "}
          </Text>
        </Box>
        <Box mt="40px">
          <Button colorScheme="teal" variant="solid" size="md" mr="30px">
            Suscribe to Newsletter
          </Button>
          <Link href="/aboutus">
            <Button colorScheme="teal" variant="solid" size="md">
              Contact Us!
            </Button>
          </Link>
        </Box>
      </Grid>
      <Box
        height="2px"
        width="50%"
        ml="25%"
        backgroundColor="teal"
        marginTop="50px"
      />
    </div>
  );
}

export default Home;
