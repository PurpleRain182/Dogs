import * as React from 'react';
import { View, SafeAreaView, Image, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Input, Text, Button, Icon, Left, Body, Right, Header, Item } from 'native-base';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import styles from '../styles/Feed';

let openImagePickerAsync = async () => {
  let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();
  console.log(pickerResult);
}


function Feed() {
  return (
    <Container style={styles.container}>
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
    <Container style={styles.container}>
      <Content padder>
        <Content>
          <Image style={styles.uploadImage}
            source={require('../assets/uploadfoto.jpg')}
          />
        </Content>
        <Content>
          <Text note style={styles.uploadText}>
            Para cadastrar a foto de um pet, escolha a partir da sua galeria
          </Text>
        </Content>
        <Button rounded onPress={openImagePickerAsync} style={styles.uploadButton}>
          <Text style={{ color: 'black' }}>Escolha uma foto para fazer upload</Text>
        </Button>
      </Content>
    </Container>
  );
}
function Buscar() {
  return (
    <Container style={styles.container}>
      <Header searchBar rounded style={{ backgroundColor: '#F8CC8F' }}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Pesquisar" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <Content padder>
        <Text note>Pesquisas recentes</Text>
      </Content>
    </Container>
  );
}

function Perfil() {
  return (
    <Container style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <Button transparent>
              <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
            </Button>
            <Button transparent>
              <Ionicons name="ellipsis-vertical-outline" size={24} color="#52575D"></Ionicons>
            </Button>
          </View>

          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              <Image source={{ uri: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.18169-9/960028_540093559394021_1398108872_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=de6eea&_nc_eui2=AeEgkGVqsireovZ6AF0pDINUWtVq6udm7Uta1Wrq52btS7tcUhUdvfj86-crVqJNABDSrOBkL5Mo6p-5mxzH1UmW&_nc_ohc=d5ATpFKfI9kAX9jteua&tn=W9PSQbeRvkbJ7gD4&_nc_ht=scontent-gig2-1.xx&oh=f471186f97373b359a2c0f655a3d2817&oe=612C6AE1' }} style={styles.image} resizeMode="center"></Image>
            </View>
            <View style={styles.add}>
              <Ionicons name="add-circle-outline" size={36} color="black" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Ronaldo</Text>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>juninho_custodio@hotmail.com</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 24 }]}>5</Text>
              <Text style={[styles.text, styles.subText]}>Pets</Text>
            </View>
          </View>

          <View style={{ marginTop: 32 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.mediaImageContainer}>
                <Image source={{ uri: 'https://www.saopaulo.sp.gov.br/wp-content/uploads/2017/03/CACHORRO1.jpg' }} style={styles.image} resizeMode="cover"></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                <Image source={{ uri: 'https://www.saopaulo.sp.gov.br/wp-content/uploads/2017/03/CACHORRO1.jpg' }} style={styles.image} resizeMode="cover"></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                <Image source={{ uri: 'https://www.saopaulo.sp.gov.br/wp-content/uploads/2017/03/CACHORRO1.jpg' }} style={styles.image} resizeMode="cover"></Image>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Container>
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
        <Tab.Screen name="Perfil" component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default App;