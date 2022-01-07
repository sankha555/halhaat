import React, { useState, useCallback, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/layout";

import LeftMenu from "./LeftMenu.js";
import MainWindow from "./MainWindow.js";

const Holder = (props) => {
    return (
        <Flex
            height="100vh"
            justifyContent="center"
        >
            <Box
                display="flex"
                width="100vw"
                height="100vh"
            >
                <Box
                    width="5%"
                    height="100vh"
                    backgroundColor="green.300"
                    backgroundAttachment="fixed"
                    position="fixed"
                >
                    <LeftMenu></LeftMenu>
                </Box>
                <Box
                    marginLeft="50px"
                    height="100vh"
                    padding="5px 20px"
                >
                    <MainWindow></MainWindow>
                </Box>
            </Box>
        </Flex>
    )
};

export default Holder;