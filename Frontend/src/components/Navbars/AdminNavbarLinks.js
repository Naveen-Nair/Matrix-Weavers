import { Button, Flex, Switch, Text } from "@chakra-ui/react";
// Assets
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import routes from "routes.js";

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;

  // Chakra Color Mode
  let inputBg = "#0F1535";
  let mainText = "gray.400";
  let navbarIcon = "white";
  let searchIcon = "white";

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  const settingsRef = React.useRef();

  const [isToggled, setIsToggled] = useState(false);

  // Handle toggle switch change
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      {/* <InputGroup
        cursor='pointer'
        bg={inputBg}
        borderRadius='15px'
        borderColor='rgba(226, 232, 240, 0.3)'
        w={{
          sm: "128px",
          md: "200px",
        }}
        me={{ sm: "auto", md: "20px" }}>
        <InputLeftElement
          children={
            <IconButton
              bg='inherit'
              borderRadius='inherit'
              _hover='none'
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              icon={
                <SearchIcon color={searchIcon} w='15px' h='15px' />
              }></IconButton>
          }
        />
        <Input
          fontSize='xs'
          py='11px'
          color={mainText}
          placeholder='Type here...'
          borderRadius='inherit'
        />
      </InputGroup> */}
      <Button
        ms="0px"
        px="0px"
        me={{ sm: "2px", md: "16px" }}
        color={navbarIcon}
        variant="transparent-with-icon"
        rightIcon={
          document.documentElement.dir ? null : (
            <Switch
              size="md"
              colorScheme="teal"
              isChecked={isToggled}
              onChange={handleToggle}
            />
          )
        }
        leftIcon={
          document.documentElement.dir ? (
            <Switch
              size="md"
              colorScheme="teal"
              isChecked={isToggled}
              onChange={handleToggle}
            />
          ) : null
        }
      >
        <Text display={{ sm: "none", md: "flex" }}>Compare</Text>
      </Button>
      <SidebarResponsive
        iconColor="gray.500"
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        // logo={logo}
        {...rest}
      />

      {/* <Menu>
 
        <MenuList
          border='transparent'
          backdropFilter='blur(63px)'
          bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
          borderRadius='20px'>
          <Flex flexDirection='column'>
            <MenuItem
              borderRadius='8px'
              _hover={{
                bg: "transparent",
              }}
              _active={{
                bg: "transparent",
              }}
              _focus={{
                bg: "transparent",
              }}
              mb='10px'>
              <ItemContent
                time='13 minutes ago'
                info='from Alicia'
                boldInfo='New Message'
                aName='Alicia'
                aSrc={avatar1}
              />
            </MenuItem>
            <MenuItem
              borderRadius='8px'
              _hover={{
                bg: "transparent",
              }}
              _active={{
                bg: "transparent",
              }}
              _focus={{
                bg: "transparent",
              }}
              mb='10px'>
              <ItemContent
                time='2 days ago'
                info='by Josh Henry'
                boldInfo='New Album'
                aName='Josh Henry'
                aSrc={avatar2}
              />
            </MenuItem>
            <MenuItem
              borderRadius='8px'
              _hover={{
                bg: "transparent",
              }}
              _active={{
                bg: "transparent",
              }}
              _focus={{
                bg: "transparent",
              }}>
              <ItemContent
                time='3 days ago'
                info='Payment succesfully completed!'
                boldInfo=''
                aName='Kara'
                aSrc={avatar3}
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu> */}
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
