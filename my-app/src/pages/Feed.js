import * as React from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../styles/Feed';


function Feed() {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://st3.depositphotos.com/19428878/37137/v/450/depositphotos_371377450-stock-illustration-default-avatar-profile-image-vector.jpg' }} />
              <Body>
                <Text>Gustavo Figueiredo</Text>
                <Text note>@gustavofigueiredo</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg' }} style={styles.image} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Text>2 meses</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="paw-outline" />
                <Text>Preguiçosa</Text>
              </Button>
            </Body>
            <Right>
              <Icon style={styles.shareIcon} active name="share-social-outline" />
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://st3.depositphotos.com/19428878/37137/v/450/depositphotos_371377450-stock-illustration-default-avatar-profile-image-vector.jpg' }} />
              <Body>
                <Text>Ronaldo Alves</Text>
                <Text note>@ronaldoalves</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg' }} style={styles.image} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Text>6 anos</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="paw-outline" />
                <Text>Amoroso</Text>
              </Button>
            </Body>
            <Right>
              <Icon style={styles.shareIcon} active name="share-social-outline" />
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://st3.depositphotos.com/19428878/37137/v/450/depositphotos_371377450-stock-illustration-default-avatar-profile-image-vector.jpg' }} />
              <Body>
                <Text>@anacarolina</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'https://exame.com/wp-content/uploads/2017/04/animal.png?w=640' }} style={styles.image} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Text>4 meses</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="paw-outline" />
                <Text>Dorminhoco</Text>
              </Button>
            </Body>
            <Right>
              <Icon style={styles.shareIcon} active name="share-social-outline" />
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://st3.depositphotos.com/19428878/37137/v/450/depositphotos_371377450-stock-illustration-default-avatar-profile-image-vector.jpg' }} />
              <Body>
                <Text>@brunaalves</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'https://www.saopaulo.sp.gov.br/wp-content/uploads/2017/03/CACHORRO1.jpg' }} style={styles.image} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Text>1 ano</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="paw-outline" />
                <Text>Brincalhona</Text>
              </Button>
            </Body>
            <Right>
              <Icon style={styles.shareIcon} active name="share-social-outline" />
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
function Upload() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Fazer upload de foto</Text>
    </View>
  );
}
function Buscar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Buscar</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#F8CC8F' }}>
      <Tab.Screen name="Feed" component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Upload" component={Upload}
       options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="camera-enhance" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Buscar" component={Buscar} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default App;