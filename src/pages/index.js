import React from "react"
import { Box, Container, Text } from '@chakra-ui/react'

const IndexPage = () => (
  <>
    <Box as="section" pt="6|10|10|12" pb="0"  >
     <Container maxW="xl" centerContent>
     <Text fontSize="4xl" fontWeight="semibold" color="primary" m="0">
       experiments in</Text>
       <Text fontSize="5xl" fontWeight="extrabold" color="blue" m="0">
      learning + designing + thinking + living  </Text>
    </Container>
   </Box>
    
  </>
)

export default IndexPage
