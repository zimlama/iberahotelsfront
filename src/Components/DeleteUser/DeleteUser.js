import axios from "axios";
import {
  FormLabel,
  Select,
  Input,
  Box,
  Stack,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
// src/Components/DeleteUser/DeleteUser.js
//   Line 19:10:  'useEffect' is defined but never used  no-unused-vars
// import { useEffect, useState } from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const { REACT_APP_FRONT, REACT_APP_BACK } = process.env;

function DeleteUser() {
  // src/Components/DeleteUser/DeleteUser.js
  // Line 27:6:   React Hook useEffect has a missing dependency: 'users'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  // // useEffect(() => {
  //   console.log(users);
  // }, []);

  if (!document.cookie) {
    window.location.href = REACT_APP_FRONT;
  }

  const users = [];
  const [state, setState] = useState([]);
  const [state2, setState2] = useState([]);
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState("");
  // src/Components/DeleteUser/DeleteUser.js
  // Line 38:10:  'alert2' is assigned a value but never used                                                               no-unused-vars
  // Line 39:17:  'isAuthenticated' is assigned a value but never used                                                      no-unused-vars
  // // const [alert2, setAlert2] = useState("");
  // const { user, isAuthenticated, isLoading } = useAuth0();
  const { user } = useAuth0();
  const [newUser, setNewUser] = useState("");

  if (state.length === 0 || alert === "submit") {
    axios
      .get("http://localhost:3010/users")
      .then((res) => {
        const logUser = res.data.find((u) => {
          return u.email === user.email;
        });

        if (res.data) {
          if (logUser.privilige !== true) {
            window.location.href = REACT_APP_FRONT;
          }
        }

        for (let i = 0; i < res.data.length; i++) {
          users.push(res.data[i]);
        }
        if (users.length) {
          setState(users);
        }
        // src/Components/DeleteUser/DeleteUser.js
        // setAlert2("");
      })
      .catch((err) => console.log(err));
  }

  const handleInputChange = (e) => {
    const select = document.getElementById("select");

    const StateUser = state.filter((u) => {
      return u.email === e.target.value;
    });

    setNewUser(StateUser);
    setAlert("");
    setInput(e.target.value);

    select.value = "";
  };

  const handeleEnableDisable = (e) => {
    axios
      .put(`${REACT_APP_BACK}/users/disable`, { email: input })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setState(users);
    setInput("");
    setNewUser("");
    setAlert("submit");
    // src/Components/DeleteUser/DeleteUser.js
    // setAlert2("submit");
  };

  const handleFilter = (e) => {
    e.preventDefault();

    const inputFilter = document.getElementById("input-filter");

    const StateFilter = state.filter((u) => {
      return u.email.toLowerCase().includes(inputFilter.value.toLowerCase());
    });

    if (StateFilter.length) {
      // console.log(StateFilter,"STATE FILTER")
      // console.log(inputFilter.value, "ACAAAAAAAAAAAAAAAAAA")
      setNewUser(StateFilter);
    }

    setAlert("");
  };

  const handleFilter2 = (e) => {
    const inputFilter = document.getElementById("input-filter");

    setState2(
      [...state2].filter((u) => {
        return u.email.toLowerCase().includes(inputFilter.value.toLowerCase());
      })
    );

    setAlert("");
  };

  state.sort((a, b) => {
    if (a.email > b.email) {
      return 1;
    }
    if (b.email > a.email) {
      return -1;
    }
    return 0;
  });

  console.log("state", state);
  console.log("newUser", newUser);
  console.log("input", input);
  console.log("aca esta state");
  if (state.length !== 0) {
    return (
      <div>
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={6}
          m="10px auto"
          as="form"
        >
          {alert ? (
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                User modified!
              </AlertTitle>
            </Alert>
          ) : (
            <div></div>
          )}

          <br></br>
          <br></br>

          <FormLabel>Find User:</FormLabel>

          <Input id="input-filter" onChange={handleFilter2} />

          <br></br>
          <br></br>

          <Stack>
            {state2 &&
              state2.map((u) => {
                return (
                  <button
                    id="button-filter"
                    onClick={handleFilter}
                    value={u.email}
                  >
                    {u.email}
                  </button>
                );
              })}
          </Stack>

          <br></br>
          <br></br>

          <FormLabel>Select User:</FormLabel>

          <Select
            id="select"
            placeholder="Select-User"
            borderWidth="3px"
            maxW="sm"
            onChange={handleInputChange}
          >
            {state &&
              state.map((u) => {
                return <option>{u.email}</option>;
              })}
          </Select>

          <br></br>
          <br></br>

          <FormLabel>User:</FormLabel>

          <Input type="text" value={input} borderWidth="3px" />

          <br></br>
          <br></br>

          {newUser ? (
            <Box
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              maxWidth={400}
              p={6}
              m="10px auto"
              as="form"
            >
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src={newUser[0].image}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                    maxWidth={200}
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">User Info</Heading>
                    <Text>
                      Name: {newUser[0].first_name} {newUser[0].last_name}
                    </Text>
                    <Text>Email: {newUser[0].email}</Text>
                    <Text>
                      Privilage:{" "}
                      {newUser[0].privilige === true
                        ? "This user is admin"
                        : "Nomal user"}
                    </Text>
                    <Text>Status: {newUser[0].status}</Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </Box>
          ) : (
            <div></div>
          )}

          <br></br>
          <br></br>

          <Stack direction="row" spacing={4} align="center">
            {newUser.length > 0 && newUser[0].status === "active" ? (
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={handeleEnableDisable}
              >
                Disable
              </Button>
            ) : (
              <div></div>
            )}

            {newUser.length > 0 && newUser[0].status === "disabled" ? (
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={handeleEnableDisable}
              >
                Enable
              </Button>
            ) : (
              <div></div>
            )}
          </Stack>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }
}

export default DeleteUser;
