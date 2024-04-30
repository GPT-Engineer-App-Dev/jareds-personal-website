import { Box, Flex, Heading, Text, VStack, Link, Button } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh">
        <Heading mb={4}>Jared Ingersoll</Heading>
        <Text fontSize="xl" mb={6}>Software Developer | Tech Enthusiast | Creative Thinker</Text>
        <VStack spacing={8}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading size="md">About</Heading>
            <Text mt={4}>Jared is a passionate software developer with a knack for building engaging and efficient applications. With a background in computer science, he specializes in full-stack development and enjoys using his skills to contribute to exciting projects.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading size="md">Portfolio</Heading>
            <Text mt={4}>Explore Jared's projects and contributions in software development. Each project showcases his ability to solve problems and his dedication to enhancing user experience.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading size="md">Contact</Heading>
            <VStack spacing={3} mt={4}>
              <Link href="https://github.com/jaredingersoll" isExternal>
                <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
                  GitHub
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/jaredingersoll" isExternal>
                <Button leftIcon={<FaLinkedin />} colorScheme="teal" variant="solid">
                  LinkedIn
                </Button>
              </Link>
              <Link href="mailto:jared@example.com" isExternal>
                <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
                  Email
                </Button>
              </Link>
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;