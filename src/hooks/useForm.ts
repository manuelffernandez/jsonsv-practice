import { useReducer } from 'react';
import { Blog } from '../interfaces';

type FormAction =
  | {
      type: 'changeValue';
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: 'clear';
    };

const INITIAL_STATE = {
  title: '',
  body: '',
  likes: 0,
};

const formReducer = (state: Blog, action: FormAction) => {
  switch (action.type) {
    case 'changeValue':
      const { inputName, inputValue } = action.payload;
      return { ...state, [inputName]: inputValue };
    case 'clear':
      return INITIAL_STATE;
    default:
      return state;
  }
};

const useForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useForm;
