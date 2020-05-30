import { useReducer } from 'react';

const operatorFunctions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const updateStateWithNumber = (state, value) => {
  const currentNumber = state.operator === null ? state.operand1 : state.operand2;
  if (currentNumber.length === 10) {
    return state;
  }
  const newNumber = `${currentNumber}${value}`;
  return {
    ...state,
    result: newNumber,
    operand1: state.operator !== null ? state.operand1 : newNumber,
    operand2: state.operator === null ? state.operand2 : newNumber,
  }
};

const calculate = (state) => {
  const { operator, operand1, operand2 } = state;

  const result = operatorFunctions[operator](
    parseFloat(operand1),
    parseFloat(operand2),
  ).toFixed(10);
  return {
    ...state,
    operand1: `${result}`,
    operand2: '',
    result: `${result}`,
    operator: null,
  };
}
const calculateWithOperator = (state, operator) => {
  const { operand1, operand2 } = state;
  let newState = {};
  if (!operand1 && !operand2) {
    return state;
  }
  if (operand1 && operand2) {
     newState = calculate(state)
  } else if (operand1 && !operand2){
    newState = state;
  }
  return {
    ...newState,
    operator,
  };
};

export const reducer = (state, action) => {
  let value = action.type;
  if ((value > -1 && value < 10) || value === '.') {
    value = 'number';
  }
  switch(value) {
    case 'clear':
      return {
        ...state,
        result: '0',
        operand1: state.operator !== null ? state.operand1 : '',
        operand2: state.operator === null ? state.operand2 : '',
      };
    case 'AC':
      // all clear means reset to initial state
      return {
        result: '0',
        operator: null,
        operand1: '',
        operand2: ''
      };
    case '+':
    case '-':
    case '*':
    case '/':
      if (!state.operator) {
        return {
          ...state,
          operator: value,
        };
      } else {
        return calculateWithOperator(state, value);
      }
    case '=':
      return calculate(state);
    case ('number'):
      return updateStateWithNumber(state, action.type);
    default:
      throw new Error('Invalid action');
  }
}
const useResultStatus = () => {
  const initialState = {
    result: '0',
    operator: null,
    operand1: '',
    operand2: '',
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    result: state.result,
    dispatch,
  };
};

export default useResultStatus;
