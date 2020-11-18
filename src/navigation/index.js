import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/HomeScreen';

const Router = () => {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            initialRouteName="Home"
            name="CovidApp"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: "#1F2337"
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default Router;
