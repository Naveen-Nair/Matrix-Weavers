// Chakra Imports
import { Button, useColorModeValue } from "@chakra-ui/react";
// Custom Icons
import { ChatbotIcon } from "components/Icons/Icons";
import PropTypes from "prop-types";
import React from "react";
// Chatbot Modal
import ChatbotModal from "components/Modals/ChatbotModal.js";

export default function FixedPlugin(props) {
  const { secondary, onChange, onSwitch, fixed, ...rest } = props;
  
  const [isOpen, setIsOpen] = React.useState(false);
  
  const navbarIcon = "white";
  const bgButton = "brand.200";

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button
        h='52px'
        w='52px'
        onClick={handleOpen}
        bg={bgButton}
        position='fixed'
        variant='no-hover'
        left={""}
        right={"35px"}
        bottom='30px'
        borderRadius='50px'
        boxShadow='0 2px 12px 0 rgb(0 0 0 / 16%)'
      >
        <ChatbotIcon
          cursor='pointer'
          color={navbarIcon}
          w='20px'
          h='20px'
        />
      </Button>
      <ChatbotModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
}

FixedPlugin.propTypes = {
  fixed: PropTypes.bool,
  onChange: PropTypes.func,
  onSwitch: PropTypes.func,
};
