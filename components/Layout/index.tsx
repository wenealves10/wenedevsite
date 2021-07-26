import { IProps } from 'src/../interfaces/props.dto';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import TopBar from '../TopBar';

function Layout({ children }: IProps){

  const bgColor = useColorModeValue('#F4F6F8', '#1A202C');

  return (
     <Box bgColor={bgColor} minH="100vh">
       <TopBar/>
       <Flex flexDirection="column" pt={'62px'}>
         {children}
       </Flex>
     </Box>
  );
}

export default Layout;
