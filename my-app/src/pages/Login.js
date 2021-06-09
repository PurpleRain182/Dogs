import * as     React from 'react';
import { Link } from '@react-navigation/native';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Text, Button } from 'native-base';

import styles from '../styles/Login';


export default class Login extends React.Component {

    static navigationOptions = {
        title: 'User',
    };

    render() {
        const { navigation } = this.props;
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
                                <Input />
                            </Item>

                            <Item stackedLabel  >
                                <Label style={styles.text}>Senha</Label>
                                <Input />
                            </Item>
                        </Form>

                        <Button full rounded bordered light style={styles.button} onPress={() => navigation.navigate('Feed')}>
                            <Text style={styles.textButton}>Entrar</Text>
                        </Button>
                    
                        <Text style={styles.textNovaConta}>Esqueceu a senha?</Text>

                        <Text style={styles.textNovaConta}><Text style={styles.textSpace}>-------------------------------------</Text> ou <Text style={styles.textSpace}>-------------------------------------</Text></Text>

                        <Text style={styles.textNovaConta}>Não possui conta? <Text style={styles.textCadastro}><Link to="/Cadastro">Cadastre-se aqui.</Link></Text></Text>

                    </View>
                </Content>
            </Container>
        );
    }
}
