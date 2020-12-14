import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Heading>Page Not Found</Heading>
    <Text fontSize="xl" my={5}>
      Sorry, a page at this address doesn't exist. 
    </Text>
  </>
)

export default NotFoundPage
