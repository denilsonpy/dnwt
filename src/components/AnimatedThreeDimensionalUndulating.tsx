import NextImage from "next/image";
import { motion } from "framer-motion";
import { BoxProps, chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

interface IAnimatedThreeDimensionalUndulatingProps extends BoxProps {
  duration?: string;
  imageSize: "sm" | "lg";
}

export function AnimatedThreeDimensionalUndulating({
  duration = "10",
  imageSize,
  ...rest
}: IAnimatedThreeDimensionalUndulatingProps) {
  return (
    <StyledDiv
      {...rest}
      transition={{
        // @ts-ignore
        repeat: "Infinity",
        repeatDelay: 0.1,
        duration,
      }}
      animate={{
        // scale: [0.9, 1, 0.9, 1, 0.9],
        x:
          imageSize === "sm"
            ? [
                ...Array(40)
                  .fill(1)
                  .map((value, index) => (value * index) / 2),
                ...Array(39)
                  .fill(1)
                  .map((value, index) => (value * index) / 2)
                  .reverse(),
              ]
            : [
                ...Array(40)
                  .fill(1)
                  .map((value, index) => (value * index) / 2)
                  .reverse(),
                ...Array(40)
                  .fill(1)
                  .map((value, index) => (value * index) / 2)
                  .filter((value) => value != 0),
              ],
      }}
    >
      <NextImage
        src={
          imageSize === "sm"
            ? "/assets/images/three-dimensional-undulating-sm.svg"
            : "/assets/images/three-dimensional-undulating-lg.svg"
        }
        width={imageSize === "sm" ? "268px" : "593px"}
        height={imageSize === "sm" ? "268px" : "444px"}
      />
    </StyledDiv>
  );
}
