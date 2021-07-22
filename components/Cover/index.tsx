import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { colors } from 'src/../styles/colors';

function Cover(){
  return (
    <Box bgColor={colors.bg.color2} color="black">
      <Flex
       justifyContent="center"
       alignItems="center"
       py={20}
      >
        <Flex
          px={[4,8]}
          py={[0, 20]}
          w="full"
          maxW="1200px"
          direction="column"
        >
          <Heading
           as="h1"
           fontSize={{base: '42px', md: '52px', lg: '72px'}}
           mb={4}
           fontWeight="xBold"
          >
            Aprenda programação
            <Box>direto ao ponto</Box>
            <Box
             bgGradient="linear(to-l, #7928CA, #FF0080)"
             bgClip="text"
            >
              100% free.
            </Box>
          </Heading>
          <Text fontSize={{ base: '16px', md: '20px', lg: '22px' }}>
            <Box>
              Mantenha seus conhecimentos atualizados com as mais novas{' '}
            </Box>
            <Box>tecnologias que estão disponíveis no mercado!</Box>
          </Text>
          <Box>
            <Button
              as="a"
              my={10}
              colorScheme="facebook"
              color="purple"
              variant="outline"
              size="lg"
              href="#series"
            >
              Bora começar!
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Cover;
