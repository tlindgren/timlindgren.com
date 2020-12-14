import React from "react"
import { Flexbox, Box } from '@chakra-ui/react'

export const Pagetitle= ({ icon, heading, ...props }) => (
    <Flexbox
      rounded="lg"
      position="relative"
      alignItems="center"
      flexDirection="row"
      borderStyle="solid"
      borderColor="lightgray"
      {...props}
     > 
      <Flexbox justifyContent="center" bg="muted" rounded="full" size="20" backgroundColor="primary" >
        <Icon name={icon} size="20px|25px|35px" color="contrasttext"/> 
      </Flexbox>
      <Box flex="1" mt="6|0" ml="2|6">
        <Heading as="h1" fontSize="5xl" color="primary" textTransform="uppercase" fontWeight="extrabold">
          {heading}
        </Heading>
      </Box>
      </Flexbox>
  )