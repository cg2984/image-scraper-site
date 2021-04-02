import './App.css';
import data from "./data/images.json";
import { Wrap, WrapItem } from "@chakra-ui/react";
import ImageCard from "./imageCard.js";
import Landing from "./landing.js";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { motion, useViewportScroll } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';





function App() {
  const imageArray = data.images;
  const [link, setLink] = useState("test");
  const [openState, setOpenState] = useState(null)
  const initialRef = React.useRef()
  const handleClick = (link) => (
    setLink(link),
    setOpenState(onOpen)
  )
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box 
      className="App" 
      id="top"
    > 
      <Landing/>
      <Wrap spacing="30px" align="center" justify="center">           
        {/*for some reason the map the image isnt the key its the link to each image*/}
        {(imageArray[0] === undefined) 
          ? console.log("undefined") 
          : imageArray.map((image) => 
              <motion.div
                onClick = {()=> handleClick(image)} 
                className="motion_card"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 0.5
                }}  
                whileTap={{ 
                  scale: 0.9,
                  rotate: -0.5
                }}  
            >
              <WrapItem>
                <Image
                  className = "image"
                  boxSize="400px"
                  fit="cover" 
                  src={image}
                >
                </Image>
              </WrapItem>
            </motion.div>
            )
        } 
      </Wrap>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} initialFocusRef={initialRef} isCentered>
        <ModalOverlay bg="gray.100"/>
        <ModalContent>
          <Image
            src={link}
          >
          </Image>
          <ModalFooter>
            <Button as="a" href={link} variant="ghost" mr={3} onClick={onClose} isExternal={true}>
              Open Image
            </Button>
            <Button colorScheme="orange" mr={3} onClick={onClose} ref={initialRef}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button as="a" href="#top" margin="50px" textAlign="center" colorScheme="orange" size="md">
        Back to Top
      </Button>  
    </Box>
  );
}

export default App;

