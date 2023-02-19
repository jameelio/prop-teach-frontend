import React, { useState, useEffect } from "react";
import { Box } from '@chakra-ui/react';
import _ from 'lodash'

import PropertyCard from "../PropertyCard"
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { SearchBox } from '../Search'


const BACKEND_API = process.env.REACT_APP_BACKEND_API

export const Main = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const [isSearchLoading, setIsSearchLoading] = useState(false)

    const [propertySelected, setPropertySelected] = useState({ opt: '', filter: '' });

    const [searchFilters, setSearchFilters] = useState([])

    const fetchListings = async () => {
        try {
            setData([])
            setIsLoading(true)
            const response = await fetch(`${BACKEND_API}/listing/all`)
            setIsLoading(false)

            setData(await response.json())
        } catch (error) {
            setData([])
            setIsLoading(false)
        }
    }

    const advanceFetchListings = async ({ searchDetails, listingType, options } = { searchDetails: '', listingType: '', options: [] }) => {
        try {
            setData([])
            setIsLoading(true)
            const response = await fetch(`${BACKEND_API}/listing/advanceSearch?area=${searchDetails}&listingType=${listingType}&options=${options}`)
            setIsLoading(false)

            setData(await response.json())
        } catch (error) {
            setData([])
            setIsLoading(false)
        }
    }

    const filterData = ({ opt, filter }) => {
        if (opt && filter)
            return _.unionBy([{ opt, filter }], searchFilters, 'opt')

    }

    useEffect(() => {
        fetchListings()
    }, [])

    // eslint-disable-next-line
    useEffect(() => {
        if (propertySelected && propertySelected) {
            const opt = filterData(propertySelected)
            if (opt) {
                setSearchFilters(opt)
            }
        }
    }, [propertySelected])

    const searchProp = async (propertyDetails) => {
        setIsSearchLoading(true)
        // console.log({ ...propertyDetails, ...{ options: searchFilters } }, 'advance search')
        await advanceFetchListings({ ...propertyDetails, ...{ options: searchFilters } })
        setIsSearchLoading(false)
    }


    return (
        <Box flexDir={'column'} minHeight={'100vh'}>
            {/* <Navbar /> */}

            <Box>
                <SearchBox onPropTypeSelect={(e, d) => {
                    setPropertySelected({
                        opt: e,
                        filter: d
                    })
                }} searchProperty={searchProp} isLoading={isLoading} isSearchLoading={isSearchLoading} />
            </Box>
            <Box
                h='55rem'
                overflow='auto'>
                <PropertyCard data={data} isFetching={isLoading} />
            </Box>
            <Footer />
        </Box>
    )
}