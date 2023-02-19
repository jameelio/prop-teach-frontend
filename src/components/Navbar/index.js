import React, { useEffect, useState } from 'react';
import { Box, Container } from '@chakra-ui/react'
import { Placeholder } from '../Placeholder'
import { SearchBox } from '../Search'

export const Navbar = () => {
    return (
        <Box
            as="nav"
            role="navigation"
            position="fixed"
            backgroundColor="blue.100"
            backdropFilter="saturate(180%) blur(5px)"
            w="100%">
            <Container>
                <Placeholder>NMav</Placeholder>
                {/* <SearchBox /> */}
            </Container>
        </Box>
    )
}