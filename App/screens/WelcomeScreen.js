import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import NonSequencedTour from './NonSequencedTour';
import BottomSheet from '@gorhom/bottom-sheet';

const {width, height} = Dimensions.get('window');
const ITEM_WIDTH = width * 70; 
const ITEM_HEIGHT = height * .996


function WelcomeScreen( {navigation} ) {
  
    return (
        <SafeAreaView style = {styles.container}>
            <Image source={{uri: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1404,w_2500,x_0,y_0/v1554926652/shape/mentalfloss/78388-wikimedia.jpg?itok=i1xAyJUH"}}
              style= {StyleSheet.absoluteFillObject}/>

            <View style = {styles.container}> 
                <Text style = {styles.container}>POP!</Text>
            </View>

            <View style = {styles.buttons}> 
                <TouchableOpacity  onPress={()=> navigation.navigate("About")}>
                <View style= {[styles.buttons, {backgroundColor: "blue", shadowColor: "black", 
                      shadowoffset: {
                                      width: 20, 
                                      height: 20
                                    }, shadowOpacity: 3, shadowRadius:20}]}>
                    <Text style = {{fontSize: 20, color: "white", fontFamily: "AvenirNextCondensed-Heavy"}}>Start Tour</Text>
                </View>
                </TouchableOpacity> 
            </View>

            <BottomSheet snapPoints= {[height - ITEM_HEIGHT, height * .9]}>
                <NonSequencedTour></NonSequencedTour>
            </BottomSheet>
        </SafeAreaView>
    );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignContent: "center", 
    justifyContent: "center", 
    fontSize: 88, color: "white", fontFamily: "AvenirNextCondensed-Heavy"
  },
  titleText: {
    alignContent: "center", 
    justifyContent: "center"
  },
  buttons: {
    flexDirection: 'row', 
    alignContent: "center", 
    justifyContent: "center", 
    padding: 14, 
    fontSize: 10, 
    marginBottom: 20,
    borderRadius: 29
  }
});

export default WelcomeScreen;