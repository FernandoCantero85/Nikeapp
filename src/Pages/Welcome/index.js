import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2AA89E" />
      <ScrollView contentContainerStyle={styles.homeContent}>
        {/* Logo Nike */}
        <View style={styles.nikeLogo}>
          <Image
            source={require('../../../assets/image/logo-Nike-branco.png')}
            style={styles.imagelogo}
            resizeMode="cover"
          />
        </View>

        {/* Imagem do Tênis */}
        <View style={styles.shoeContainer}>
          <Image
            source={require('../../../assets/image/tennis_2.png')}
            style={styles.imagetenis}
          />
        </View>

        {/* Título */}
        <Text style={styles.summerTitle}>SUMMER</Text>
        <Text style={styles.summerTitle}>COLLECTIONS</Text>
        <Text style={styles.yearTitle}>2022</Text>

        {/* Descrição */}
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
          porta ante. Suspendisse a massa vitae justo lacinia accumsan.
        </Text>

        {/* Botão Começar */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.startButtonText}>COMEÇAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2AA89E',
  },
  homeContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  nikeLogo: {
    paddingVertical: 55,
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  shoeContainer: {
    width: width * 0.8,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  summerTitle: {
    width: '100%',
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#144273',
    letterSpacing: 2,
    fontFamily: 'sans-serif',
  },

  yearTitle: {
    width: '100%',
    textAlign: 'left',
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
  },
  imagetenis: {
    height: 300,
    width: 300,
  },
  imagelogo: {
    height: 35,
  },
  description: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  startButton: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#FDB913',
    paddingVertical: 18,
    paddingHorizontal: 100,
    borderRadius: 30,
    marginBottom: 40,
  },
  startButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
