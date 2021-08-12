import { createStackNavigator } from "@react-navigation/stack"
import React from 'react';
import MapStop1 from "../screens/StopOneElements/MapStop1";
import MapStop2 from "../screens/StopTwoElements/MapStop2";
import WelcomeScreen from "../screens/WelcomeScreen";
import MapStop3 from "../screens/StopThreeElements/MapStop3";
import MapStop4 from "../screens/StopFourElements/MapStop4";
import About from "../screens/About";
import MediaPlayer3 from "../screens/StopThreeElements/MediaPlayer3";
import MediaPlayer1 from "../screens/StopOneElements/MediaPlayer1";
import MediaPlayer2 from "../screens/StopTwoElements/MediaPlayer2";
import MediaPlayer4 from "../screens/StopFourElements/MediaPlayer4";
import NonSequencedTour from "../screens/NonSequencedTour";


const Stack = createStackNavigator();


const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name= "Welcome Home" component= {WelcomeScreen} options = {{headerShown: false}}/>
        <Stack.Screen name= "About" component= {About} options = {{headerShown: false}}/>
        <Stack.Screen name= "The Chelsea Hotel Map" component= {MapStop1} options = {{headerShown: false}}/>
        <Stack.Screen name= "The Chelsea Hotel" component= {MediaPlayer1} options = {{headerShown: false}} />
        <Stack.Screen name= "Max's Kansas City Map" component= {MapStop2} options = {{headerShown: false}}/>
        <Stack.Screen name= "Max's Kansas City" component = {MediaPlayer2} options = {{headerShown: false}}/>
        <Stack.Screen name= "The Factory Map" component = {MapStop3} options = {{headerShown: false}} />
        <Stack.Screen name= "The Factory" component = {MediaPlayer3} options = {{headerShown: false}}/>
        <Stack.Screen name= "Judson Memorial Church Map" component = {MapStop4} options = {{headerShown: false}}/>
        <Stack.Screen name= "Judson Memorial Church" component = {MediaPlayer4} options = {{headerShown: false}}/>
        <Stack.Screen name= "All Stops" component = {NonSequencedTour} />
    </Stack.Navigator>
)

export default AuthNavigator