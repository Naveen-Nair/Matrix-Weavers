import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Importing the required icons
import { AiOutlineExclamation } from "react-icons/ai"; // Importing the required icon


function CommentsRow(props) {
  const { name, date, logo, sentiment, summary } = props;
    // Determine which icon to display based on sentiment
    const getSentimentIcon = () => {
      switch (sentiment) {
        case "positive":
          return <FaArrowUp color="#01B574" />;
        case "negative":
          return <FaArrowDown color="red.500" />;
        case "neutral":
          return <AiOutlineExclamation color="gray.400" />;
        default:
          return null;
      }
    };

  return (
    <Flex mb='24px' justifyContent='space-between'>
      <Flex alignItems='center'>
      <Box me='14px' borderRadius='50%' color="gray.400" border='1px solid' display='flex' alignItems='center' justifyContent='center' w='35px' h='35px'>
          {getSentimentIcon()} {/* Render the appropriate icon */}
        </Box>
        <Flex direction='column'>
          <Text fontSize='sm' color='#fff' mb='4px'>
            {name}
          </Text>
          <Text fontSize={{ sm: "xs", md: "sm" }} color='gray.400'>
            {date}
          </Text>
          <Text fontSize='sm' color='gray.400'>
            {summary}
          </Text>
        </Flex>
      </Flex>
      <Box color={sentiment === "positive" ? "#01B574" : sentiment === "negative" ? "red.500" : "gray.400"}>
        <Text fontSize='sm'>{sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}</Text>
      </Box>
    </Flex>
  );
}

export default CommentsRow;
