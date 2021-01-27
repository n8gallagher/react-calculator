import React, { useEffect } from 'react';
import {
  ThemeProvider,
  Box,
  Text,
  Flex,
  useColorMode,
  Button,
  Grid,
  GridItem,
  Switch,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../src/ColorModeSwitcher';
import CalcFunctions from '../CalcFunctions';
import ToggleButton from './ColorPicker';
import { FaRegBell } from 'react-icons/fa';
import {ColorFunctions} from './ColorFunctions';

const Calculator = () => {

  const { setColorMode } = useColorMode();
  // const [colorMode, setColorMode] = React.useState(null) -- for many color themes
  // setColorMode(‘red’); setColorMode(‘negative’)

  // const { colorMode, toggleColorMode } = useColorMode();
  // const dynamicColor = (value) => {
  //   switch (value) {
  //     case "red":
  //       return "rgb(255, 0, 0)"
  //     case "blue":
  //       return "rgb(0, 0, 255)"
  //     case "green":
  //       return "rgb(0, 255, 0)"
  //     case "yellow":
  //       return "rgb(255, 255, 0)"
  //     default:
  //       break;
  //   } 
  // }
  useEffect( () => {

    const numberButtons = document.querySelectorAll('[data-number]')
    const operationButtons = document.querySelectorAll('[data-operation]')
    const equalsButton = document.querySelector('[data-equals]')
    const darkButton = document.querySelector('[data-dark]')
    const clearButton = document.querySelector('[data-clear]')
    const previousOperandTextElement = document.querySelector('[data-previous-operand]')
    const currentOperandTextElement = document.querySelector('[data-current-operand]')

    
    const calc = new CalcFunctions(previousOperandTextElement, currentOperandTextElement);
    
    numberButtons.forEach(button => {
      button.addEventListener('click', () => {
        calc.appendNumber(button.innerText)
        calc.updateDisplay();
        
      })
    })
    
    operationButtons.forEach(button => {
      button.addEventListener('click', () => {
        calc.chooseOperation(button.innerText)
        calc.updateDisplay();
      })
    })
    
    equalsButton.addEventListener('click', button => {
      calc.compute()
      calc.updateDisplay()
      console.log('test1')
    })
  
    clearButton.addEventListener('click', button => {
      calc.clear()
      calc.updateDisplay()
    })

    darkButton.addEventListener('click', button => {
      // if(){}
      
      // ColorFunctions(value, setColorMode);
    })
  })
  
  return (
    <Box>
      
      <Flex direction='column' m='5px' align='center'>
        <Box border="1px" borderColor="gray.200" borderRadius="md" w='190px' height='60px' textAlign='right'>
          <Flex direction='column'>
            <Text data-previous-operand padding="4px" fontSize='12px'></Text>
            <Text data-current-operand padding="4px" fontSize='16px'>0</Text>

          </Flex>
        </Box>
      
        <Grid 
          h='220px'
          w="200px"
          templateRows='repeat(5, 1fr)'
          templateColumns='repeat(4, 1fr)'
          gap={0.2}
          p='5px'
        >
          <GridItem><Button size='md' width='20px' colorScheme='orange' data-dark fontWeight='bold'>🌙</Button></GridItem>
          <GridItem><Button variant='red' data-delete fontWeight='bold'>CE</Button></GridItem>
          <GridItem><Button data-clear fontWeight='bold'>C</Button></GridItem>
          <GridItem><Button data-operation fontWeight='bold'>÷</Button></GridItem>
          <GridItem><Button data-number>7</Button></GridItem>
          <GridItem><Button data-number>8</Button></GridItem>
          <GridItem><Button data-number>9</Button></GridItem>
          <GridItem><Button data-operation fontWeight='bold'>×</Button></GridItem>
          <GridItem><Button data-number>4</Button></GridItem>
          <GridItem><Button data-number>5</Button></GridItem>
          <GridItem><Button data-number>6</Button></GridItem>
          <GridItem><Button data-operation fontWeight='bold'>−</Button></GridItem>
          <GridItem><Button data-number>1</Button></GridItem>
          <GridItem><Button data-number>2</Button></GridItem>
          <GridItem><Button data-number>3</Button></GridItem>
          <GridItem><Button data-operation fontWeight='bold'>+</Button></GridItem>
          <GridItem><Button data-number>0</Button></GridItem>
          <GridItem colSpan={2}><Button data-equals w='92%' fontWeight='bold'>=</Button></GridItem>
          <GridItem><Button data-number fontWeight='bold'>.</Button></GridItem>
        </Grid>
      </Flex>
      
      <ToggleButton />
    </Box>
  )
}

export default Calculator;