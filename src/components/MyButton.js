import React from 'react';
import { Button } from 'react-native';

export const MyButton = (props) => {
  return (
    <Button
      title={props.text}
      color={props.btnColor}
    />
  );
}
export default MyButton;
