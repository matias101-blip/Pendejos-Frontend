import React from "react";
import { Box, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const MotionFlex = motion(Flex);

const BoxSlider = () => {
  const [scrollX, setScrollX] = React.useState(0);
  const containerRef = React.useRef(null);

  const scrollAmount = useBreakpointValue({ base: 200, md: 300 });

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const newScrollX =
      direction === "left"
        ? scrollX - scrollAmount
        : scrollX + scrollAmount;

    container.scrollTo({
      left: newScrollX,
      behavior: "smooth",
    });
    setScrollX(newScrollX);
  };

  const boxes = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <Box position="relative" w="100%" overflow="hidden" p={4}>
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Scroll left"
        onClick={() => scroll("left")}
        position="absolute"
        left={2}
        top="50%"
        transform="translateY(-50%)"
        zIndex={1}
        variant="ghost"
        size="lg"
      />
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Scroll right"
        onClick={() => scroll("right")}
        position="absolute"
        right={2}
        top="50%"
        transform="translateY(-50%)"
        zIndex={1}
        variant="ghost"
        size="lg"
      />
      <MotionFlex
        ref={containerRef}
        overflowX="auto"
        scrollBehavior="smooth"
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
        gap={4}
        p={2}
      >
        {boxes.map((num) => (
          <Box
            key={num}
            minW="200px"
            h="150px"
            bg="blue.400"
            rounded="2xl"
            shadow="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontSize="2xl"
            fontWeight="bold"
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            Box {num}
          </Box>
        ))}
      </MotionFlex>
    </Box>
  );
};

export default BoxSlider;
