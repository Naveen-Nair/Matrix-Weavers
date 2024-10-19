import React from "react";
import { useState } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
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
  background,
} from "@chakra-ui/react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

const ChatbotModal = ({ isOpen, onClose }) => {
  const [question, setQuestion] = useState("");

  function onSubmission() {
    console.log(question);
  }

  const [messages, setMessages] = useState([
    {
      message: "Hello! This is your Chatbot. You can ask me anything!!",
      sentTime: "just now",
      sender: "Joe",
      direction: "incoming",
    },
  ]);
  function convertMarkdownToText(markdown) {
    // Convert Markdown to plain text
    const plainText = markdown
      // Remove Markdown headers (e.g., ###)
      .replace(/#+\s+/g, "")
      // Replace double line breaks with a unique marker
      .replace(/\n\n+/g, "<<BR>>")
      // Replace single line breaks with a space
      .replace(/\n/g, " ")
      // Restore line breaks
      .replace(/<<BR>>/g, "\n\n")
      // Trim any leading or trailing whitespace
      .trim();

    return plainText;
  }

  // Function to handle sending a message
  const handleSendMessage = async (messageText) => {
    // Prepare the request payload
    const requestBody = {
      question: messageText,
    };
    const newMessage = {
      message: messageText,
      sentTime: "just now",
      sender: "You",
      direction: "outgoing",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await fetch(
        "https://5529-2401-4900-628d-3a07-3c6a-354-4c5-75bf.ngrok-free.app/askGRAG",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response:", data);
      // Handle the response data as needed
      const text = convertMarkdownToText(data.response);

      const newMessage = {
        message: text,
        sentTime: "just now",
        sender: "You",
        direction: "outgoing",
      };

      // Update the state with the new message
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    } catch (error) {
      console.error("Error:", error);
      // Handle error as needed
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Chat with our Assistant</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <VStack spacing={4} align="stretch">
            <Textarea
              placeholder="Type your message..."
              size="lg"
              resize="none"
              rows={5}
              onChange={(e)=>{setQuestion(e.target.value)}}
            />
            <Box textAlign="right">
              <Button colorScheme="blue" size="lg" onClick={onSubmission}>
                Send
              </Button>
            </Box>
          </VStack> */}
          <div style={{ position: "relative", height: "500px" }}>
            {/* <MainContainer>
    <ChatContainer>
      <MessageList>
        <Message
          model={{
            message: "Hello! This is your Chatbot. You can ask me anything!!",
            sentTime: "just now",
            sender: "Joe",
            direction: 2
          }}
        />
      </MessageList>
      <MessageInput placeholder="Type message here" />
    </ChatContainer>
  </MainContainer> */}

            <MainContainer>
              <ChatContainer>
                {/* Message List */}
                <MessageList>
                  {messages.map((msg, index) => (
                    <Message
                      style={styles.Message}
                      key={index}
                      model={{
                        message: msg.message,
                        sentTime: msg.sentTime,
                        sender: msg.sender,
                        direction: msg.direction,
                      }}
                    />
                  ))}
                </MessageList>

                {/* Message Input */}
                <MessageInput
                  placeholder="Type message here"
                  onSend={handleSendMessage} // Handle sending messages
                />
              </ChatContainer>
            </MainContainer>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChatbotModal;
