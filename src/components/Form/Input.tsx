import { FormLabel, FormControl, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react'


interface InputProps extends ChakraInputProps {
    name:string,
    label?: string,
    error: FieldError,
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({name, label,error, ...rest}, ref) => {
    return(
      //o "!!" na frente do error, significa que se tiver error, vai ser true, senão recebe false
        <FormControl isInvalid ={!!error}>
        { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="pink.500"
          backgroundColor="gray.900"
          variant="filled"
          _hover={{
            backgroundColor: 'gray.900'
          }}
          size="lg"
          ref={ref}
          {...rest}
        />

          {!!error && (
            <FormErrorMessage>
              {error.message}
            </FormErrorMessage>
          )}
        </FormControl>

    );
}

export const Input = forwardRef(InputBase)