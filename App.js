import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import NotificationScreen from './components/screens/NotificationScreen';
import CartScreen from './components/screens/CartScreen';
import DetailsScreen from './components/DetailsScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

const NotificationStack = createStackNavigator();

const NotificationStackScreen = () => {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name="Notification"
        component={NotificationScreen}
      />
    </NotificationStack.Navigator>
  );
};

const CartStack = createStackNavigator();

const CartStackScreen = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={CartScreen} />
    </CartStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'md-contact' : 'md-contact';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'ios-notifications' : 'ios-notifications';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'md-cart' : 'md-cart';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Notifications" component={NotificationStackScreen} />
        <Tab.Screen name="Cart" component={CartStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
