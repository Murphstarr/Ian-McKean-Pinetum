import * as React from 'react';
import {
  Text, View, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, Dimensions ,
  TouchableOpacity,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Feed = function () {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <View>
        <Text style={styles.titleText}>Ian McKean Pinetum</Text>
      </View>
      <View>
        <Image
          style={styles.banner}
          source={{
          uri: 'https://www.irongates.co.nz/uploads/2/4/6/2/24622109/dsc5583_orig.jpg',
          }}
        />
      </View>
      <Text style={styles.bodyText}>
      {`Welcome to Ian McKean Pinetum - where you’ll discover the largest collection of conifers in the Southern Hemisphere.\n\n Founded in 1958, this pinetum is a lifetime of work by farmer and tree-enthusiast Rawhiti “Ian” McKean. The collection includes more than 300 species of conifers, including 90 of the 110 recognised pine, and is planted across 14 hectares of rugged hill-country land on the McKean family farm. Today, it is part of Queen Elizabeth II Trust and open for everyone to enjoy.`}
      </Text>
 
    </ScrollView>
    </SafeAreaView>

      
  );
};

const Profile = function () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This App was created in React Native </Text>
      <Text>To report a problem with the App please contact:</Text>
      <Text style={{ textDecorationLine: 'underline' }}>danielmurphycs@gmail.com</Text>
    </View>
  );
};

const Notifications = function () {
  return (
    <Text>Under Construction :)</Text>
  );
};

const Tab = createBottomTabNavigator();

const MyTabs = function () {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tree Identifier"
        component={Notifications}
        options={{
          tabBarLabel: 'Tree Identifier',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tree" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={Profile}
        options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="phone" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  box: {
    width: windowWidth,
    height: windowHeight / 2,
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  banner: {
    width: windowWidth,
    height: windowHeight / 2,
  },
  container: {
    backgroundColor:'#40798c'
  },
  bodyText: {
    color: 'black',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    margin:10
  }
});
