import {
    Box,
    Input,
    FormControl,
    Select,
    InputGroup,
    InputLeftElement,
    Button,
    Flex,
} from '@chakra-ui/react'
import { useState } from 'react';


export const SearchBox = ({ onPropTypeSelect, searchProperty, isLoading, isSearchLoading }) => {
    const [searchDetails, setSearchDetails] = useState()
    const [listingType, setListingType] = useState('')

    const search = () => {
        searchProperty({ searchDetails, listingType })
    }

    return <Box
        width={'full'}
        borderWidth={'unset'}
        direction={'row'}
        display={{ md: 'flex' }}
        border={1}
        marginTop={'unset'}
        mt="20"
        justifyContent={'space-evenly'}
    >

        <Flex
            flex={1}
            direction={'row'}
            flexWrap='wrap'
            justifyContent={'space-evenly'}
        >
            <Box>
                <Flex
                    width={'100%'}
                    height={'50px'}
                    alignItems={'center'}
                >
                    <Flex padding={'0.1rem'}>
                        <FormControl>
                            <Select
                                placeholder='Sale Type'
                                size={'lg'}
                                onChange={(e) => setListingType(e.target.value)}>
                                <option value={'rent'}> For Rent</option>
                                <option value={'sale'}> For Sale</option>
                            </Select>
                        </FormControl>

                    </Flex>

                    <Flex padding={'0.1rem'}
                    >
                        <Box>
                            <InputGroup
                                border={2}>
                                <Input placeholder={'Search City,Suburb'} size="lg" variant='outline' onChange={(e) => setSearchDetails(e.target.value)} />
                            </InputGroup>
                        </Box>
                    </Flex>

                    <Flex padding={'0.1rem'}>
                        <Button
                            size={'lg'}
                            colorScheme='teal'
                            variant='outline'
                            isLoading={isSearchLoading}
                            isDisabled={isLoading || isSearchLoading}
                            onClick={search}>
                            Search
                        </Button>
                    </Flex>
                    {/* <Flex
                    borderWidth={1}
                    borderColor={'orange'}
                >

                    <Box
                        borderWidth={1}
                        borderColor={'orange'}>
                        box
                    </Box>
                </Flex> */}

                </Flex>
            </Box>

            <Box>
                <Flex
                    width={'100%'}
                    height={'50px'}
                    alignItems={'center'}

                >
                    <Flex
                        padding={'0.1rem'}>
                        <FormControl>

                            <Select
                                placeholder='Parking'
                                size={'lg'}
                                onChange={(e) => onPropTypeSelect('park', e.target.value)}>
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>

                            </Select>
                        </FormControl>

                    </Flex>
                    <Flex
                        padding={'0.1rem'}>
                        <FormControl>

                            <Select placeholder='Bedrooms' size={'lg'} onChange={(e) => onPropTypeSelect('bed', e.target.value)}>
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </Select>
                        </FormControl>

                    </Flex>
                    <Flex
                        padding={'0.1rem'}>
                        <FormControl>

                            <Select placeholder='Bathrooms' size={'lg'} onChange={(e) => onPropTypeSelect('bath', e.target.value)}>
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </Select>
                        </FormControl>

                    </Flex>
                </Flex>

            </Box>
        </Flex>

    </Box>
}