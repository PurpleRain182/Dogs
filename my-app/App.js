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