import { Box, Heading, Link, Text, Button } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Heading fontWeight="900">Hi people</Heading>
    <Text fontSize="xl" my={5}>
      Welcome to your new Gatsby site.
      <Button colorScheme="brand">Button</Button>
    </Text>
    <Text fontSize="xl" my={5} >
      Now go build something great.
    </Text>
    <Box  as="div" color="white" maxWidth="300px" marginBottom="1.45rem">
      twest
    </Box>
    <Link
      as={GatsbyLink}
      to="/page-2/"
      colorScheme="teal"

    > 
      Go to page 2
    </Link>
    <br />
    <Link
      as={GatsbyLink}
      fontSize="xl"
      to="/using-typescript/"
    >
      Go to "Using TypeScript"
    </Link>
  </>
)

export default IndexPage
