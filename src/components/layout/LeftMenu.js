import React, { useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Menu,
    MenuList,
    MenuItem,
    Box
} from "@chakra-ui/react";
import {
    HamburgerIcon,
} from "@chakra-ui/icons";

import {
    FaHome,
    FaInfo,
    FaCoffee,
    FaLeaf,
    FaPhone
} from "react-icons/fa";
import "./LeftMenu.css";

const LeftMenu = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Button ref={btnRef} colorScheme="green.300" onClick={onOpen}>
                <HamburgerIcon className="menu-button" />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader backgroundColor="green.300">HalHaat</DrawerHeader>

                    <DrawerBody
                        backgroundColor="green.300"
                    >
                        <Menu
                            defaultIsOpen={true}
                            isOpen={true}
                        >
                            <MenuList
                                backgroundColor="#ffffff00"
                                borderColor="#ffffff00"
                                width="320px"
                                marginTop="25%"
                                className="menu-list"
                            >
                                    <NavLink to="/">
                                        <MenuItem icon={<FaHome />} >
                                            Home
                                        </MenuItem>
                                    </NavLink>
                                    <NavLink to="/about">
                                        <MenuItem icon={<FaInfo />} >
                                            About
                                        </MenuItem>
                                    </NavLink>
                                    <NavLink to="/products">
                                        <MenuItem icon={<FaCoffee />} >
                                            Product Class 1
                                        </MenuItem>
                                    </NavLink>
                                    <MenuItem icon={<FaLeaf />} >
                                    Product Class 2
                                    </MenuItem>
                                    <MenuItem icon={<FaPhone />} >
                                    Contact
                                    </MenuItem>
                            </MenuList>
                        </Menu>
                    </DrawerBody>

                    <DrawerFooter
                        justifyContent="center"
                    >
                        (C) HalHaat 2022
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Box justifyContent="center">
                <h1 className="headline"><b>HalHaat - The Haat of Haldia</b></h1>
            </Box>
        </>
    )
};

export default LeftMenu;