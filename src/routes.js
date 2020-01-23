import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Pokedex from "./pages/Pokedex"
import Pokemon from "./pages/Pokemon"

const Stack = createStackNavigator({
  Pokedex: {
    screen: Pokedex,
    navigationOptions: {
      headerShown: false
    }
  },

  Pokemon: {
    screen: Pokemon,
  },
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#FC6C6D'
    },
    headerTintColor: '#fff',

  }
});

const Routes = createAppContainer(Stack);

export default Routes;