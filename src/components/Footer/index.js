import { Box, Container } from '@chakra-ui/react'
import { Placeholder } from '../Placeholder'

export const Footer = (props) => {
    return (
        <Box
            as="footer"
            role="contentinfo"
            position='fixed'
            bottom={0}
            // backgroundColor="red.100"
            backdropFilter="saturate(180%) blur(5px)"
            w="100%"
            height={'3.5rem'}
            {...props}>
            <Container>
                {/* <Placeholder minH="20">Footer</Placeholder> */}
            </Container>
        </Box>
    )
}