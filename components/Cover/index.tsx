import Image from 'next/image';
import {
  Heading,
  Button,
  Flex,
  Text,
  Box,
  SimpleGrid,
  useColorModeValue,
  Wrap,
  WrapItem,
  Center,
  Link,
} from '@chakra-ui/react';
import { ITechnologies } from 'src/../interfaces/props.dto';
import { useState } from 'react';

function Cover({ technologies }: ITechnologies){

  const [currentTechnologies, setTechnologies] = useState(technologies);
  const bgColor = useColorModeValue('#FFFFFF', '#1A202C');

  const handleShowAllTechnologies = () => {
    const techs = currentTechnologies.map((t) => {
      t.defaultVisible = true;
      return t;
    });

    setTechnologies(techs);
  }

  const hiddenTechnologies = currentTechnologies.filter((t) => !t.defaultVisible,).length;

  return (
    <Box bgColor={bgColor}>
      <Flex
       justifyContent="center"
       alignItems="center"
      //  py={-100}
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
            </Box>
          </Text>
          <Box>
            <Button
              as="a"
              my={10}
              colorScheme="purple"
              variant="outline"
              size="lg"
              href="#series"
            >
              Bora começar!
            </Button>
          </Box>
          <Box>
          <Wrap>
              {currentTechnologies
                ?.filter((f) => f.defaultVisible)
                ?.map((tech) => (
                  <WrapItem>
                    <Center
                      w="100px"
                      h="100px"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      flexDirection="column"
                    >
                      <Image
                        src={tech.logo.url}
                        alt={tech.name}
                        width={40}
                        height={40}
                        title={tech.name}
                      />
                      <Text
                        fontSize="sm"
                        textAlign="center"
                        fontWeight="bold"
                        mt={2}
                      >
                        {tech.name}
                      </Text>
                    </Center>
                  </WrapItem>
                ))}
              {hiddenTechnologies > 0 && (
                <WrapItem>
                  <Center
                    w="100px"
                    h="100px"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    flexDirection="column"
                  >
                    <Link onClick={handleShowAllTechnologies}>
                      <Text
                        fontSize="sm"
                        textAlign="center"
                        fontWeight="bold"
                        mt={2}
                      >
                        {`+${hiddenTechnologies} outras`}
                      </Text>
                    </Link>
                  </Center>
                </WrapItem>
              )}
            </Wrap>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Cover;
