import Layout from 'src/components/Layout';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Stack,
  Link,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function About() {
  return (
    <Layout>
      <Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          h={['20vh', '40vh']}
          w="100%"
          minW="100%"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          direction="column"
        >
          <Heading as="h3" size="xl" mb={2}>
            @wn_allvess
          </Heading>
          <Stack direction="row" spacing={2}>
            <Link href="https://www.instagram.com/wn_allvess">
              <Icon w={6} h={6} as={FaInstagram} />
            </Link>
            <Link href="https://www.linkedin.com/in/wenealvesfullstack/">
              <Icon w={6} h={6} as={FaLinkedin} />
            </Link>
            <Link href="https://github.com/wenealves10">
              <Icon w={6} h={6} as={FaGithub} />
            </Link>
          </Stack>
        </Flex>
        <Flex justify="center">
          <Flex
            w="full"
            maxW="1200px"
            px={[4, 8]}
            direction="column"
            position="relative"
          >
            <Box top="-8" position="absolute">
              <Avatar size="xl" src="https://avatars.githubusercontent.com/u/67342359?v=4" />
            </Box>
            <Box ml="105px" mt={1}>
              <Heading as="h3" size="md">
                Wene Alves
              </Heading>
              <Text fontSize="sm">Fullstack Developer</Text>
            </Box>
            <Box mt={10}>
              <Text fontSize="sm">
              <p>Olá 👋, me chamo Wene Alves, sou Back End Developer e apaixonado por programação, amante das melhores tecnologias de desenvolvimento web e mobile.</p>
              <p>
              Sou formado em Técnico em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia do Maranhão (IFMA) Campus Codó.
              </p>
              <p>👨‍💻 Sempre estudando para alcançar o próximo nível 👊!</p>
              <p>
              🛠 Tech Stack<br/>
              🌐 JavaScript | Node.js | TypeScript | ReactJS | NextJS<br/>
              🛢 MySQL | PostgreSQL | MongoDB | Sqlite<br/>
              🔧 Git | Docker | Docker-compose| kubernetes | Linux | GCP | Microsoft Azure | AWS services | IBM Cloud<br/>
              🤖 Artificial Intelligence | Machine Learning<br/>

              </p>
              <p>🚀 Estou sempre fazendo projetos pessoais para melhora minha skills.</p>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}

export default About;
