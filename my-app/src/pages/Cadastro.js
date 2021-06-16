import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { Container, Content, Form, Item, Input, Text, Button, Label } from 'native-base';
import api from '../services/api'
import styles from '../styles/Cadastro';

export default class Cadastro extends React.Component {

    static navigationOptions = {
        title: 'User',
    };

    state = {
        nome: '',
        email: '',
        senha: '',
        telefone: '',
        username: ''

    }

    handleNomeChange = (nome) => {
        this.setState({ nome });
    };

    handleEmailChange = (email) => {
        this.setState({ email });
    };

    handlePasswordChange = (senha) => {
        this.setState({ senha });
    };

    handleTelefoneChange = (telefone) => {
        this.setState({ telefone });
    };

    handleUsernameChange = (username) => {
        this.setState({ username });
    };

    render() {

        // const [nome, setNome] = useState(initialState=null);
        // const [email, setEmail] = useState(initialState=null);
        // const [senha, setSenha] = useState(initialState=null);
        // const [telefone, setTelefone] = useState(initialState=null);
        const { navigation } = this.props;

        const handleCadastro = async (nome, email, senha, telefone, username) => {
            const response = await api.post('/users', {
                nome,
                email,
                password: senha,
                telefone,
                username
            })

            console.warn(response)
            if (response.data) {
                navigation.navigate('Login')
            }
            else {
                Alert.alert("Erro no cadastro")
            }
        }

        return (
            <Container>
                <Content>
                    <Image style={styles.image}
                        source={require('../assets/logo.jpeg')}
                    />
                    <Form>
                        <View>
                            <Item floatingLabel>
                                <Label>Nome completo</Label>
                                <Input placeholder="Nome"
                                    value={this.state.nome}
                                    onChangeText={this.handleNomeChange}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                            </Item>
                        </View>

                        <View>
                            <Item floatingLabel>
                                <Label>E-mail</Label>
                                <Input placeholder="E-mail"
                                    value={this.state.email}
                                    onChangeText={this.handleEmailChange}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                            </Item>
                        </View>

                        <View>
                            <Item floatingLabel>
                                <Label>Senha</Label>
                                <Input secureTextEntry={true}
                                    placeholder="Senha"
                                    value={this.state.senha}
                                    onChangeText={this.handlePasswordChange}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                            </Item>
                        </View>

                        <View>
                            <Item floatingLabel>
                                <Label>Telefone</Label>
                                <Input keyboardType={'numeric'}
                                    placeholder="Telefone"
                                    value={this.state.telefone}
                                    onChangeText={this.handleTelefoneChange}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                            </Item>
                        </View>

                        <View>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChangeText={this.handleUsernameChange}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                            </Item>
                        </View>

                        <Button full rounded bordered light style={styles.button}
                            onPress={() => handleCadastro(this.state.nome, this.state.email, this.state.senha, this.state.telefone,
                                this.state.username)}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </Button>

                        <Text style={styles.textCadastro}>Ao cadastrar-se, você concorda com nossos</Text>
                        <Text style={styles.textCadastro1}>Termos e Política de Privacidade.</Text>

                        <Button style={styles.button}
                            title="Feed"
                            onPress={() => navigation.navigate('Feed')}>
                            <Text style={styles.textButton}>Feed</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>

        )
    }
}