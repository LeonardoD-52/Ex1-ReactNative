import React from 'react';
import { TextInput } from 'react-native';

export const Input = (props) => {
  return (
    <TextInput
      style={props.style}
      placeholder={props.inputPlaceholder}
    />
  );
}
export default Input;
