import React, { useEffect, useState } from 'react';
import {
    Avatar,
    Badge,
    Flex,
    Icon,
    Image,
    Text,
    Box,
    SkeletonCircle,
    SkeletonText

} from "@chakra-ui/react";

import { FaBath, FaCar, FaHome } from 'react-icons/fa';

const BACKEND_API = process.env.REACT_APP_BACKEND_API

function PropertyCard() {
    const [properties, setProperties] = useState([]);

    const [isLoading, setIsLoading] = useState(false)

    const [apiError, setApiError] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        console.log('url', `${BACKEND_API}/listing/all`)
        fetch(`${BACKEND_API}/listing/all`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                setProperties(response);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error)
                setApiError(true)
                setIsLoading(false);
            });
    }, [])

    return (
        <Flex direction={'row'} flexWrap='wrap'>
            {isLoading ?
                <Flex
                    height={100}>

                    {Array(3).fill().map(skeleton =>
                        <Box
                            borderRadius='20px'
                            p='20px'
                            h='400px'
                            w={{ base: "315px", md: "400px" }}
                            alignItems='center'
                            direction='column'>
                            <SkeletonCircle size='10' />
                            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                        </Box>
                    )}

                </Flex> : <></>}
            {!isLoading && properties.map(prop =>
                <Box
                    p={4}
                    display={{ md: "flex" }}
                    maxWidth="32rem"
                    borderWidth={1}
                    borderRadius='20px'
                    margin={2}>
                    <Flex
                        borderRadius='20px'
                        p='20px'
                        h='400px'
                        w={{ base: "315px", md: "400px" }}
                        alignItems='center'
                        direction='column'>
                        <Flex w='100%' mb='18px'>
                            <Text
                                my='auto'
                                fontWeight='600'
                                textAlign='center'
                                noOfLines={0}
                                me='auto'>
                                {prop.title}
                            </Text>
                        </Flex>
                        <Image
                            src={prop.images[0]}
                            maxW='100%'
                            width={"85%"}
                            borderRadius='20px'
                            mb='10px'
                        />

                        <Text
                            fontWeight='500'
                            textAlign='start'
                            fontSize='xl'
                            w='100%'>
                            R {prop.unit.price}
                        </Text>
                        <Flex mt='auto' justify='space-between' w='100%' align='center'>
                            <Badge
                                borderRadius='9px'
                                size='md'
                                colorScheme='green'
                                color='green.400'
                                textAlign='center'
                                display='flex'
                                justifyContent='center'
                                alignItems='center'>
                                Property Agent
                            </Badge>

                            <Avatar
                                size='xs'
                                name={prop.organisation.name}
                                src={prop.organisation.logoUrl} />

                        </Flex>
                        <Flex
                            mt='auto' justify='left' w='100%' align='center'
                        >
                            <Flex me='25px'>
                                <Icon as={FaHome} color='grey.100' />
                                <Text fontSize='sm' my='auto' fontWeight='500'>
                                    {prop.unit.bedrooms} Bedrooms
                                </Text>
                            </Flex>
                            <Flex me='25px'>
                                <Icon as={FaBath} color='grey.100' />
                                <Text fontSize='sm' my='auto' fontWeight='500'>
                                    {prop.unit.bathrooms} Bathrooms
                                </Text>
                            </Flex>
                            <Flex>
                                <Icon as={FaCar} color='grey.100' />
                                <Text fontSize='sm' my='auto' fontWeight='500'>
                                    {prop.unit.parking} Parking
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            my='auto'
                            fontWeight='600'
                            textAlign='center'
                            noOfLines={0}
                            me='auto'
                        >
                            <Text
                                fontWeight='200'
                                textAlign='start'
                                fontSize='sm'
                                noOfLines={2}
                                w='100%'>
                                {prop.description}
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            )}


        </Flex>

    );
}

export default PropertyCard;