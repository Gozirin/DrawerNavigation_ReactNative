import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
import ScreenC from './src/ScreenC';
import ScreenD from './src/ScreenD';
import { BottomTabBarHeightContext, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';




 // TAB NAVIGATION
//const Tab = createBottomTabNavigator();
 
//DRAWERNAVIGATION
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
       
       {/* <Tab.Navigator>
        
       <Tab.Screen
        name = "Screen_A"
        component = {ScreenA}/>

      <Tab.Screen
        name = "Screen_B"
        component = {ScreenB}/>

       </Tab.Navigator>   */}

       
     <Drawer.Navigator
       initialRouteName = "Screen_A"
       drawerPositions = 'left'
       drawerTypes = "font"
       edgeWidth = {100}
       hideStatusBar = {false}
       overlayColor = '#00000009'
       drawerStyle = {{
        backgroundcolor: '#e6e6e6',
        width: 250
       }}
       ScreenOptions={{
        headerShown: true,
        swipeEnabled: true,
        gestureEnabled:true,
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundcolor:'#0080ff'
        },
        headerTintColor:'red',
        headerTintStyle: {
          fontSize: 25,
          fontWeight: 'bold'
        }
       }}> 
        
       <Drawer.Screen
        name = "Screen_A"
        component = {ScreenA}
        options={{
          title: 'Screen_A Title',
          drawerIcon: ({ focused }) => {
            <FontAwesome5
            name = "autoprefixer"
            size = {focused ? 25 : 20}
            color = {focused ? '#0080ff' :'#999999'}/>
            }
           }}
        />

      <Drawer.Screen
        name = "Screen_B"
        component = {ScreenB}/>


       <Drawer.Screen
        name = "Screen_C"
        component = {ScreenC}/>

       <Drawer.Screen
        name = "Screen_D"
        component = {ScreenD}/>

 
       </Drawer.Navigator>  
       
    </NavigationContainer> 
  );
}
export default App;




