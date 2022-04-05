import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import { MyButton } from './MyButton';
import { Input } from './Input';
import styles from '../styles';

export const Ingles = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: props.backColor}]}>
      <Image style={styles.imagem} source={require('../../assets/skeletor2.png')} />
      <Input
        style={styles.input}
        inputPlaceholder={props.input1Placeholder}
      />
      <Text style={styles.paragraph}>
        By the Power of Greyskull...
      </Text>
      <Text style={styles.paragraph}>
        ...I have the power!
      </Text>
      <View style={styles.itensContainer}>
        <Image style={styles.imagem} source={require('../../assets/skeletor1.png')} />
        <Image style={styles.imagem} source={require('../../assets/skeletor3.png')} />
      </View>
      <Text style={styles.paragraph}>
        Do you like Skeletor?
      </Text>
      <View style={styles.itensContainer}>
        <MyButton
          text="Yes"
          btnColor={props.btn1Color}
        />
        <MyButton
          text="Surely"
          btnColor={props.btn2Color}
        />
        <MyButton
          text="Obviously!"
          btnColor={props.btn3Color}
        />
      </View>
      <Input
        style={styles.input}
        inputPlaceholder={props.input2Placeholder}
      />
      <Input
        style={styles.input}
        inputPlaceholder={props.input3Placeholder}
      />
    </View>
  );
}
export default Ingles;
