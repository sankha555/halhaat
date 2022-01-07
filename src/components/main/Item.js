import React, { useState, useCallback, useEffect } from "react";

import {
    Grid,
    GridItem,
    Box,
    Wrap,
    WrapItem,
    Flex,
    Center,
    Image,
    Badge,
    Input,
    HStack,
    Button,
    useNumberInput,
    NumberInputField,
    NumberInput,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Stack
} from "@chakra-ui/react";

import {
    StarIcon
} from "@chakra-ui/icons";

function HookUsage() {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: 6,
        precision: 2,
    })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })

    return (
        <HStack maxW='320px'>
            <Button {...inc}>+</Button>
            <Input {...input} />
            <Button {...dec}>-</Button>
        </HStack>
    )
}

class Item extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0,
        }
    }

    body() {
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <img src={this.props.property.imageUrl} alt={this.props.property.imageAlt} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {this.props.property.beds} beds &bull; {this.props.property.baths} baths
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {this.props.property.title}
                </Box>

                <Box>
                    {this.props.property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < this.props.property.rating ? 'teal.500' : 'gray.300'}
                            />
                        ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {this.props.property.reviewCount} reviews
                    </Box>
                </Box>

                <Stack shouldWrapChildren direction='row'>
                    <NumberInput size='md' maxW={24} defaultValue={15} min={10}>
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Stack>
            </Box>
        </Box>
    }
    

    render() {
        return (
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <img src={this.props.property.imageUrl} alt={this.props.property.imageAlt} />

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                        </Badge>
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                        >
                            {this.props.property.beds} beds &bull; {this.props.property.baths} baths
                        </Box>
                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                    >
                        {this.props.property.title}
                    </Box>

                    <Box>
                        {this.props.property.formattedPrice}
                        <Box as='span' color='gray.600' fontSize='sm'>
                            / wk
                        </Box>
                    </Box>

                    <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < this.props.property.rating ? 'teal.500' : 'gray.300'}
                                />
                            ))}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            {this.props.property.reviewCount} reviews
                        </Box>

                        <Stack shouldWrapChildren direction='row' ml='auto'>
                            <NumberInput size='md' maxW={24} defaultValue={15} min={10}>
                                <NumberInputField />
                                <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </Stack>
                    </Box>

                    
                </Box>
            </Box>
        );
    }
}

export default Item;