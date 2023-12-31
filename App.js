import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home';
import Comments from './src/Comments';
import Register from './src/Register'
import Login from './src/Login';
import Pro  from './src/pro';
import NotFound from './src/NotFound';
import AddScammer from './src/AddScammer';
// import RedPart2 from './components/secureTopParts';
// import SpinnerIndicator from './components/spinner';
import Forgot from './src/forgotPassword';
import RedPart from './components/topPart';




const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Register' options={{title:'Register', headerShown:false}}>
                    {(props)=> <Register {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='Login' options={{title:'Login', headerShown:false}}>
                    {(props)=> <Login {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='Home' options={{title:'Home', headerShown:false}}>
                    {(props)=> <HomeScreen {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='Comments' options={{title:'Comments', headerShown:false}}>
                    {(props)=> <Comments {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='Pro' options={{title:'pro', headerShown:false}}>
                    {(props)=> <Pro {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='NotFound' options={{title:'NotFound', headerShown:false}}>
                    {(props)=> <NotFound {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='AddScammer' options={{title:'AddScammer', headerShown:false}}>
                    {(props)=> <AddScammer {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='topPart' options={{title:'topPart', headerShown:false}}>
                    {(props)=> <RedPart {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='forgotPassword' options={{title:'forgotPassword', headerShown:false}}>
                    {(props)=> <Forgot {...props} />}
                  </Stack.Screen>
                  
            </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
