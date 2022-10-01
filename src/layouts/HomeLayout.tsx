import { Box, Container, ContainerProps } from "@chakra-ui/react";
import { Header } from "@components/Header";

interface IMainLayoutProps extends ContainerProps {}

export function MainLayout({ ...rest }: IMainLayoutProps) {
  return (
    <Box as="main">
      <Header />
      <Container {...rest}></Container>
    </Box>
  );
}
