import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Td, Th, Checkbox, Tbody, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar";
import Pagination from "../../components/Pagination";
import Link from 'next/link'
import { useUsers } from "../../services/hooks/useUsers";


export default function UserList() {

  const { data, isLoading, isFetching, error } = useUsers()

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
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" marginLeft="4" />}
            </Heading>
            <Link href='/users/create' passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                Criar Novo
              </Button>
            </Link>
          </Flex>
          {isLoading ?(
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : 
          error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuáriuos</Text>
            </Flex>
          ) :
          (
            <>
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
                  {data.map(user => {
                    return (
                      <Tr key={user.id}>
                      <Td paddingX="6">
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold" >{user.name}</Text>
                          <Text fontSize="small" color="gray.300" >{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && (
                        <Td>
                          {user.createdAt}
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
                    )
                  })}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
