import { Box, Flex } from "@chakra-ui/react";
import { colors } from 'src/../styles/colors';

function TopBar() {
  return (
    <Flex bgColor={colors.bg.color2}
    color={colors.text.color1}
    borderBottom={`1px solid ${colors.border.color1}`}
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
      </Flex>
    </Flex>
  )
}

export default TopBar;
