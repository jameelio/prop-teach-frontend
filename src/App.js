import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  VStack,
} from '@chakra-ui/react';

import PropertyCard from "./components/PropertyCard"

function App() {
  return (
    <ChakraProvider theme={theme}>

      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <PropertyCard />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
