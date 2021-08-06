import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import NotificationsNav from "../NotificationNav";

export default function Proffile() {
  return (
    <Flex align="center">
      <Box marginRight="4" textAlign="right">
        <Text>Brian Pontes</Text>
        <Text color="gray.300" fontSize="small">
          brian.robert16@hotmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Brian Pontes" /> 
    </Flex>
  )
}
