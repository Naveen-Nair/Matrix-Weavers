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
  Spinner,
  Flex,
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
    // console.log(question);
  }

  const [messages, setMessages] = useState([
    {
      message: "Hello! This is your Chatbot. You can ask me anything!!",
      sentTime: "just now",
      sender: "Joe",
      direction: "incoming",
    },
  ]);
  const [isMessageLoading, setIsMessageLoading] = useState(false);
  function convertMarkdownToText(markdown) {
    // Convert Markdown to plain text with bold formatting
    const plainText = markdown
      // Convert headings to bold text (optional: can be converted into other formatting)
      .replace(/^###\s+(.*?)(\n|$)/gm, "<strong>$1</strong>\n") // ### Heading 3
      .replace(/^##\s+(.*?)(\n|$)/gm, "<strong>$1</strong>\n") // ## Heading 2
      .replace(/^#\s+(.*?)(\n|$)/gm, "<strong>$1</strong>\n") // # Heading 1
      // Replace bold syntax (__ or **) with <strong> tags
      .replace(
        /\*\*(.*?)\*\*|__(.*?)__/g,
        (match, p1, p2) => `<strong>${p1 || p2}</strong>`
      )
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
    setIsMessageLoading(true);

    try {
      const response = await fetch(
        "https://2b84-14-139-162-2.ngrok-free.app/askGRAG",
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
      // console.log("Response:", data);
      // Handle the response data as needed
      const text = convertMarkdownToText(data.response);

      const newMessage = {
        message: text,
        sentTime: "just now",
        sender: "Joe",
        direction: "incoming",
      };

      // Update the state with the new message
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    } catch (error) {
      console.error("Error:", error);
      // Handle error as needed
    } finally {
      // Set the loading state back to false once the request completes
      setIsMessageLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Chat with our Assistant</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div style={{ position: "relative", height: "500px" }}>
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
                  {isMessageLoading && (
                    <Flex
                      className="loading-screen"
                      justify-contents="center"
                      align-items="center"
                      textAlign="center"
                      mt="150px"
                      ml="200px"
                    >
                      <Spinner />
                    </Flex>
                  )}
                </MessageList>

                <MessageInput
                  placeholder="Type message here"
                  onSend={handleSendMessage} // Handle sending messages
                  disabled={isMessageLoading}
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
