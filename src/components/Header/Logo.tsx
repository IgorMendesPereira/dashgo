import { Text } from "@chakra-ui/react";

export function Logo(){
    return(
        <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        width="64"
      >
        Dashgo
              {/* todo text é um paragrafo, por isso jogar para span */}
        <Text as="span" marginLeft="1" color="pink.500">.</Text>

      </Text>
    )
}