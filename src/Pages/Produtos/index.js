import {
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Produtos() {
  const navigation = useNavigation();
  const [selectedShoe, setSelectedShoe] = useState(0);

  const shoes = [
    {
      id: 0,
      color: '#FFE082',
      name: 'Kyrie Infinity',
      image: require('../../../assets/image/thumb_tennis_2.png'),
    },
    {
      id: 1,
      color: '#4A90E2',
      name: 'Air Force',
      image: require('../../../assets/image/thumb_tennis_1.png'),
    },
    {
      id: 2,
      color: '#FFB6C1',
      name: 'Air Max',
      image: require('../../../assets/image/thumb_tennis_3.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.productsContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Image
          source={require('../../../assets/image/logo-Nike-Verde.png')}
          style={styles.imagelogo}
          resizeMode="cover"
        />{' '}
        <View style={styles.profileIcon}>
          <Text style={styles.profileEmoji}>👤</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.productsContent}>
        {/* Carrossel de Tênis */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}>
          {shoes.map((shoe) => (
            <TouchableOpacity
              key={shoe.id}
              style={[
                styles.shoeCard,
                { backgroundColor: shoe.color },
                selectedShoe === shoe.id && styles.selectedCard,
              ]}
              onPress={() => setSelectedShoe(shoe.id)}>
              <Image
                source={shoe.image}
                style={styles.shoeImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Imagem Principal do Tênis */}
        <View style={styles.mainShoeContainer}>
          <View style={styles.mainShoePlaceholder}>
            <Image
              source={shoes[selectedShoe].image}
              style={styles.mainShoeImage}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Informações do Produto */}
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{shoes[selectedShoe].name}</Text>
          <Text style={styles.productCategory}>Calçados para Basquete</Text>

          <Text style={styles.productDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vitae porta ante. Suspendisse a massa vitae justo lacinia accumsan.
          </Text>

          <Text style={styles.priceLabel}>Preço</Text>
          <Text style={styles.price}>$ 799</Text>
        </View>

        {/* Botões de Ação */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.shareButton}>
<Image
          source={require('../../../assets/image/share_icon.png')}
          style={styles.imagelogo}
          resizeMode="cover"
        />{' '}          </TouchableOpacity>
          <TouchableOpacity style={styles.cartButton}>
<Image
          source={require('../../../assets/image/shopping_bag_icon.png')}
          style={styles.imagelogo}
          resizeMode="cover"
        />{' '}          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuIcon: {
    fontSize: 24,
    color: '#333333',
  },
 
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileEmoji: {
    fontSize: 20,
  },
  productsContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  carousel: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "flex-start",

  },
  shoeCard: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCard: {
    borderWidth: 3,
    borderColor: '#2AA89E',
  },
  shoeImage: {
    width: 70,
    height: 70,
  },
  mainShoeContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainShoePlaceholder: {
    width: "100%",
    height: 250,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainShoeImage: {
    width: "100%",
    height: 250,
  },
  productInfo: {
    marginBottom: 70,
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1B5E56',
    marginBottom: 5,
  },
  productCategory: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
  },
  productDescription: {
    fontSize: 14,
    color: '#999999',
    lineHeight: 22,
    marginBottom: 20,
  },
  priceLabel: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 5,
  },
  price: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1B5E56',
  },
  actionButtons: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
    paddingBottom: 30,
  },
  shareButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2AA89E',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
