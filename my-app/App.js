import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input } from 'react-native-elements';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de login</Text>
      <Button
        title="Faça seu cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
}

function TelaCadastro() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input
        placeholder='  Nome'
        leftIcon={{ type: 'ionicon', name: 'person-circle-outline' }}
      />
      <Input
        placeholder='  Email'
        leftIcon={{ type: 'ionicon', name: 'mail-outline' }}
      />
      <Input 
        placeholder="  Senha" 
        leftIcon={{ type: 'ionicon', name: 'key-outline' }}
        secureTextEntry={true} 
      />
      <Input 
      placeholder='  Telefone'
      leftIcon={{ type: 'ionicon', name: 'call-outline' }}
      keyboardType = 'numeric'
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;