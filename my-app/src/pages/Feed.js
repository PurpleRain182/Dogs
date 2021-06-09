import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import styles from '../styles/Feed';

export default class Feed extends Component {

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg' }} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: 'https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg' }} style={ styles.image } />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>12 anos</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="paw-outline" />
                  <Text>Brincalhona</Text>
                </Button>
              </Body>
              <Right>
              <Icon style = {styles.shareIcon} active name="share-social-outline" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}