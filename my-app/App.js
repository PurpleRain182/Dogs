import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { Container, Content, Form, Item, Input, Label, Icon, ListItem, Left, Body, Text } from 'native-base';

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
    <Container>
      <Content>
        <Form>
          <Item stackedLabel >
            <Label>Nome</Label>
            <Input />
          </Item>
          <Item stackedLabel >
            <Label>Email</Label>
            <Input />
          </Item>
          <Item stackedLabel >
            <Label>Senha</Label>
            <Input />
          </Item>
          <Item stackedLabel >
            <Label>Telefone</Label>
            <Input />
          </Item>
        </Form>
      </Content>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Salvar"
          type="outline"
        />
      </View>
    </Container>
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