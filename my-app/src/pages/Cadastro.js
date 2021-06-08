import * as React from 'react';
import { View, Image } from 'react-native';

//import styles from '../styles/SignUpScreen';

import { Container, Content, Form, Item, Input, Label, Text, Button } from 'native-base';
export default class SignUpScreen extends React.Component {

    static navigationOptions = {
        title: 'User',
    };


    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                    {/* <Image style={{
                        resizeMode: "center",
                        height: 150,
                        width: 150,
                        paddingLeft: 400
                    }}
                        source={require('./src/assets/logo.png')}
                    /> */}
                    <Form>
                        <View style={{ paddingBottom: 13, paddingRight: 5, paddingLeft: 5 }}>
                            <Item regular >
                                <Input style={{
                                    backgroundColor: 'black'
                                }} placeholderTextColor='white' placeholder='Nome completo' />
                            </Item>
                        </View>

                        <View style={{ paddingBottom: 13, paddingRight: 5, paddingLeft: 5 }}>
                            <Item regular >
                                <Input style={{
                                    backgroundColor: 'black'
                                }} placeholderTextColor='white'
                                    placeholder='E-mail' />
                            </Item>
                        </View>

                        <View style={{ paddingBottom: 13, paddingRight: 5, paddingLeft: 5 }}>
                            <Item regular >
                                <Input style={{
                                    backgroundColor: 'black'
                                }} placeholderTextColor='white' placeholder='Senha' />
                            </Item>
                        </View>

                        <View style={{ paddingBottom: 13, paddingRight: 5, paddingLeft: 5 }}>
                            <Item regular >
                                <Input style={{
                                    backgroundColor: 'black'
                                }} placeholderTextColor='white' placeholder='Telefone' />
                            </Item>
                        </View>

                        <Button full rounded bordered light style={{ backgroundColor: 'black', margin: 20, marginTop: 50 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Cadastrar</Text>
                        </Button>
                        <Text style={{ textAlign: 'center' }}>Ao cadastrar-se, você concorda com nossos</Text>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}> Termos e Política de Privacidade.</Text>
                    </Form>
                </Content>
            </Container>

        )
    }
}