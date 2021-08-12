import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup'
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import Link from "next/link"
import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirm: string
}

const CreateUserFormDataSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória").min(6, 'Minimo de 6 caracteres'),
  password_confirm: yup.string().oneOf([null, yup.ref('password')], 'Confirmação de senha precisa ser igual')
})

export default function CreateUser() {

  const handleCreateSubmit: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(CreateUserFormDataSchema)})
  const { errors } = formState

  return (
    <Box>
      <Header />
      <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" padding="6">
        <Sidebar />
        <Box as="form" onSubmit={handleSubmit(handleCreateSubmit)} flex="1" borderRadius={8} backgroundColor="gray.800" padding={["6","8"]}>
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
          <Divider marginY="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} width="100%">
              <Input name="name" label="Nome Completo" {...register("name")} errorMessage={errors.name} />
              <Input name="email" label="E-mail" type="email" {...register("email")} errorMessage={errors.email} />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} width="100%">
              <Input name="password" label="Senha" type="password" {...register("password")} errorMessage={errors.password} />
              <Input name="password_confirm" label="Confirmação de senha" type="password" 
              {...register("password_confirm")} errorMessage={errors.password_confirm} />
            </SimpleGrid>
          </VStack>
          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
