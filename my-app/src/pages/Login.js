import React, { useState } from "react"
import { Link } from '@react-navigation/native';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Text, Button } from 'native-base';
import styles from '../styles/Login';
import api from "../services/api"

export default class Login extends React.Component {

    static navigationOptions = {
        title: 'User',
    };

    state = {
        email: '',
        senha: ''
    }

    handleEmailChange = (email) => {
        this.setState({ email });
    };

    handlePasswordChange = (senha) => {
        this.setState({ senha });
    };

    render() {

        const { navigation } = this.props;

        const handleLogin = async (email, senha) => {
            const response = await api.post('/sessions', {
                email: email,
                password: senha
            })
            if (response.data) {
                navigation.navigate('Feed')
            }
            else {
                Alert.alert('Erro no Login')
            }
        }

        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <Image style={styles.image}
                            source={require('../assets/logo.jpeg')}
                        />
                        <Form style={{ marginTop: 100 }} >
                            <Item stackedLabel>
                                <Label style={styles.text}>Email</Label>
                                <Input placeholder="Endereço de e-mail" value={this.state.email} onChangeText={this.handleEmailChange} autoCapitalize="none" autoCorrect={false} />
                            </Item>

                            <Item stackedLabel  >
                                <Label style={styles.text}>Senha</Label>
                                <Input placeholder="Senha" value={this.state.password} onChangeText={this.handlePasswordChange} autoCapitalize="none" autoCorrect={false} secureTextEntry />
                            </Item>
                        </Form>

                        <Button full rounded bordered light style={styles.button} onPress={() => handleLogin(this.state.email, this.state.senha)}>
                            <Text style={styles.textButton}>Entrar</Text>
                        </Button>

                        <Text style={styles.textNovaConta}>Esqueceu a senha?</Text>

                        <Text style={styles.textNovaConta}><Text style={styles.textSpace}>-----------------------</Text> ou <Text style={styles.textSpace}>-----------------------</Text></Text>

                        <Text style={styles.textNovaConta}>Não possui conta? <Text style={styles.textCadastro}><Link to="/Cadastro">Cadastre-se aqui.</Link></Text></Text>

                    </View>
                </Content>
            </Container>
        );
    }
}
