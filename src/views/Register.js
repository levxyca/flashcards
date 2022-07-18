import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

import ButtonPurple from '../components/ButtonPurple';

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
      isLoading: false,
      message: '',
    };
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBlDbsgR2_tinDRVV6jKRFv3FU5s8jWC8Y',
      authDomain: 'flashcards-a5dc9.firebaseapp.com',
      projectId: 'flashcards-a5dc9',
      storageBucket: 'flashcards-a5dc9.appspot.com',
      messagingSenderId: '45910909574',
      appId: '1:45910909574:web:7a03882b9cc220bba8a707',
      measurementId: 'G-MGR4KZS0SQ',
    };

    firebase.initializeApp(firebaseConfig);
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value,
    });
  }

  processRegister() {
    this.setState({isLoading: true});

    const {email, password, repeatPassword} = this.state;

    if (password === repeatPassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          this.setState({message: 'Cadastrado!'});
          this.props.navigation.navigate('Login');
        })
        .catch(error => {
          this.setState({message: this.getMessageByError(error.code)});
        })
        .then(() => {
          this.setState({isLoading: false});
        });
    } else {
      this.setState({message: 'Senha não confere'});
      this.setState({isLoading: false});
    }
  }

  getMessageByError(code) {
    switch (code) {
      case 'auth/invalid-recipient-email':
        return 'E-mail inválido.';
      default:
        return 'Erro desconhecido';
    }
  }

  renderButton() {
    if (this.state.isLoading) {
      return <ActivityIndicator />;
    }
    return (
      <ButtonPurple title="Cadastrar" onPress={() => this.processRegister()} />
    );
  }

  renderMessage() {
    const {message} = this.state;

    if (!message) {
      return null;
    }

    return (
      <View>
        <Text style={styles.error}>{message}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Image
            style={styles.logoName}
            source={require('../assets/mind-booster.png')}
          />
        </View>
        <Text style={styles.title}>Preencha os dados do seu cadastro</Text>
        <View style={styles.containerForm}>
          <View>
            <TextInput
              textAlignVertical="top"
              style={styles.text}
              placeholder="E-mail"
              placeholderTextColor={'#6200EE'}
              value={this.state.email}
              onChangeText={value => {
                this.onChangeHandler('email', value);
              }}
            />
            <View style={styles.form}>
              <View style={styles.iconForm}>
                <TextInput
                  textAlignVertical="top"
                  placeholder="Senha"
                  placeholderTextColor={'#6200EE'}
                  secureTextEntry
                  value={this.state.password}
                  onChangeText={value => {
                    this.onChangeHandler('password', value);
                  }}
                />
                <Icon style={styles.icon} name="eye" />
              </View>
            </View>
            <View style={styles.form}>
              <View style={styles.iconForm}>
                <TextInput
                  textAlignVertical="top"
                  placeholder="Repetir senha"
                  placeholderTextColor={'#6200EE'}
                  secureTextEntry
                  value={this.state.repeatPassword}
                  onChangeText={value => {
                    this.onChangeHandler('repeatPassword', value);
                  }}
                />
                <Icon style={styles.icon} name="eye" />
              </View>
              <View style={styles.errorContainer}>{this.renderMessage()}</View>
            </View>
          </View>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#423F5D',
    height: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 64,
    height: 64,
  },
  logoName: {
    width: 129,
    height: 48,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    color: '#fff',
    marginBottom: 70,
  },
  containerForm: {
    alignItems: 'center',
  },
  text: {
    width: 328,
    height: 56,
    borderBottomWidth: 2,
    borderBottomColor: '#6200EE',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingLeft: 15,
  },
  errorContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  error: {
    color: '#FF5353',
    fontSize: 12,
  },
  form: {
    width: 328,
    height: 56,
    borderBottomWidth: 2,
    borderBottomColor: '#6200EE',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingLeft: 15,
  },
  iconForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 24,
    color: '#000',
    alignSelf: 'center',
    marginRight: 15,
  },
});
