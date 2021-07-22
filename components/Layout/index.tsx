import { IProps } from 'src/../interfaces/props.dto';
import { Box, Flex } from '@chakra-ui/react';
import TopBar from '../TopBar';
import { colors } from 'src/styles/colors';

function Layout({children}: IProps){
  return (
     <Box bgColor={colors.bg.color1} minH="100vh">
       <TopBar/>
       <Flex flexDirection="column" pt={'62px'}>
         {children}
       </Flex>
     </Box>
  );
}

export default Layout;
