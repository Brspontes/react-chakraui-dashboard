import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import Link from "next/link"

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" padding="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} backgroundColor="gray.800" padding={["6","8"]}>
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
          <Divider marginY="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} width="100%">
              <Input name="name" label="Nome Completo" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} width="100%">
              <Input name="password" label="Senha" type="password" />
              <Input name="password confirm" label="Confirmação de senha" type="password" />
            </SimpleGrid>
          </VStack>
          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
