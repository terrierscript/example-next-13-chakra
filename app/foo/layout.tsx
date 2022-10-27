"use client"
import { Box, Heading } from "@chakra-ui/react"

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return <Box>
    <Heading>foo layout</Heading>
    {children}
  </Box>
}