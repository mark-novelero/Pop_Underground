import React from 'react';
import MapView, {Marker, Callout, Circle} from 'react-native-maps';
import { StyleSheet, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { Entypo } from '@expo/vector-icons';



const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 70; 
const ITEM_HEIGHT = height * .99
const SPACING = 20; 
const AVATAR_SIZE = 120; 



const MapStop1 = ( {navigation} ) => {

 return(

    <SafeAreaView style={styles.container}>
      <Image style = {{borderRadius: 200, marginBottom: 26}} source={{
                      borderColor: "silver",
                      height: 400, 
                      width: 400,
                      uri: "https://i.pinimg.com/originals/03/de/d8/03ded85652e2d447970b00f24bdd3d6c.jpg"}}/> 
      <Text style ={{fontSize: 44, color: "white"}}>.  .  .  .  .</Text>  
      <Text style={{fontSize: 42, color: "yellow", fontFamily: "AvenirNextCondensed-Heavy"}} 
              numberOfLines={1} >The<Text style={{fontSize: 36, color: "white"}}> Chel<Text style={{fontSize: 33, color: "yellow"}}>sea</Text> <Text style={{fontSize: 33, color: "white"}}> Hote</Text><Text style={{fontSize: 50, color: "red"}}>L</Text></Text></Text>
      <Text style = {{fontSize: 14, color: "white"}}>222 West 23rd Street</Text>
      <TouchableOpacity style = {styles.buttons} onPress={()=> navigation.navigate("The Chelsea Hotel")}>
        <Entypo name="forward" size={50} color="blue" />
      </TouchableOpacity> 
    
      <BottomSheet style = {{backgroundColor: "black", width: width}} snapPoints= {[height - ITEM_HEIGHT, height * .68]}>
        <MapView 
            style={styles.map}   
            initialRegion={{
              latitude: 40.745927310866335,
              longitude: -73.99597633165467,
              latitudeDelta: 0.0371,
              longitudeDelta: 0.0309,
            }} 
        > 
          <Marker 
            coordinate={{
              latitude: 40.744521034171775, 
              longitude: -73.99686217330031
            }}
          >
            <Callout style={styles.callout}>
                <Text style = {{fontSize: 17}}>Stop 1: The Chelsea Hotel</Text>
                <Image source ={{
                  width: 140, 
                  height: 120, 
                  uri: "https://www.nydailynews.com/resizer/DJMKtbdrBySWgddI-sEq6tfYiHA=/415x271/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/6IYV233C2NHZZDZR4F3RIUDBUM.jpg"
                }}></Image>
            </Callout>
          </Marker>
          <Circle center = {{latitude: 40.744521034171775, 
                               longitude: -73.99686217330031}} radius = {500} />
        </MapView>
      </BottomSheet>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: ITEM_WIDTH, 
      height: ITEM_HEIGHT, 
      resizeMode: 'cover'
    },
    map: {
      width: width,
      height: height,
      justifyContent: "center", 
      alignItems: "center"
    },
    buttons: { 
      alignContent: "center", 
      justifyContent: "center", 
      padding: 5, 
      borderRadius: 24, 
      fontSize: 6, 
      marginBottom: 4, 
      marginTop: 16
    }, 
    callout: {
      flex: 1, 
      backgroundColor: 'white', 
      alignItems: 'center', 
      justifyContent: 'center'
    }
});

export default MapStop1