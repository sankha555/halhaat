import React, { useState, useCallback, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router, withRouter } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Home from "../views/Home.js";
import About from "../views/About.js";
import Products1 from "../views/Products1.js";

const MainWindow = (props) => {
    return (
        <Box
            padding="10px 20px"
            display="flex"
            justifyContent="center"
        >
            <Switch>
                <Route exact path="/" component={withRouter(Home)} />
                <Route exact path="/about" component={withRouter(About)} />
                <Route exact path="/products" component={withRouter(Products1)} />
            </Switch>
        </Box>
    )
};

export default MainWindow;