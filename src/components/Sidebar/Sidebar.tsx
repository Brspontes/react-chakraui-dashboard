import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export default function Sidebar() {
  return (
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
            <Stack spacing="4" marginTop="8" align="stretch">
              <Link display="flex" align="center" color="pink.400">
                <Icon as={RiDashboardLine} fontSize="20"/>
                <Text marginLeft="4" fontWeight="medium">Dashboard</Text>
              </Link>
              <Link display="flex" align="center" color="pink.400">
                <Icon as={RiContactsLine} fontSize="20"/>
                <Text marginLeft="4" fontWeight="medium">Usuários</Text>
              </Link>
            </Stack>
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
            <Stack spacing="4" marginTop="8" align="stretch">
              <Link display="flex" align="center" color="pink.400">
                <Icon as={RiInputMethodLine} fontSize="20"/>
                <Text marginLeft="4" fontWeight="medium">Formulários</Text>
              </Link>
              <Link display="flex" align="center" color="pink.400">
                <Icon as={RiGitMergeLine} fontSize="20"/>
                <Text marginLeft="4" fontWeight="medium">Automação</Text>
              </Link>
            </Stack>
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}
