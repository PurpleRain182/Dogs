import * as React from 'react';
import { View, Image } from 'react-native';

//import styles from '../styles/SignUpScreen';

import { Container, Content, Form, Item, Input, Text, Button } from 'native-base';
export default class SignUpScreen extends React.Component {

    static navigationOptions = {
        title: 'User',
    };


    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                     <Image style={{
                        resizeMode: "center",
                        height: 150,
                        width: 150,
                        paddingLeft: 400
                    }}
                        source={require('../assets/logo.jpeg')}
                    /> 
                    <Form>
                        <View style={{ paddingBottom: 13, paddingRight: 20, paddingLeft: 20 }}>
                            <Item regular >
                                <Input placeholder='Nome completo' />
                            </Item>
                        </View>

                        <View style={{ paddingBottom: 13, paddingRight: 20, paddingLeft: 20 }}>
                            <Item regular >
                                <Input placeholder='E-mail' />
                            </Item>
                        </View>

                        <View style={{ paddingBottom: 13, paddingRight: 20, paddingLeft: 20 }}>
                            <Item regular >
                                <Input secureTextEntry={true} placeholder='Senha' />
                            </Item>
                        </View>

                        <View style={{ paddingBottom: 13, paddingRight: 20, paddingLeft: 20 }}>
                            <Item regular >
                                <Input placeholder='Telefone' />
                            </Item>
                        </View>

                        <Button full bordered light style={{ backgroundColor: '#ffd185', margin: 20, marginTop: 50 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Cadastrar</Text>
                        </Button>
                        <Text style={{ textAlign: 'center' }}>Ao cadastrar-se, você concorda com nossos</Text>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}> Termos e Política de Privacidade.</Text>
                    </Form>
                </Content>
            </Container>

        )
    }
}