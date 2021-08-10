import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean
}

export default function Proffile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Brian Pontes</Text>
          <Text color="gray.300" fontSize="small">
            brian.robert16@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Brian Pontes" src="https://media-exp1.licdn.com/dms/image/C4D03AQGeua0hMAmM8w/profile-displayphoto-shrink_800_800/0/1612809206196?e=1634169600&v=beta&t=pBXmXJ1q3-BTUYAZKmC8LNcRMtju67AUjgDWn7othSs" /> 
    </Flex>
  )
}
