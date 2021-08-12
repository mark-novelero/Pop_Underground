import React from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import { StyleSheet, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import BottomSheet from '@gorhom/bottom-sheet';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { Entypo } from '@expo/vector-icons';



const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 70; 
const ITEM_HEIGHT = height * .997
const SPACING = 20; 
const AVATAR_SIZE = 120; 
const BottomHeight = height * .99;



const MapStop4 = ( {navigation} ) => {

const destination = {latitude: 40.730422434216045, longitude: -73.9983510155943};
const origin = {latitude: 40.73704556109122, longitude: -73.99097261757167};
const GOOGLE_MAPS_APIKEY = '' //insert personal google maps API key here for direction line.

 return(

    <SafeAreaView style={styles.container}> 
      <Image style = {{borderRadius: 200, marginBottom: 25}} 
            source={{
              borderColor: "silver",
              height: 405, 
              width: width,
              uri: "https://artishockrevista.com/wp-content/uploads/2019/01/1963_ross_quiamangelebaboon.jpg"}}/> 
      <Text style ={{fontSize: 44, color: "white"}}>.  .  .  .  .</Text>  
      <Text style={{fontSize: 42, color: "yellow", fontFamily: "AvenirNextCondensed-Heavy"}} 
            numberOfLines={1} >Jud<Text style={{fontSize: 36, color: "white"}}>son<Text style={{fontSize: 46, color: "yellow"}}>  Mem</Text>orial<Text style={{fontSize: 33, color: "white"}}></Text><Text style={{fontSize: 40, color: "red"}}></Text></Text></Text>
      <Text style = {{fontSize: 38, color: "red", fontFamily: "AvenirNextCondensed-Heavy"}}>Chu<Text style = {{fontSize: 29, color: "white", fontFamily: "AvenirNextCondensed-Heavy"}}>rch</Text></Text>
      <Text style = {{fontSize: 14, color: "white"}}>239 Thompson Street</Text>
      <TouchableOpacity style = {styles.buttons} onPress={()=> navigation.navigate("Judson Memorial Church")}>
          <Entypo name="forward" size={50} color="blue" />
      </TouchableOpacity> 

      <BottomSheet style = {{backgroundColor: "black"}} snapPoints= {[height - BottomHeight, height * .85]}>
          <MapView
            style={styles.map}   
            initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.0251,
            longitudeDelta: 0.013,
            }}>
              <Marker 
                coordinate={{
                    latitude: 40.73704556109122, 
                    longitude: -73.99097261757167
                }}
              >
                  <Callout style={styles.callout}>
                    <Text style = {{fontSize: 17}}>Stop 3: Andy Warhol: The Factory</Text>
                    <Image source ={{
                          width: 140, 
                          height: 120, 
                          uri: "https://ephemeralnewyork.files.wordpress.com/2013/01/deckerbuildingfacade.jpg"
                          }}
                    />
                  </Callout>
              </Marker> 
              <Marker 
                coordinate={{
                  latitude: 40.730422434216045, 
                  longitude: -73.9983510155943
                }}
                pinColor = "green"
              >
                <Callout style={styles.callout}>
                          <Text style = {{fontSize: 17}}>Stop 4: Judson Memorial Church</Text>
                          <Image source ={{
                                          width: 140, 
                                          height: 120, 
                                          uri: "https://d1smv7h0armdzg.cloudfront.net/wp-content/uploads/2013/03/Screen-Shot-2013-03-12-at-3.03.12-PM-e1363119677673.png"
                                        }}>
                          </Image>
                </Callout>
              </Marker>
              <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="red"
                mode= "WALKING"
              />
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
      map: {
        width: 420,
        height: 680,
      }, 
      callout: {
        flex: 1, 
        backgroundColor: 'white', 
        alignItems: 'center', 
        justifyContent: 'center'
      }, 
      buttons: { 
        alignContent: "center", 
        justifyContent: "center", 
        padding: 5, 
        borderRadius: 24, 
        fontSize: 6, 
        marginBottom: 8, 
        marginTop: 16,
      }
})

export default MapStop4