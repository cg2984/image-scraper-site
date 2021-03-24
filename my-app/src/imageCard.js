import { Image } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from "framer-motion";


function ImageCard(props) {
  return (
  	<motion.div 
  		className="motionCard"
  		whileHover={{ scale: 1.5 }}
  	>
	    <WrapItem>
			<Image
				border="4px" 
				borderColor="gray.700"
				borderStyle="solid"
		    	borderRadius="5px"
		    	boxShadow="md" 
				htmlWidth="400px" 
				src={props.link}
			>
			</Image>
		</WrapItem>
    </motion.div>
  );
}

export default ImageCard;
