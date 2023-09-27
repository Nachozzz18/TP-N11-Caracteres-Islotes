import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

function ContarIslotes(frase) {
  let count = 0;
  const caracteres = frase.split('');

    for (let i = 1; i<caracteres.length; i++) {
      if (caracteres[i - 1] === caracteres[i + 1]) {
        count++;
      }
    }

  return count;
}

export default function App() {
  const [frase, setFrase] = useState('');
  const [contadorIslotes, setContadorIslotes] = useState(null);

  const contarIslotes = () => {
    const count = ContarIslotes(frase);
    setContadorIslotes(count);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>Ingrese su frase: </Text>
      <TextInput
      style={styles.input}
        placeholder="Ingrese una frase"
        value={frase}
        onChangeText={(text) => setFrase(text)}
      />
      <Button 
        style={styles.button}
        title="Contar Islotes" 
        onPress={contarIslotes} />
      {contadorIslotes !== null && (
        <Text>La cantidad de islotes es: {contadorIslotes}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '70%',
    height: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'turquoise',
  },  
});
