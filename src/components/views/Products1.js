import React, { useState, useCallback, useEffect } from "react";

import {
    Grid,
    GridItem,
    Box,
    Wrap,
    WrapItem,
    Flex,
    Center,
    VStack
} from "@chakra-ui/react";

import Item from "../main/Item.js";

class Products1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    
    componentDidMount() {
        let newItems = [];
        for (var i = 0; i < 10; i++) {
            const obj = {
                imageUrl: 'https://bit.ly/2Z4KKcF',
                imageAlt: 'Rear view of modern home with pool',
                beds: 3,
                baths: 2,
                title: 'Modern home in city center in the heart of historic Los Angeles',
                formattedPrice: '$1,900.00',
                reviewCount: 34,
                rating: 4,
            };
            newItems.push(obj);
        }
        this.setState({
            items: newItems
        });
    }

    getItems() {
        console.log(this.state.items);

        let content = [];
        let i = 0;
        for (let item of this.state.items) {
            i++;
            content.push(
                (<Center>
                    <WrapItem>
                        <Item property={item} key={i} />
                    </WrapItem>
                </Center>)
            );
        }
        return content;
    }

    render() {
        return (
            <VStack>
                <h1>Products</h1>
                <Flex
                    justifyContent="center"
                >   
                    <Wrap
                        justifyContent="center"
                        margin="auto"
                    >
                        {this.getItems()}
                    </Wrap>
                </Flex>
            </VStack>
        );
    };
}

export default Products1;