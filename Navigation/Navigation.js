// Navigation/Navigation.js

import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchStackNavigation, FavoritesStackNavigation } from '../Navigation/StackNavigation';

import Search from '../Components/Search';
import Favorites from '../Components/Favorites';
import FilmDetail from '../Components/FilmDetail';


const MoviesTabNavigator = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <MoviesTabNavigator.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: "#E4E4E4",
          activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
          inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
          //tabBarshowLabel: false, // On masque les titres

          tabBarShowLabel: false,
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ],

          tabBarshowIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
        }}>
        <MoviesTabNavigator.Screen
          name="tabBarSearch"
          component={SearchStackNavigation}
          options={{
            tabBarIcon: () => {
              return <Image
                source={require('../Images/ic_search.png')}
                style={styles.icon} />
            }
          }}
        />

        <MoviesTabNavigator.Screen name="tabBarFavorites"
          component={FavoritesStackNavigation}
          options={{
            tabBarIcon: () => {
              return <Image
                source={require('../Images/ic_favorite.png')}
                style={styles.icon} />
            }
          }} />

      </MoviesTabNavigator.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})
