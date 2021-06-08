import * as     React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Button
} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Text } from 'native-base';

//import styles from '../styles/Login';

const image = { uri: "https://i.pinimg.com/236x/83/02/5d/83025d90c8303cf6bf02fa749ef19acb.jpg" };

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
                        <ImageBackground source={image}
                            style={styles.image}>

                            <Form style={{ marginTop: 240 }} >
                                <Item stackedLabel>
                                    <Label style={styles.text}>Email</Label>
                                    <Input />
                                </Item>

                                <Item stackedLabel  >
                                    <Label style={styles.text}>Senha</Label>
                                    <Input />
                                </Item>
                            </Form>

                            <Button style={{ marginTop: 25 }}
                                title="Entrar"
                                onPress={() => navigation.navigate('Cadastro')}
                            />

                            <Text style={styles.text}>Não possui conta?</Text>

                            <Button style={{ marginTop: 20 }}
                                title="Faça seu cadastro aqui"
                                onPress={() => navigation.navigate('Cadastro')}
                            />
                        </ImageBackground>
                    </View>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10
    }
});