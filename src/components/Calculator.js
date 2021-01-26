import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Button,
  Grid,
  GridItem,
  theme
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../src/ColorModeSwitcher';
import CalcFunctions from '../CalcFunctions';

const Calculator = () => {
  debugger
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const clearButton = document.querySelector('[data-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
  const calc = new CalcFunctions(previousOperandTextElement, currentOperandTextElement);

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calc.appendNumber(button.innerText)
      calc.updateDisplay();
      console.log('test1')
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calc.chooseOperation(button.innerText)
      calc.updateDisplay();
    })
  })
  
  // equalsButton.addEventListener('click', button => {
  //   calc.compute()
  //   calc.updateDisplay()
  // })

  // clearButton.addEventListener('click', button => {
  //   calc.clear()
  //   calc.updateDisplay()
  // })

  

  return (
    <ChakraProvider theme={theme}>
      
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
          <GridItem><Button data-number fontWeight='bold'>(</Button></GridItem>
          <GridItem><Button data-number fontWeight='bold'>)</Button></GridItem>
          <GridItem><Button data-operation fontWeight='bold'>÷</Button></GridItem>
          <GridItem><Button data-clear fontWeight='bold'>C</Button></GridItem>
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
      

      </ChakraProvider>
  )
}

export default Calculator;