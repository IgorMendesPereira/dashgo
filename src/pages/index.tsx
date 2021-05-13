import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

type SignInFormData ={
  email:string,
  password: string,
}

export default function SignIn() {
  const { register, handleSubmit } = useForm()


  //const { erros } = formState

  const handleSignIn: SubmitHandler <SignInFormData> = (values) =>{
    console.log("pai", values)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        background="gray.800"
        padding="8" //medida propria do chakraUI -   = 2rem = 32px
        borderRadius="8px"
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" {...register('email')}/>

          <Input name="password" type ="password" label="Password" {...register('password')}/>
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
