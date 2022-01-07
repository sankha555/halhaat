import React, { useState, useCallback, useEffect } from "react";

import {
    Grid,
    GridItem,
    Box
} from "@chakra-ui/react";

import "./Home.css";

const Home = (props) => {
    return (
        <Grid
            className="grid"
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
            >
            <GridItem rowSpan={2} colSpan={1} bg='tomato' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={2} bg='blue.300'>
                <Box display="flex" borderBottom={50} borderColor="tomato">
                    <img src={require("../../images/riverside.jpeg")}
                        alt="riverside"
                        width="100%"
                    />
                </Box>
            </GridItem>
            <GridItem colSpan={4} bg='tomato' />
        </Grid>
    )
};

export default Home;