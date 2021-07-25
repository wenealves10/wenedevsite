import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';

function TopBar() {

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('#FFFFFF', '#1A202C');
  const color = useColorModeValue('#1A202C', '#EDEEEE');
  const borderColor = useColorModeValue('#DDD', '#27272A');

  return (
    <Flex bgColor={bg}
    color={color}
    borderBottom={`1px solid ${borderColor}`}
    w="full"
    position="fixed"
    zIndex={999}>
      <Flex
      alignItems="center"
      justifyContent="space-between"
      w="full"
      maxW="1200px"
      margin="0 auto"
      h="60px"
      px={[4,8]}
      >
        <Box>
          WeneDevSite
        </Box>
        <Box>
          Login
        </Box>
        {colorMode === 'light' ? (
          <MoonIcon w={6} h={6}  onClick={toggleColorMode}/>
        ): (
          <SunIcon w={6} h={6} onClick={toggleColorMode}/>
        )}
      </Flex>
    </Flex>
  )
}

export default TopBar;
