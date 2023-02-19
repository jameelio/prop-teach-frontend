import React from 'react';
import {
    Avatar,
    Badge,
    Flex,
    Icon,
    Image,
    Text,
    Box,
    Spinner,
    Heading
} from "@chakra-ui/react";


import { FaBath, FaCar, FaHome, FaAsterisk } from 'react-icons/fa';

function PropertyCard({ data, isFetching }) {
    if (isFetching) {
        return (
            <Flex
                direction={'row'}
                flexWrap='wrap'
                marginTop={'unset'}
                borderWidth={'unset'}
                mt="20"
                borderColor={'#e2e8f000'}
                justifyContent={'center'}
            >
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                /></Flex>
        )
    }

    return (
        <Flex
            direction={'row'}
            flexWrap='wrap'
            marginTop={'unset'}
            borderWidth={'unset'}
            mt="20"
            borderColor={'#e2e8f000'}
            justifyContent={'center'}
            sx={{
                '&::-webkit-scrollbar': {
                    width: '1px',
                    borderRadius: '1px',
                    backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
            }}>

            {data.length ? <>
                {data.map((prop, index) =>
                    <Box
                        maxW='sm'
                        overflow='hidden'
                        width={'20rem'}
                        p={4}
                        display={{ md: "flex" }}
                        maxWidth="32rem"
                        margin={2}
                        key={index}
                        boxShadow={'lg'}>
                        <Flex
                            borderRadius='20px'
                            p='20px'
                            h='400px'
                            w={{ base: "315px", md: "400px" }}
                            alignItems='center'
                            direction='column'
                            key={index}
                            boxSize='content-box'>
                            <Flex w='100%' mb='18px' key={index}>
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
                                borderRadius='10px'
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
                                        {prop.unit.bedrooms}
                                    </Text>
                                </Flex>
                                <Flex me='25px'>
                                    <Icon as={FaBath} color='grey.100' />
                                    <Text fontSize='sm' my='auto' fontWeight='500'>
                                        {prop.unit.bathrooms}
                                    </Text>
                                </Flex>
                                <Flex>
                                    <Icon as={FaCar} color='grey.100' />
                                    <Text fontSize='sm' my='auto' fontWeight='500'>
                                        {prop.unit.parking}
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
            </> :
                <Box textAlign="center" py={10} px={6}>
                    <Box display="inline-block">
                        <Flex
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            bg={'red.500'}
                            rounded={'50px'}
                            w={'55px'}
                            h={'55px'}
                            textAlign="center">
                            <FaAsterisk color={'white'} />
                        </Flex>
                    </Box>
                    <Heading as="h2" size="xl" mt={6} mb={2}>
                        No Properties Found
                    </Heading>
                    <Text color={'gray.500'}>
                        Update search filters and try again.
                    </Text>
                </Box>}
        </Flex>
    );
}

export default PropertyCard;