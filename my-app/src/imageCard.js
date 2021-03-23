import { Image } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";


function ImageCard(props) {
  return (
  	<div>
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
    </div>
  );
}

export default ImageCard;
