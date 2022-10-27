"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { FC, PropsWithChildren } from "react"

export const Provider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <ChakraProvider>
    {children}
  </ChakraProvider>
}