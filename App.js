import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Switch } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [temperature, setTemperature] = useState('');
  const [isEnabled, setIsEnabled] = useState(false); 
  const [temperatureType, setTemperatureType] = useState('Fahrenheit');

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    isEnabled ? setTemperatureType("Fahrenheit") : setTemperatureType("Celsius");
  };

  const conversion = () => {
    console.log(temperatureType);

    if(temperature === ""){
      alert("No temperature data was entered!!!");
    }

    if(temperatureType == "Fahrenheit"){
      let celsius = ((temperature - 32) * (5/9)).toFixed(0);
      alert(temperature + " degrees Fahrenheit is " + celsius + " degrees Celsius!");
    } 
    else if(temperatureType == "Celsius"){
      let fahrenheit = ((temperature * (9/5) + 32)).toFixed(0);
      alert(temperature + " degrees Celsius is " + fahrenheit + " degrees Fahrenheit!");
    }

    setTemperature("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, width: "100%", alignItems: 'center', backgroundColor: "#4785EA", justifyContent: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: "bold", width: "100%", textAlign: 'center'}}>Temperature Conversion App</Text>
      </View>
      <View style={{backgroundColor: "#47C7EA", flex: 5}}>
        <TextInput style={styles.input} placeholder={"Enter your temperature in " + temperatureType} value={temperature} onChangeText={text => setTemperature(text)}/>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
            <Switch
            trackColor={{ false: 'grey', true: 'green' }}
            thumbColor={isEnabled ? 'white' : 'white'}
            ios_backgroundColor='grey'
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Button onPress={conversion} title='Convert' color="black"/>
          </View>
        </View>
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
