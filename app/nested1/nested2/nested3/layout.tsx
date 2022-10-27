
"use client"
import { Box, Heading } from "@chakra-ui/react"

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return <Box bg="blackAlpha.100" p={2}>
    <Heading>nested3 layout</Heading>
    {children}
  </Box>
}