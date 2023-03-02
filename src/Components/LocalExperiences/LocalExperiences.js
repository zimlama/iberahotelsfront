// #13 76.10 src/Components/LocalExperiences/LocalExperiences.js
// ﻿#13 76.10   Line 1:28:  'useState' is defined but never used  no-unused-vars
// ﻿#13 76.10   Line 4:10:  'Box' is defined but never used       no-unused-vars
// import React, { useEffect, useState } from "react";
// import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardActivities from "../CardActivities/CardActivities.js";

import { getServices } from "../../Redux/actions/services";

function LocalExperiences() {
    const dispatch = useDispatch();

    const activities = useSelector((state) => state.services);

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);

    console.log(activities);

    if (activities.length > 1) {

        return (
            <div>
                {activities.length > 1 && activities.map((activitie) => {
                    return (
                        <CardActivities
                            name={activitie.name}
                            description={activitie.description}
                            image={activitie.image}
                            price={activitie.price}
                        />
                    );
                })}
            </div>
        );

    } else {

        return (

            <div>Loading...</div>

        )

    };

};


export default LocalExperiences;