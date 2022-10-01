import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { MainLayout } from "@layouts/HomeLayout";
import { AnimatedThreeDimensionalUndulating } from "@components/AnimatedThreeDimensionalUndulating";

function Home() {
  return (
    <MainLayout maxW="container.xl">
      <Box as="section" position="relative">
        <Flex h={["300px", "400px", "444px"]} justifyContent="space-between">
          <AnimatedThreeDimensionalUndulating
            imageSize="sm"
            my="auto"
            duration="10"
          />
          <AnimatedThreeDimensionalUndulating
            imageSize="lg"
            my="auto"
            duration="10"
          />
          <AnimatedThreeDimensionalUndulating
            imageSize="sm"
            mb="auto"
            duration="10"
          />
        </Flex>

        <Box
          position="absolute"
          mx="auto"
          left={0}
          right={0}
          textAlign="center"
          top={0}
          mt="81px"
        >
          <Heading as="h1" fontSize={["30px", "40px", "60px"]}>
            A tecnologia é o
            <br />
            <Box lineHeight="10">
              <Text
                as="span"
                fontWeight="medium"
                textDecorationLine="line-through"
                textDecorationColor="rgba(242, 41, 78, 0.250)"
                bgGradient="linear(to-b, #F2294E, #F2294E00)"
                bgClip="text"
                display="inline-block"
              >
                amanhã
              </Text>
              <br />
              <Text
                as="span"
                bgGradient="linear(to-l, #F2294E, #C76BF2, #654EC0, #6B99F2)"
                bgClip="text"
              >
                agora
              </Text>
            </Box>
          </Heading>
        </Box>
      </Box>

      <Heading as="h2" fontSize={["18px", "20px", "24px"]} textAlign="center">
        Domine as tecnologias utilizadas por empresas do mundo e siga um novo
        desafio profissional
      </Heading>
    </MainLayout>
  );
}

export default Home;
