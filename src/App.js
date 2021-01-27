import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  Box,
} from '@chakra-ui/react';
// import theme from './theme'
import Calculator from './components/Calculator'

// const theme = {
//   initialColorMode: "light",
//   useSystemColorMode: false,
//   components: {
//     Button: {
//       variants: {
//         ahmed: {
//           bg: 'black',
//           fontSize: '34px'
//         }
//       }
//     }
//   }
// }


function App() {
  
  return (
// <ChakraProvider theme={config}>
        
        <Box textAlign="center" fontSize="xl">
          <Calculator />
        </Box>
    
  );
}

export default App;
