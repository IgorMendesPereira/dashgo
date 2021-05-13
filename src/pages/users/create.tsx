import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
    return (
        <Box>
            <Header />
            <Flex width="100%" my="6" maxWidth="1480px" mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius="8px" backgroundColor="gray.800" padding={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">
                        Criar Usuário
                   </Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">{/*  ALinhar os Inputs */}
                            <Input name="name" label="Nome Completo" />
                            <Input name="email" label="Email" type="email" />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">{/*  ALinhar os Inputs */}
                            <Input name="password" type="password" label="Senha" />
                            <Input name="password_confirmation" label="Confirmação da Senha" type="password" />
                        </SimpleGrid>
                    </VStack>
                    <Flex marginTop="8" justify="flex-end"> {/* Jogar o conteudo tudo pra direita*/}
                        <HStack spacing="4"> {/* Espaçamento entre os botões*/}
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                                <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}