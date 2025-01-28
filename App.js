import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const technologies = [
  { id: '1', name: 'Flutter', icon: 'https://cdn-icons-png.flaticon.com/512/906/906347.png', description: 'Flutter is an open-source UI software development kit by Google for building natively compiled applications for mobile, web, and desktop.' },
  { id: '2', name: 'Ionic', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png', description: 'Ionic is a complete open-source SDK for hybrid mobile app development.' },
  { id: '3', name: 'React Native', icon: 'https://cdn-icons-png.flaticon.com/512/906/906361.png', description: 'React Native is a popular framework for building cross-platform mobile applications using React and JavaScript.' },
  { id: '4', name: 'Swift', icon: 'https://cdn-icons-png.flaticon.com/512/2164/2164070.png', description: 'Swift is a powerful programming language developed by Apple for building iOS and macOS applications.' },
  { id: '5', name: 'NativeScript', icon: 'https://cdn-icons-png.flaticon.com/512/528/528256.png', description: 'NativeScript enables building native apps for iOS and Android using JavaScript or TypeScript.' },
  { id: '6', name: 'Artificial Intelligence', icon: 'https://cdn-icons-png.flaticon.com/512/811/811889.png', description: 'AI enhances user experiences in apps through automation, recommendations, and predictive analytics.' },
  { id: '7', name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png', description: 'Java is a versatile and widely-used programming language for developing mobile, web, and desktop applications.' },
  { id: '8', name: 'Kotlin', icon: 'https://cdn-icons-png.flaticon.com/512/919/919852.png', description: 'Kotlin is a modern programming language favored for Android app development.' },
  { id: '9', name: 'Apache Cordova', icon: 'https://cdn-icons-png.flaticon.com/512/4202/4202265.png', description: 'Apache Cordova allows developers to build mobile apps using HTML, CSS, and JavaScript.' },
  { id: '10', name: 'Augmented Reality', icon: 'https://cdn-icons-png.flaticon.com/512/3448/3448586.png', description: 'Augmented Reality combines virtual elements with the real world to enhance app experiences.' },
  { id: '11', name: 'Internet of Things', icon: 'https://cdn-icons-png.flaticon.com/512/3351/3351664.png', description: 'IoT enables devices to communicate, share data, and automate processes through mobile applications.' },
  { id: '12', name: 'Angular', icon: 'https://cdn-icons-png.flaticon.com/512/732/732197.png', description: 'Angular is a TypeScript-based framework for building dynamic web applications.' },
  { id: '13', name: 'C++', icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png', description: 'C++ is a high-performance programming language used in game and app development.' },
  { id: '14', name: 'App Accelerator', icon: 'https://cdn-icons-png.flaticon.com/512/5464/5464684.png', description: 'App Accelerator simplifies mobile app development by providing cloud-based services.' },
  { id: '15', name: 'Titanium SDK', icon: 'https://cdn-icons-png.flaticon.com/512/888/888870.png', description: 'Titanium SDK enables building native mobile apps using JavaScript.' },
  { id: '16', name: 'Blockchain.com', icon: 'https://cdn-icons-png.flaticon.com/512/2978/2978561.png', description: 'Blockchain technology enhances app security and provides decentralized solutions.' },
  { id: '17', name: 'Cloud Computing', icon: 'https://cdn-icons-png.flaticon.com/512/888/888879.png', description: 'Cloud computing offers scalable infrastructure for app hosting and storage.' },
  { id: '18', name: 'HTML5', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png', description: 'HTML5 is the core markup language for building web-based applications.' },
  { id: '19', name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', description: 'JavaScript is the foundation for creating interactive web and mobile apps.' },
  { id: '20', name: 'PHP', icon: 'https://cdn-icons-png.flaticon.com/512/919/919830.png', description: 'PHP is a popular scripting language for backend development in apps.' },
  { id: '21', name: 'Feigo', icon: 'https://cdn-icons-png.flaticon.com/512/3291/3291666.png', description: 'Feigo provides innovative solutions for streamlining mobile app development.' },
  { id: '22', name: 'jQuery Module', icon: 'https://cdn-icons-png.flaticon.com/512/919/919843.png', description: 'jQuery simplifies DOM manipulation and enhances interactivity in web and mobile apps.' },
  { id: '23', name: 'PhoneGap', icon: 'https://cdn-icons-png.flaticon.com/512/2248/2248295.png', description: 'PhoneGap enables cross-platform mobile app development using web technologies.' },
];


function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter your email and password.');
    } else if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters long.');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.subheading}>Login to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!firstName || !lastName || !phoneNumber || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert('Error', 'Phone number must be a valid 10-digit number.');
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters long.');
      return;
    }

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
        <Text style={styles.backArrowText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Create Account</Text>
      <Text style={styles.subheading}>Sign up to get started</Text>
      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="numeric" value={phoneNumber} onChangeText={setPhoneNumber} placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} placeholderTextColor="#aaa" />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const handlePress = (item) => {
    navigation.navigate('Detail', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem} onPress={() => handlePress(item)}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.backArrow}>
        <Text style={styles.backArrowText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.itemheading}>Home</Text>
      <FlatList
        data={technologies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}



function DetailScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.icon }} style={styles.detailIcon} />
      <Text style={styles.heading}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#495057',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    color: '#007bff',
    fontSize: 16,
    textAlign: 'center',
  },
  backArrow: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  backArrowText: {
    fontSize: 20,
    color: '#007bff',
  },
  list: {
    marginTop: 20,
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  itemText: {
    fontSize: 18,
    color: '#495057',
    fontWeight: 'bold',
  },
  detailIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    lineHeight: 24,
  },
  itemDescription: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: -30,
  },
  itemheading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    marginTop: 40,
    marginBottom: 70,
  },
});
