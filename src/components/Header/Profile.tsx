import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({showProfileData = true}: ProfileProps){
    return(
        <Flex align="center">
          {showProfileData && (
             <Box marginRight="4" textAlign="right">
             <Text>
               Igor Mendes Pereira
             </Text>
             <Text color="gray.300">
               igor_mendes_pereira@outlook.com
             </Text>
           </Box>
          )}
        <Avatar size="md" name="Igor Mendes" src="https://github.com/IgorMendesPereira.png"/>
      </Flex>
    );
}