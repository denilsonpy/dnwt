import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";

interface IButtonProps extends ButtonProps {
  title: string;
}
export function Button({ title, ...rest }: IButtonProps) {
  return (
    <ChakraButton
      rounded="full"
      bgGradient="linear(to-b, #F2294E, #6B99F2)"
      minW={{
        base: "",
        md: "146px",
      }}
      textTransform="uppercase"
      __hover={{}}
      __focus={{}}
      {...rest}
    >
      {title}
    </ChakraButton>
  );
}
