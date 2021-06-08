import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Content, Form, Body, Card, Icon, Item, Input, Label, Text, Button, CardItem, Right, Left, Thumbnail } from 'native-base';

function HomeScreen({ navigation }) {
  return (
    <Container>
      <Content>
        <Text>Tela de login</Text>
        <Button
          onPress={() => navigation.navigate('Cadastro')}>
          <Text>Tela de Cadastro</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate('Feed')}>
          <Text>Feed de notícias</Text>
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
          <Item stackedLabel>
            <Label>Nome</Label>
            <Input />
          </Item>
          <Item stackedLabel >
            <Label>Email</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Senha</Label>
            <Input />
          </Item>
          <Item stackedLabel >
            <Label>Telefone</Label>
            <Input />
          </Item>
          <Item regular>
            <Input style={{ color: 'red' }} placeholderTextColor='red' placeholder='Regular Textbox' />
          </Item>
          <Item regular>
            <Input placeholderTextColor='yellow' placeholder='Regular Textbox' />
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

function NewsFeed() {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('./assets/logo.png')} />
              <Body>
                <Text>Nome do pet</Text>
                <Text note>Nome do dono</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('./assets/logo.png')} />
              <Body>
                <Text>Nome do pet</Text>
                <Text note>Nome do dono</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
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
        <Stack.Screen name="Feed" component={NewsFeed} options={{
          title: 'Feed de notícias',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;