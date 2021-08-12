import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { DeepMap, FieldValues, FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  errorMessage: DeepMap<FieldValues, FieldError>
}

const InputBase:ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label,  errorMessage, ...rest }, ref) => {
  console.log(errorMessage)
  return (
    <FormControl isInvalid={!!errorMessage}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraInput id={name} name={name} focusBorderColor="pink.500" bgColor="gray.900" 
        variant="filled" _hover={{ bgColor: "gray.900" }} size="lg" {...rest} ref={ref}/>
        {!!errorMessage?.message && (
          <FormErrorMessage>
            {errorMessage?.message}
          </FormErrorMessage>
        )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
