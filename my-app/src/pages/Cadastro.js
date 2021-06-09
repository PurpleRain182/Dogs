import * as React from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Form, Item, Input, Text, Button, Label } from 'native-base';

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
                        <View>
                            <Item floatingLabel>
                                <Label>Nome completo</Label>
                                <Input />
                            </Item>
                        </View>

                        <View>
                            <Item floatingLabel>
                                <Label>E-mail</Label>
                                <Input />
                            </Item>
                        </View>

                        <View>
                            <Item floatingLabel>
                                <Label>Senha</Label>
                                <Input secureTextEntry={true} />
                            </Item>
                        </View>

                        <View>
                            <Item floatingLabel>
                                <Label>Telefone</Label>
                                <Input keyboardType={'numeric'} />
                            </Item>
                        </View>

                        <Button full rounded bordered light style={styles.button}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </Button>
                        <Text style={styles.textCadastro}>Ao cadastrar-se, você concorda com nossos</Text>
                        <Text style={styles.textCadastro1}>Termos e Política de Privacidade.</Text>
                        <Button style={styles.button}
                                title="Feed"
                                onPress={() => navigation.navigate('Feed')}/>
                    </Form>
                </Content>
            </Container>

        )
    }
}