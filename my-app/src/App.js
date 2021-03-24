import './App.css';
import data from "./data/images.json";
import { Wrap, WrapItem } from "@chakra-ui/react";
import ImageCard from "./imageCard.js";
import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";



function App() {
  const imageArray = data.images;
  return (
    <div className="App" id="top">
      <Heading 
        as="h2" 
        size="lg" 
        margin="50px" 
        textAlign="center" 
      >
        Top Pics from 
        <Link margin="0 10px"color="orange.300" href="https://old.reddit.com/r/nocontextpics/top/" isExternal>
          r/nocontextpics
        </Link>
      </Heading> 
      <Wrap spacing="30px" align="center" justify="center">           
        {/*for some reason the map the image isnt the key its the link to each image*/}
        {(imageArray[0] === undefined) ? console.log("undefined") : imageArray.map((image) => <ImageCard link={image} whileHover={{scale: 1.2}}/>)} 
      </Wrap>
      <Button as="a" href="#top" margin="50px" textAlign="center" colorScheme="orange" size="md">
        Back to Top
      </Button>
      
    </div>
  );
}

export default App;

