// // App.js
// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import routes from './src/Routes/index';

// import {LinearGradient} from 'expo-linear-gradient';
// import * as Font from 'expo-font';

// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   ActivityIndicator,
//   TextInput,  
//   TouchableOpacity,
//   Image,
//   StatusBar,
//   SafeAreaView,
//   Dimensions
// } from 'react-native';

// const { width, height } = Dimensions.get('window');

// // Tela Inicial - Summer Collections
// const HomeScreen = ({ navigation }) => {
//   return (
    
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#2AA89E" />
//       <ScrollView contentContainerStyle={styles.homeContent}>
      
//         {/* Logo Nike */}
//         <View style={styles.nikeLogo}>
//         <Image
//           source={require('./assets/image/logo-Nike-branco.png')}
//           style={styles.imagelogo}
//           resizeMode="cover"
//         />
//         </View>

//         {/* Imagem do Tênis */}
//         <View style={styles.shoeContainer}>
//           <Image
//           source={require('./assets/image/tennis_2.png')}
//           style={styles.imagetenis}

//         />
//         </View>

//         {/* Título */}
//         <Text style={styles.summerTitle}>SUMMER</Text>
//         <Text style={styles.collectionsTitle}>COLLECTIONS</Text>
//         <Text style={styles.yearTitle}>2022</Text>

//         {/* Descrição */}
//         <Text style={styles.description}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae porta ante. 
//           Suspendisse a massa vitae justo lacinia accumsan.
//         </Text>

//         {/* Botão Começar */}
//         <TouchableOpacity 
//           style={styles.startButton}
//           onPress={() => navigation.navigate('Login')}
//         >
//           <Text style={styles.startButtonText}>COMEÇAR</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>

//   );
// };

// // Tela de Login
// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');

//   return (
//     <SafeAreaView style={styles.loginContainer}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
//       <ScrollView contentContainerStyle={styles.loginContent}>
//         {/* Logo Nike Grande */}
//         <View style={styles.nikeLogoLarge}>
//           <Text style={styles.nikeTextLarge}></Text>
//         </View>

//         {/* Imagem do Tênis Air Force */}
//         <View style={styles.airForceContainer}>
//           <Image
//           source={require('./assets/image/login_img.png')}
//           style={styles.imagelogin}
//           resizeMode="cover"
//         />          
//         </View>

//         {/* Título Login */}
//         <Text style={styles.loginTitle}>LOGIN</Text>

//         {/* Campos de Input */}
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="E-MAIL"
//             placeholderTextColor="#B0B0B0"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
          
//           <TextInput
//             style={styles.input}
//             placeholder="SENHA"
//             placeholderTextColor="#B0B0B0"
//             value={senha}
//             onChangeText={setSenha}
//             secureTextEntry
//           />
//         </View>

//         {/* Botão Entrar */}
//         <TouchableOpacity 
//           style={styles.loginButton}
//           onPress={() => navigation.navigate('Products')}
//         >
//           <Text style={styles.loginButtonText}>ENTRAR</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // Tela de Produtos
// const ProductsScreen = ({ navigation }) => {
//   const [selectedShoe, setSelectedShoe] = useState(0);

//   const shoes = [
//     { id: 0, color: '#FFE082', name: 'Kyrie Infinity', emoji: '👟' },
//     { id: 1, color: '#4A90E2', name: 'Air Force', emoji: '👟' },
//     { id: 2, color: '#FFB6C1', name: 'Air Max', emoji: '👟' }
//   ];

//   return (
//     <SafeAreaView style={styles.productsContainer}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.menuIcon}>☰</Text>
//         </TouchableOpacity>
//         <Text style={styles.nikeLogo2}>✓</Text>
//         <View style={styles.profileIcon}>
//           <Text style={styles.profileEmoji}>👤</Text>
//         </View>
//       </View>

//       <ScrollView contentContainerStyle={styles.productsContent}>
//         {/* Carrossel de Tênis */}
//         <ScrollView 
//           horizontal 
//           showsHorizontalScrollIndicator={false}
//           style={styles.carousel}
//         >
//           {shoes.map((shoe) => (
//             <TouchableOpacity
//               key={shoe.id}
//               style={[
//                 styles.shoeCard,
//                 { backgroundColor: shoe.color },
//                 selectedShoe === shoe.id && styles.selectedCard
//               ]}
//               onPress={() => setSelectedShoe(shoe.id)}
//             >
//               <Text style={styles.shoeEmoji}>{shoe.emoji}</Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         {/* Imagem Principal do Tênis */}
//         <View style={styles.mainShoeContainer}>
//           <View style={styles.mainShoePlaceholder}>
//             <Text style={styles.mainShoeEmoji}>👟</Text>
//           </View>
//         </View>

//         {/* Informações do Produto */}
//         <View style={styles.productInfo}>
//           <Text style={styles.productName}>KYRIE INFINITY</Text>
//           <Text style={styles.productCategory}>Calçados para Basquete</Text>
          
//           <Text style={styles.productDescription}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//             Quisque vitae porta ante. Suspendisse a massa vitae justo 
//             lacinia accumsan.
//           </Text>

//           <Text style={styles.priceLabel}>Preço</Text>
//           <Text style={styles.price}>$ 799</Text>
//         </View>

//         {/* Botões de Ação */}
//         <View style={styles.actionButtons}>
//           <TouchableOpacity style={styles.shareButton}>
//             <Text style={styles.buttonIcon}>↗</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.cartButton}>
//             <Text style={styles.buttonIcon}>🛒</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// Navigation Container (Simulado)
// const App = () => {
//   const [currentScreen, setCurrentScreen] = useState('Home');

//   const navigation = {
//     navigate: (screen) => setCurrentScreen(screen),
//     goBack: () => {
//       if (currentScreen === 'Login') setCurrentScreen('Home');
//       if (currentScreen === 'Products') setCurrentScreen('Login');
//     }
//   };

//   const renderScreen = () => {
//     switch (currentScreen) {
//       case 'Home':
//         return <HomeScreen navigation={navigation} />;
//       case 'Login':
//         return <LoginScreen navigation={navigation} />;
//       case 'Products':
//         return <ProductsScreen navigation={navigation} />;
//       default:
//         return <HomeScreen navigation={navigation} />;
//     }
//   };

//   return renderScreen();
// };

// // Estilos
// const styles = StyleSheet.create({
//   // Home Screen
//   container: {
//     flex: 1,
//     backgroundColor: '#2AA89E',
//   },
//   homeContent: {
//     flexGrow: 1,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 30,
//   },
//   nikeLogo: {
//     alignSelf: 'flex-start',
//     marginBottom: 40,
//   },
//   nikeText: {
//     color: '#FFFFFF',
//     fontSize: 40,
//     fontWeight: 'bold',
//   },
//   shoeContainer: {
//     width: width * 0.8,
//     height: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 40,
//   },
 
//   shoePlaceholderText: {
//     fontSize: 80,

//   },
//   summerTitle: {
    
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#144273',
//     letterSpacing: 2,
//     fontFamily: 'Holtwood',
//   },
//   collectionsTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#144273',
//     letterSpacing: 2,
//     marginBottom: 5,
//     fontFamily: 'Holtwood',

//   },
//   yearTitle: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 30,
//   },

//   imagetenis: {
//     height: 300,
//     width: 300,
    
//   },

//   imagelogo: {
//     height: 35,

//   },
//   imagelogin: {
//    height: 170,
//     width: 280,
//     alignItems: 'center',

//   },


//   description: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     textAlign: 'center',
//     lineHeight: 22,
//     marginBottom: 40,
//     paddingHorizontal: 20,
//   },
//   startButton: {
//     backgroundColor: '#FDB913',
//     paddingVertical: 18,
//     paddingHorizontal: 80,
//     borderRadius: 30,
//     marginBottom: 40,
//   },
//   startButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//     letterSpacing: 1,
//   },

//   // Login Screen
//   loginContainer: {
//     flex: 1,
//     backgroundColor: '',
//   },
//   loginContent: {
//     flexGrow: 1,
//     alignItems: 'center',
//     paddingHorizontal: 30,
//     paddingTop: 50,
//   },
//   nikeLogoLarge: {
//     marginBottom: 40,
//   },
//   nikeTextLarge: {
//     fontSize: 60,
//     fontWeight: 'bold',
//     color: '#B0B0B0',
//     letterSpacing: -2,
//   },
//   airForceContainer: {
//     width: width * 0.7,
//     height: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
  
//   airForceText: {
//     fontSize: 80,
//   },
//   loginTitle: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     color: '#144273',
//     marginBottom: 30,
//     letterSpacing: 2,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 30,
//   },
//   input: {
//     backgroundColor: '#F5F5F5',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginBottom: 15,
//     fontSize: 14,
//     color: '#333333',
//   },
//   loginButton: {
//     backgroundColor: '#FDB913',
//     paddingVertical: 18,
//     paddingHorizontal: 80,
//     borderRadius: 30,
//   },
//   loginButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//     letterSpacing: 1,
//   },

//   // Products Screen
//   productsContainer: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   menuIcon: {
//     fontSize: 24,
//     color: '#333333',
//   },
//   nikeLogo2: {
//     fontSize: 30,
//     color: '#2AA89E',
//     fontWeight: 'bold',
//   },
//   profileIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#F0F0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   profileEmoji: {
//     fontSize: 20,
//   },
//   productsContent: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   carousel: {
//     marginBottom: 30,
//   },
//   shoeCard: {
//     width: 100,
//     height: 100,
//     borderRadius: 15,
//     marginRight: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectedCard: {
//     borderWidth: 3,
//     borderColor: '#2AA89E',
//   },
//   shoeEmoji: {
//     fontSize: 40,
//   },
//   mainShoeContainer: {
//     width: '100%',
//     height: 250,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   mainShoePlaceholder: {
//     width: 250,
//     height: 200,
//     backgroundColor: '#F5F5F5',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   mainShoeEmoji: {
//     fontSize: 100,
//   },
//   productInfo: {
//     marginBottom: 30,
//   },
//   productName: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#1B5E56',
//     marginBottom: 5,
//   },
//   productCategory: {
//     fontSize: 16,
//     color: '#666666',
//     marginBottom: 20,
//   },
//   productDescription: {
//     fontSize: 14,
//     color: '#999999',
//     lineHeight: 22,
//     marginBottom: 20,
//   },
//   priceLabel: {
//     fontSize: 16,
//     color: '#666666',
//     marginBottom: 5,
//   },
//   price: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#1B5E56',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     gap: 15,
//     paddingBottom: 30,
//   },
//   shareButton: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#4A90E2',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartButton: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#2AA89E',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonIcon: {
//     fontSize: 24,
//     color: '#FFFFFF',
//   },
// });

// export default App;

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

