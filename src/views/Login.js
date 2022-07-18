import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase/app';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

import ButtonPurple from '../components/ButtonPurple';

LogBox.ignoreAllLogs();

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      message: '',
      messageEmail: '',
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

  validateEmail(email) {
    // O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
    if (!email.length) {
      return 1;
    }

    let symbol = email.indexOf('@');
    if (symbol === -1) {
      return false;
    }

    let dot = email.indexOf('.');
    if (dot <= symbol + 2) {
      return false;
    }

    if (dot === email.length - 1) {
      return false;
    }

    return true;
  }

  processLogin() {
    this.setState({isLoading: true});
    const {email, password} = this.state;

    const validate = this.validateEmail(email);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        this.props.navigation.navigate('Navigator');
      })
      .catch(error => {
        if (!validate) {
          this.setState({messageEmail: 'E-mail inválido'});
          this.setState({message: ''});
        } else {
          this.setState({message: this.getMessageByError(error.code)});
          this.setState({messageEmail: ''});
        }
      })
      .then(() => {
        this.setState({isLoading: false});
      });
  }

  getMessageByError(code) {
    switch (code) {
      case 'auth/user-not-found':
        return 'E-mail inexistente.';
      case 'auth/wrong-password':
        return 'Senha incorreta';
      default:
        return 'Erro desconhecido';
    }
  }

  renderButton() {
    if (this.state.isLoading) {
      return <ActivityIndicator />;
    }
    return <ButtonPurple title="Entrar" onPress={() => this.processLogin()} />;
  }

  renderMessageEmail() {
    const {messageEmail} = this.state;

    if (!messageEmail) {
      return null;
    }

    return (
      <View>
        <Text style={styles.errorEmail}>{messageEmail}</Text>
      </View>
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
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Image
          style={styles.logoName}
          source={require('../assets/mind-booster.png')}
        />
        <View style={styles.form}>
          <TextInput
            style={styles.text}
            placeholder="E-mail"
            placeholderTextColor={'#6200EE'}
            value={this.state.email}
            textAlignVertical="top"
            onChangeText={value => {
              this.onChangeHandler('email', value);
            }}
          />
        </View>
        <View style={styles.errorEmailContainer}>
          {this.renderMessageEmail()}
        </View>
        <View style={styles.form}>
          <View style={styles.iconForm}>
            <TextInput
              style={styles.text}
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
        <View>
          <TouchableOpacity>
            <View style={styles.btnSenha}>
              <Text style={styles.btnSenhaText}>Esqueci a senha</Text>
            </View>
          </TouchableOpacity>
          {this.renderButton()}
          {this.renderMessage()}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Cadastre-se</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#423F5D',
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 132,
    height: 132,
    marginTop: 30,
  },
  logoName: {
    width: 258,
    height: 95,
    marginBottom: 50,
  },
  form: {
    width: 328,
    height: 56,
    borderBottomWidth: 2,
    borderBottomColor: '#6200EE',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 10,
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
  btnSenha: {
    marginBottom: 20,
  },
  btnSenhaText: {
    color: '#fff',
    textAlign: 'right',
  },
  btn: {
    backgroundColor: '#B58D97',
    width: 328,
    height: 46,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  btnText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '500',
  },
  error: {
    color: '#FF5353',
    fontSize: 12,
    marginLeft: 15,
    marginTop: 5,
  },
  errorEmailContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginLeft: 120,
  },
  errorEmail: {
    color: '#FF5353',
    fontSize: 12,
    marginBottom: 5,
  },
});
