import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Content, Form, Item, Input, Label, Text, Button } from 'native-base';

function HomeScreen({ navigation }) {
  return (
    <Container>
      <Content>
        <Text>Tela de login</Text>
        <Button
          onPress={() => navigation.navigate('Cadastro')}>
          <Text>Tela de Cadastro</Text>
        </Button>
      </Content>
    </Container>
  );
}

function TelaCadastro() {
  return (
    <Container>
      <Content>
        <Image style={{ resizeMode: "center", height: 100, width: 100, paddingLeft: 350 }}
          source={require('./assets/logo.png')}
        />
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
          <Button full rounded bordered light style={{ margin: 20, marginTop: 50 }}>
            <Text>Cadastrar</Text>
          </Button>
          <Text style={{ textAlign: 'center' }}>Ao cadastrar-se, você concorda com nossos <Text style={{ fontWeight: 'bold' }}>Termos de Política e Privacidade</Text></Text>
        </Form>
      </Content>
    </Container>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} options={{
          title: 'Cadastro',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;