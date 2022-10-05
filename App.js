import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home';
import Comments from './src/Comments';
import Register from './src/Register'




const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer >
            <Stack.Navigator initialRouteName='Register'>
                  <Stack.Screen name='Register' options={{title:'Register', headerShown:false}}>
                    {(props)=> <Register {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='Home' options={{title:'Home', headerShown:false}}>
                    {(props)=> <HomeScreen {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='Comments' options={{title:'Comments', headerShown:false}}>
                    {(props)=> <Comments {...props} />}
                  </Stack.Screen>
            </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
