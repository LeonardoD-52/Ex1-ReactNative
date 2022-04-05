import React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { MyButton } from './MyButton';
import { Input } from './Input';
import styles from '../styles';

export const Portugues = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: props.backColor}]}>
      <Image style={styles.imagem} source={require('../../assets/HeMan1.png')} />
      <Input
        style={styles.input}
        inputPlaceholder={props.input1Placeholder}
      />
      <Text style={styles.paragraph}>
        Pelos poderes de Grayskull...
      </Text>
      <Text style={styles.paragraph}>
        ...eu tenho a força!
      </Text>
      <View style={styles.itensContainer}>
        <Image style={styles.imagem} source={require('../../assets/HeMan2.png')} />
        <Image style={styles.imagem} source={require('../../assets/HeMan3.png')} />
      </View>
      <Text style={styles.paragraph}>
        Curte o He-Man?
      </Text>
      <View style={styles.itensContainer}>
        <MyButton
          text="Sim"
          btnColor={props.btn1Color}
        />
        <MyButton
          text="Lógico"
          btnColor={props.btn2Color}
        />
        <MyButton
          text="Claro!"
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
export default Portugues;
