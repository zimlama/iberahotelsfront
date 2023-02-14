import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Heading,
  CardFooter,
  CardBody,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions";
import CardServices from "../CardServices/CardServices";

const { getServices } = allActions;

function ShoppingCart() {
  const [local, setLocal] = useState("");
  const [service, setService] = useState({});
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);

  useEffect(() => {
    const cart = window.localStorage.getItem("roomcart");
    setLocal(cart ? JSON.parse(cart) : {});
    const serv = window.localStorage.getItem("servicecart");
    setService(serv ? JSON.parse(serv) : {});
    dispatch(getServices());
  }, [dispatch]);

  function handleResetCart() {
    window.localStorage.setItem("servicecart", JSON.stringify({}));
    setService({});
  }

  function handleRemoveItem(id) {
    console.log("quitar", id);

    // remuevo solo 1 item - aca tener en cuenta que baja cantidad- cambia precio total si hay otras cosas sino queda en 0 -
  }
  function handleAddToCart(id) {
    const filterService = services.filter((e) => e.id === id);
    console.log(filterService);
    service[id] = {
      name: filterService[0].name,
      price: filterService[0].price,
    };
    setService({ ...service });

    window.localStorage.setItem("servicecart", JSON.stringify(service));
  }

  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md"> Your shopping cart</Heading>
      </CardHeader>
      <CardBody>
        <Button colorScheme="blue" onClick={handleResetCart}>
          Clear All
        </Button>
        <Text>
          {local.name} Price: ${local.price}{" "}
          <Button ml="20px" onClick={handleRemoveItem}>
            X
          </Button>
          <Text>
            {service &&
              Object.keys(service).map((e) => {
                return (
                  <Box key={"key"}>
                    <Text>${service[e].price}</Text>
                    <Text>Service: {service[e].name}</Text>
                  </Box>
                );
              })}
          </Text>
        </Text>
        {services &&
          services.map((ser) => (
            <CardServices
              id={ser.id}
              name={ser.name}
              image={ser.image}
              price={ser.price}
              handleAddToCart={handleAddToCart}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default ShoppingCart;
