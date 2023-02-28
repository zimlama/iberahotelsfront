import axios from "axios";
// #13 58.78 src/Components/Profile.js
// ﻿#13 58.78   Line 8:23:    'AlertTitle' is defined but never used        no-unused-vars
// ﻿#13 58.78   Line 8:35:    'AlertDescription' is defined but never used  no-unused-vars
// import {
//     Box, Stack, Button,
//     Card, CardBody, Image,
//     Heading, Text, Divider, Select,
//     FormControl, FormLabel, Input,
//     FormHelperText, FormErrorMessage,
//     Alert, AlertIcon, AlertTitle, AlertDescription
// } from '@chakra-ui/react';
import {
    Box, Stack, Button,
    Card, CardBody, Image,
    Heading, Text, Divider, Select,
    FormControl, FormLabel, Input,
    FormHelperText, FormErrorMessage,
    Alert, AlertIcon
} from '@chakra-ui/react';

import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const [newUser, setNewUser] = useState("");
    const [buttonModify, setButtonModify] = useState("");
    const [errorSubmit, setErrorSubmit] = useState("");
    const [input, setInput] = useState({
        first_name: "",
        last_name: "",
        date_birth: "",
        mobile: "",
        nationality: ""
    });

    // #13 58.78 src/Components/Profile.js
    // ﻿#13 58.78   Line 27:13:   'logout' is assigned a value but never used   no-unused-vars
    // const { logout } = useAuth0();

    const PaisesArray = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República de Macedonia", "República del Congo", "República Democrática del Congo", "República Dominicana", "República Sudafricana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];
    const DayArray = [];
    const MonthArray = [];
    const YearArray = [];

    for (let i = 1; i < 32; i++) {
        DayArray.push(i);
    };

    for (let i = 1; i < 13; i++) {
        MonthArray.push(i);
    };

    for (let i = 1922; i < 2024; i++) {
        YearArray.push(i);
    };

    if (isLoading) {
        return (

            <div>Loading...</div>

        )

    } else if (isAuthenticated) {

        if (isAuthenticated && !newUser) {

            var axiosUser;
            var email = user.email;


            axios
                .get("http://localhost:3010/users")
                .then((res) => {
                    console.log("get axios profile", res.data);

                    axiosUser = res.data.find((u) => {
                        return (
                            u.email === email
                        )
                    });

                    if (!newUser) {
                        setNewUser(axiosUser)
                        console.log(axiosUser);
                    };

                })
                .catch((err) => console.log(err));

        };

        const handleInputChange = (e) => {

            setInput({
                ...input,
                [e.target.name]: e.target.value
            });

            console.log(input)

        };

        const HandleModify = (e) => {

            // #13 31.41 src/Components/Profile.js
            // ﻿#13 31.41   Line 113:17:  'errorBirthday' is not defined      no-undef
            // ﻿#13 31.41   Line 114:17:  'errorBsuccessful' is not defined   no-undef
            // ﻿#13 31.41   Line 121:17:  'errorNation' is not defined        no-undef
            // ﻿#13 31.41   Line 122:17:  'errorNTsuccessful' is not defined  no-undef
            // if (buttonModify === "") {
            //     setButtonModify("modify")
            // } else {
            //     setButtonModify("")
            //     errorBirthday = "";
            //     errorBsuccessful = "";
            //     errorName = "";
            //     errorNsuccessful = "";
            //     errorLastName = "";
            //     errorLNsuccessful = "";
            //     errorMobile = "";
            //     errorMsuccessful = "";
            //     errorNation = "";
            //     errorNTsuccessful = "";
            //     setInput({
            //         first_name: "",
            //         last_name: "",
            //         date_birth: "",
            //         mobile: "",
            //         nationality: ""
            //     })
            // }
            if (buttonModify === "") {
                setButtonModify("modify")
            } else {
                setButtonModify("")
                errorName = "";
                errorNsuccessful = "";
                errorLastName = "";
                errorLNsuccessful = "";
                errorMobile = "";
                errorMsuccessful = "";
                setInput({
                    first_name: "",
                    last_name: "",
                    date_birth: "",
                    mobile: "",
                    nationality: ""
                })
            }

        };

        const handleBirthdayChange = (e) => {

            const selectDay = document.getElementById('select-day');
            const selectMonth = document.getElementById('select-month');
            const selectYear = document.getElementById('select-year');

            setInput({
                ...input,
                [e.target.name]: `${selectYear.value}-${selectMonth.value}-${selectDay.value}`
            });

            console.log(input)

        };

        const SubmitModifyUser = (e) => {

            const selectDay = document.getElementById('select-day');
            const selectMonth = document.getElementById('select-month');
            const selectYear = document.getElementById('select-year');

            if (
                !errorName && !errorLastName && !errorMobile && errorMsuccessful &&
                errorNsuccessful && errorLNsuccessful && input.nationality
                && input.date_birth && selectDay.value && selectMonth.value && selectYear.value
            ) {

                if (!input.first_name || !input.last_name || !input.nationality || !input.date_birth ||
                    !input.mobile) {

                    setErrorSubmit("error");

                } else {
                    axios.put(`http://localhost:3010/users/modify/${newUser.email}`, input)
                        .then((res) => console.log(res))
                        .catch((err) => console.log(err));

                    window.location.reload();
                };

            } else {
                setErrorSubmit("error");
            }

        };


        // #13 58.78 src/Components/Profile.js
        // ﻿#13 58.78   Line 172:17:  'errorBirthday' is already defined            no-redeclare
        // ﻿#13 58.78   Line 173:17:  'errorBsuccessful' is already defined         no-redeclare
        // ﻿#13 58.78   Line 181:17:  'errorNTsuccessful' is already defined        no-redeclare
        // ﻿#13 58.78   Line 182:17:  'errorNation' is already defined              no-redeclare
        // var errorBirthday = "error";
        // var errorBsuccessful = "";

        // if (input.date_birth.length >= 8) {
        //     var errorBirthday = "";
        //     var errorBsuccessful = "error";
        // };


        // var errorNTsuccessful = "";
        // var errorNation = "error";

        // if (input.nationality) {
        //     var errorNTsuccessful = "error";
        //     var errorNation = "";
        // };


        var errorName = "";
        var errorNsuccessful = "";

        if (input.first_name.length > 0 && input.first_name.length < 3) {
            errorName = "error"
        };

        if (input.first_name.length >= 3) {
            errorNsuccessful = "error"
        };



        var errorLastName = "";
        var errorLNsuccessful = "";

        if (input.last_name.length > 0 && input.last_name.length < 3) {
            errorLastName = "error"
        };

        if (input.last_name.length >= 3) {
            errorLNsuccessful = "error"
        };



        var errorMobile = "";
        var errorMsuccessful = "";

        if (input.mobile.length > 0 && input.mobile.length < 10 && isNaN(input.mobile)) {
            errorMobile = "error"
        } else {

            if (input.mobile.length >= 10 && !isNaN(input.mobile)) {
                errorMsuccessful = "error"
            } else {
                errorMobile = "error"
            }

        };



        return (

            <div>

                <Box
                    borderWidth="1px"
                    rounded="lg"
                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                    maxWidth={400}
                    p={6}
                    m="10px auto"
                    as="form"
                >

                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src={newUser.image}
                                alt='User Image'
                                borderRadius='lg'
                                maxWidth={200}
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>User Information</Heading>
                                <Text>
                                    First_name: {newUser.first_name}
                                </Text>
                                <Text>
                                    Last_name: {newUser.last_name}
                                </Text>
                                <Text>
                                    Email: {newUser.email}
                                </Text>
                                <Text>
                                    Nationality: {newUser.nationality}
                                </Text>
                                <Text>
                                    Date_birth: {newUser.date_birth}
                                </Text>
                                <Text>
                                    Mobile: {newUser.mobile}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                    </Card>

                    <br></br>

                    <Stack>

                        <Button onClick={HandleModify}>Modify</Button>

                    </Stack>

                    {buttonModify ?

                        <div>

                            <FormControl>

                                <FormLabel>Name</FormLabel>
                                <Input type='text' value={input.first_name} name="first_name" onChange={handleInputChange} borderWidth='3px' />
                                {!errorName && !errorNsuccessful ? (
                                    <FormHelperText>
                                        Complete Name.
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage></FormErrorMessage>
                                )}
                                {errorName && !errorNsuccessful ? (
                                    <FormHelperText color="blue">
                                        Error: Name should have 3 letters.
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage></FormErrorMessage>
                                )}
                                {errorNsuccessful ? (
                                    <FormHelperText color="red" className="letter" fontWeight='bold'>
                                        Successful
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage></FormErrorMessage>
                                )}

                                <FormLabel>Last Name</FormLabel>
                                <Input type='text' value={input.last_name} name="last_name" onChange={handleInputChange} borderWidth='3px' />
                                {!errorLastName && !errorLNsuccessful ? (
                                    <FormHelperText>
                                        Complete Last Name.
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage></FormErrorMessage>
                                )}
                                {errorLastName && !errorLNsuccessful ? (
                                    <FormHelperText color="blue">
                                        Error: Last Name should have 3 letters.
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage></FormErrorMessage>
                                )}
                                {errorLNsuccessful ? (
                                    <FormHelperText color="red" className="letter" fontWeight='bold'>
                                        Successful
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage></FormErrorMessage>
                                )}

                                <FormControl>

                                    <FormLabel>Mobile</FormLabel>
                                    <Input type='text' value={input.mobile} name="mobile" onChange={handleInputChange} borderWidth='3px' />
                                    {!errorMobile && !errorMsuccessful ? (
                                        <FormHelperText>
                                            Complete Mobile.
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage></FormErrorMessage>
                                    )}
                                    {errorMobile && !errorMsuccessful ? (
                                        <FormHelperText color="blue">
                                            Error: Mobile should have 10 numbers.
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage></FormErrorMessage>
                                    )}
                                    {errorMsuccessful ? (
                                        <FormHelperText color="red" className="letter" fontWeight='bold'>
                                            Successful
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage></FormErrorMessage>
                                    )}
                                </FormControl>

                            </FormControl>

                            <div>

                                <FormLabel>Birthday</FormLabel>

                                <Select placeholder='day' id="select-day" name="date_birth" onChange={handleBirthdayChange} borderWidth='3px' maxW='sm'>
                                    {DayArray && DayArray.map((d) => {
                                        return (
                                            <option> {d} </option>
                                        )
                                    })}
                                </Select>

                                <Select placeholder='month' id="select-month" name="date_birth" onChange={handleBirthdayChange} borderWidth='3px' maxW='sm'>
                                    {MonthArray && MonthArray.map((m) => {
                                        return (
                                            <option> {m} </option>
                                        )
                                    })}
                                </Select>

                                <Select placeholder='year' id="select-year" name="date_birth" onChange={handleBirthdayChange} borderWidth='3px' maxW='sm'>
                                    {YearArray && YearArray.map((y) => {
                                        return (
                                            <option> {y} </option>
                                        )
                                    })}
                                </Select>

                            </div>

                            <div>

                                {/* <FormControl>

                                    {errorBirthday && !errorBsuccessful ? (
                                        <FormHelperText>
                                            Complete Birthday.
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage></FormErrorMessage>
                                    )}
                                    {!errorBirthday && errorBsuccessful ? (
                                        <FormHelperText color="red" className="letter" fontWeight='bold'>
                                            Successful
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage></FormErrorMessage>
                                    )}

                                </FormControl> */}

                            </div>

                            <div>

                                <FormLabel>Nationality</FormLabel>

                                <Select placeholder='Select option' id="select-nation" name="nationality" value={input.nationality} onChange={handleInputChange} borderWidth='3px'>
                                    {PaisesArray && PaisesArray.map((p) => {
                                        return (
                                            <option> {p} </option>
                                        )
                                    })}
                                </Select>

                            </div>

                            <div>

                                {/* <FormControl>

                                    {errorNation && !errorNTsuccessful ? (
                                        <FormHelperText>
                                            Complete Nationality.
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage></FormErrorMessage>
                                    )}
                                    {!errorNation && errorNTsuccessful ? (
                                        <FormHelperText color="red" className="letter" fontWeight='bold'>
                                            Successful
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage></FormErrorMessage>
                                    )}

                                </FormControl> */}

                            </div>

                            <br></br>

                            <Stack>

                                <Button onClick={HandleModify}>Return</Button>

                                <Button colorScheme="teal" variant="solid"
                                    onClick={SubmitModifyUser}
                                >
                                    Submit
                                </Button>

                            </Stack>

                            {errorSubmit ?

                                <div>

                                    <Alert status='error'>
                                        <AlertIcon />
                                        Missing send mandatory data
                                    </Alert>

                                </div>

                                :

                                <div></div>

                            }

                        </div>

                        :

                        <div></div>

                    }

                </Box >

            </div>

        );

    }

};

export default Profile;
