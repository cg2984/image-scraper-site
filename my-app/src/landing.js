import { motion } from "framer-motion";
import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box } from "@chakra-ui/react"

function Landing(props) {
  return (
  	<Box 
  		w="90%" 
  		h="80vh" 
  		margin="10px auto"
  		display="flex"
  		alignItems="center"
  		justifyContent="center"
  	>
  	  <Heading 
        as="h2" 
        size="lg" 
        margin="50px" 
        textAlign="center" 
        verticalAlign="middle"
      >  The Top 50 Most Popular Pictures from
        <Link margin="0 10px"color="orange.300" href="https://old.reddit.com/r/nocontextpics/top/" fontWeight="400" isExternal>
          r/nocontextpics <ExternalLinkIcon mx="2px" />
        </Link>
      </Heading> 
  	</Box>
  );
}

export default Landing;