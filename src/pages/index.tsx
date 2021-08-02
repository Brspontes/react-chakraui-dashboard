import { Input } from '../components/Form/Input'
import { Flex, Button, Stack, } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex width="100vw" height="100vh" alignItems="center" justifyContent="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail"></Input>
          <Input name="password" type="password" label="Senha"></Input>
        </Stack>
        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
