import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Maurício Saciloto</Text>
          <Text color="gray.300" fontSize="small">
            mauriciosaciloto@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Mauricio Saciloto"
        src="https://github.com/saciloto.png"
      />
    </Flex>
  );
}
