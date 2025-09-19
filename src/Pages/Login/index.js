import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  StatusBar, 
  Image, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.loginContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView contentContainerStyle={styles.loginContent}>
        
        {/* Logo Nike Grande */}
        <View style={styles.nikeLogoLarge}>
          <Text style={styles.nikeTextLarge}></Text>
        </View>

        {/* Imagem do Tênis Air Force */}
        <View style={styles.airForceContainer}>
          <Image
            source={require('../../../assets/image/login_img.png')}
            style={styles.imagelogin}
            resizeMode="contain"
          />          
        </View>

        {/* Título Login */}
        <Text style={styles.loginTitle}>LOGIN</Text>

        {/* Campos de Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="E-MAIL"
            placeholderTextColor="#B0B0B0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="SENHA"
            placeholderTextColor="#B0B0B0"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
        </View>

        {/* Botão Entrar */}
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => navigation.navigate('Produtos')}
        >
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imagelogin: {
    height: 300,
    width: 393,
    alignItems: 'center',
  },
  loginContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  nikeLogoLarge: {
    marginBottom: 40,
  },
  nikeTextLarge: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#B0B0B0',
    letterSpacing: -2,
  },
  airForceContainer: {
    width: width * 0.7,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  loginTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#144273',
    marginBottom: 30,
    letterSpacing: 2,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 14,
    color: '#333333',
  },
  loginButton: {
    backgroundColor: '#FDB913',
    paddingVertical: 18,
    paddingHorizontal: 80,
    borderRadius: 30,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
