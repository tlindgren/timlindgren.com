import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import React from "react"

export default function ThemeToggle() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon)

  return (
    <IconButton
      icon={<ToggleIcon />}
      variant="ghost"
      color="white"
      bg="brand.800"
      aria-label="Toggle Theme"
      onClick={toggleMode}
    />
  )
}
