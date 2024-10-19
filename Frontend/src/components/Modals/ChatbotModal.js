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

  function onSubmission(){
    console.log(question)
  }

  const [messages, setMessages] = useState([
    {
      message: "Hello! This is your Chatbot. You can ask me anything!!",
      sentTime: "just now",
      sender: "Joe",
      direction: "incoming"
    }
  ]);

  // Function to handle sending a message
  const handleSendMessage = (messageText) => {
    const newMessage = {
      message: messageText,
      sentTime: "just now",
      sender: "You",
      direction: "outgoing"
    };

    // Update the state with the new message
    setMessages((prevMessages) => [...prevMessages, newMessage]);
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
                direction: msg.direction
              }}

            />
          ))}
        </MessageList>

        {/* Message Input */}
        <MessageInput 
          placeholder="Type message here" 
          onSend={handleSendMessage}  // Handle sending messages
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
