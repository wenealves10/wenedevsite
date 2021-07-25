import { Box, Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { colors } from 'src/../styles/colors';
import { ITechnologies } from 'src/../interfaces/props.dto';

function Cover({ technologies }: ITechnologies){

  const bgColor = useColorModeValue('#F4F6F8', '#1A202C');

  return (
    <Box bgColor={bgColor} color="black">
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
            <Box>
              tecnologias que estão disponíveis no mercado!
              <ul>
                {technologies.map(technology => (
                  <li key={technology.id}>{technology.name}</li>
                ))}
              </ul>
            </Box>
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
