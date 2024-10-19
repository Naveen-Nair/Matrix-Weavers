import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Textarea,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";

const ChatbotModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Chat with our Assistant</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Textarea
              placeholder="Type your message..."
              size="lg"
              resize="none"
              rows={5}
            />
            <Box textAlign="right">
              <Button colorScheme="blue" size="lg">
                Send
              </Button>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChatbotModal;
