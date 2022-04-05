import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Portugues from './src/components/Portugues';
import Ingles from './src/components/Ingles';

export default function App() {
  return (
    <View>
      <Portugues 
        backColor="#FF1493"
        btn1Color="#9370DB" 
        btn2Color="#800080" 
        btn3Color="#4B0082"
        input1Placeholder="Já assistiu He-Man?"
        input2Placeholder="Fale sobre o He-Man"
        input3Placeholder="Qual sua idade?" />
      <Ingles 
        backColor="#4B0082"
        btn1Color="#9370DB" 
        btn2Color="#800080" 
        btn3Color="#FF00FF"
        input1Placeholder="Who is He?"
        input2Placeholder="Talk about Skeletor"
        input3Placeholder="How old are you?" />  
    </View>
  );
}