import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const convertFromFahrenheitToCelsius = () => {
    let celsius = (inputValue - 32) * (5/9);
    alert(inputValue + " degrees Fahrenheit is " + celsius + " degrees Celsius!")
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, width: "100%", alignItems: 'center', backgroundColor: "#4785EA", justifyContent: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: "bold", width: "100%", textAlign: 'center'}}>Temperature Conversion App</Text>
      </View>
      <View style={{backgroundColor: "#47C7EA", flex: 3}}>
        <TextInput style={styles.input} placeholder='Enter your temperature' value={inputValue} onChangeText={text => setInputValue(text)}/>
        <Button onPress={convertFromFahrenheitToCelsius} title='Convert'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
    flexDirection: "column"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    textAlign: 'center'
  },
});
