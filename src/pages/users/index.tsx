import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Td, Th, Checkbox, Tbody, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar";
import Pagination from "../../components/Pagination";
import Link from 'next/link'

export default function UserList() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />
      <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" padding="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} backgroundColor="gray.800" padding="8">
          <Flex marginBottom="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href='/users/create' passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                Criar Novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX={["4","4","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && (
                  <Th>Data de cadastro</Th>
                )}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" >Brian Pontes</Text>
                    <Text fontSize="small" color="gray.300" >brian.robert16@hotmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>
                    05 de Agosto, 2021
                  </Td>
                )}
                <Td>
                  {isWideVersion ? 
                    (
                      <Button as="a" size="sm" fontSize="sm" colorScheme="orange" leftIcon={<Icon as={RiPencilLine}  fontSize="20"/>}>
                        Editar
                      </Button>
                    ) 
                    : 
                    (
                      <Button as="a" size="sm" fontSize="sm" colorScheme="orange" iconSpacing="0.5" leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}>
                      </Button>
                    )
                  }
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
