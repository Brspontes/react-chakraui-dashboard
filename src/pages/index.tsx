import { Input } from '../components/Form/Input'
import { Flex, Button, Stack, } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type SingInFormData = {
  email: string
  password: string
}

const SingInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória")
})

export default function Home() {

  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(SingInFormSchema)})
  const { errors } = formState

  const handleSingIn: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Flex width="100vw" height="100vh" alignItems="center" justifyContent="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSingIn)}>
        <Stack spacing="4">
          <Input name="email" errorMessage={errors.email} type="email" label="E-mail" {...register("email")}></Input>
          <Input name="password" errorMessage={errors.password} type="password" label="Senha" {...register("password")}></Input>
        </Stack>
        <Button type="submit" marginTop="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
