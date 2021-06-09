import * as React from 'react';
import { View, Image } from 'react-native';

import styles from '../styles/Cadastro';

import { Container, Content, Form, Item, Input, Text, Button } from 'native-base';
export default class Cadastro extends React.Component {

    static navigationOptions = {
        title: 'User',
    };


    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                    <Image style={styles.image}
                        source={require('../assets/logo.jpeg')}
                    />
                    <Form>
                        <View style={styles.view}>
                            <Item regular >
                                <Input placeholder='Nome completo' />
                            </Item>
                        </View>

                        <View style={styles.view}>
                            <Item regular >
                                <Input placeholder='E-mail' />
                            </Item>
                        </View>

                        <View style={styles.view}>
                            <Item regular >
                                <Input secureTextEntry={true} placeholder='Senha' />
                            </Item>
                        </View>

                        <View style={styles.view}>
                            <Item regular >
                                <Input placeholder='Telefone' />
                            </Item>
                        </View>

                        <Button full bordered light style={styles.button}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </Button>
                        <Text style={styles.textCadastro}>Ao cadastrar-se, você concorda com nossos</Text>
                        <Text style={styles.textCadastro1}>Termos e Política de Privacidade.</Text>
                    </Form>
                </Content>
            </Container>

        )
    }
}