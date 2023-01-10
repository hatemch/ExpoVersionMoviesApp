// Navigation/StackNavigation.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import Search from '../Components/Search';
import FilmDetail from '../Components/FilmDetail';
import Favorites from '../Components/Favorites';



const SearchStackNavigator = createStackNavigator();

const SearchStackNavigation = () => {
  return (
      <SearchStackNavigator.Navigator>
        <SearchStackNavigator.Screen
          name="Search" 
          component={Search}
          options={{ title: 'Rechercher' }}
        />
        <SearchStackNavigator.Screen
          name="FilmDetail"
          component={FilmDetail}
        />
      </SearchStackNavigator.Navigator>
  )
}
export {SearchStackNavigation}; // Stack-Navigator for Screen 1 Tab

  const FavoritesStackNavigator = createStackNavigator();

  const FavoritesStackNavigation = () => {
    return (
        <FavoritesStackNavigator.Navigator>
          <FavoritesStackNavigator.Screen
            name="Favoris"
            component={Favorites}
          />
          <FavoritesStackNavigator.Screen
            name="FilmDetail"
            component={FilmDetail}
          />
        </FavoritesStackNavigator.Navigator>
    )
  }
  export {FavoritesStackNavigation}; // Stack-Navigator for Screen 1 Tab