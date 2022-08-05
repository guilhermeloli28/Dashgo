import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Guilherme Loli</Text>
          <Text color='gray.300' fontSize='small'>
            engguilhermeloli@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size='md' name='guilherme loli' />
    </Flex>
  );
}
