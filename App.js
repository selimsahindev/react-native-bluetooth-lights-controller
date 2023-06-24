import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const App = () => {
  const [isButtonOn, setIsButtonOn] = useState(false);

  const handleButtonPress = () => {
    setIsButtonOn(!isButtonOn);
  };

  const buttonBackgroundColor = isButtonOn ? 'red' : 'green';
  const buttonText = isButtonOn ? 'Off' : 'On';
  const statusText = isButtonOn ? 'Lights turned on!' : 'Lights turned off!';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{statusText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  statusContainer: {
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#AAAAAA',
  },
});

export default App;