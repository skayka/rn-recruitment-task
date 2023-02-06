import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PokemonList from '../screens/PokemonList'
import PokemonDetails from '../screens/PokemonDetails/PokemonDetailsScreen'
export type StackNavigatorParamList = {
  PokemonList: undefined
  PokemonDetails: { id: string }
}

const Stack = createNativeStackNavigator<StackNavigatorParamList>()

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PokemonList">
        <Stack.Screen name="PokemonList" component={PokemonList} options={{ headerShown: false }} />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetails}
          options={{ headerTitle: '', headerBackTitle: '', headerTransparent: true, headerShadowVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
