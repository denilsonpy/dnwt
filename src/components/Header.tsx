import {
  Container,
  Flex,
  HStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { Button } from "./Button";

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href;

  const activeColor = useColorModeValue("#805AD5", "#FBD38D");
  const inactiveColor = useColorModeValue("gray.700", "whiteAlpha.900");

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? activeColor : inactiveColor}
        fontWeight="bold"
        fontSize="16px"
        style={{ textDecoration: "none" }}
        _hover={{
          color: "primary.200",
        }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      w="100%"
      h="123px"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor="#ffffff30"
    >
      <Container
        maxW="container.xl"
        flexDirection="row"
        display="flex"
        justifyContent="space-between"
      >
        <Image src="/assets/images/logo.svg" width="70px" height="70px" />

        <HStack
          alignItems="center"
          w="100%"
          ml="20px"
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <LinkItem href="/works" path={asPath}>
            Início
          </LinkItem>
          <LinkItem href="/posts" path={asPath}>
            Sobre
          </LinkItem>
          <LinkItem href="/posts" path={asPath}>
            Cursos
          </LinkItem>
          <LinkItem href="/posts" path={asPath}>
            Contrate
          </LinkItem>
        </HStack>

        <HStack alignItems="center">
          <Button title="Entrar" />
          <Button title="Registrar" />
        </HStack>
      </Container>
    </Flex>
  );
}
