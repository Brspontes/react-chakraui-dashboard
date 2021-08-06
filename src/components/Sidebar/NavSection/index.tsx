import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "toasted-notes/node_modules/@types/react";

interface NavSectionProps {
  title: string,
  children: ReactNode
}

export default function NavSection ({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
        <Stack spacing="4" marginTop="8" align="stretch">
          {children}
        </Stack>
      </Text>
    </Box>  
  )
}
