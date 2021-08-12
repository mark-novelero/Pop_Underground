import React from 'react';
import MapView, {Marker, Callout,} from 'react-native-maps';
import { StyleSheet, Text, SafeAreaView, Image, Dimensions, View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import BottomSheet from '@gorhom/bottom-sheet'
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { Entypo } from '@expo/vector-icons';



const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 70; 
const ITEM_HEIGHT = height * .986
const SPACING = 20; 
const AVATAR_SIZE = 120; 



const MapStop3 = ({ navigation }) => {

const origin = {latitude: 40.736924914351775, longitude: -73.98868431743989};
const destination = {latitude: 40.73704556109122, longitude: -73.99097261757167};
const GOOGLE_MAPS_APIKEY = "" //insert personal google maps API key here for direction line.
const { container } = styles

 return(

    <SafeAreaView style={styles.container}> 
        <Image style = {{borderRadius: 200, marginBottom: 25}} source={{
               borderColor: "silver",
               height: 405, 
               width: width,
               uri: "https://m.buro247.me/images/Warholnyuadarticle.jpg"}}/> 
        <Text style ={{fontSize: 44, color: "white"}}>.  .  .  .  .</Text>  
        <Text style={{fontSize: 42, color: "yellow", fontFamily: "AvenirNextCondensed-Heavy"}} 
              numberOfLines={1} >Th<Text style={{fontSize: 36, color: "white"}}>e<Text style={{fontSize: 46, color: "yellow"}}>  F</Text>act<Text style={{fontSize: 33, color: "white"}}>or</Text><Text style={{fontSize: 40, color: "red"}}>Y</Text></Text></Text>
        <Text style = {{fontSize: 14, color: "white"}}>33 Union Square West</Text>
        <TouchableOpacity style = {styles.buttons} onPress={()=> navigation.navigate("The Factory")}>
            <Entypo name="forward" size={50} color="blue" />
        </TouchableOpacity> 
  
        <BottomSheet  snapPoints= {[height - ITEM_HEIGHT, height * .75]}>
            <MapView
                style={styles.map}   
                initialRegion={{
                latitude: 40.736924914351775,
                longitude: -73.98868431743989,
                latitudeDelta: 0.0121,
                longitudeDelta: 0.009,
            }}>
                <Marker 
                    coordinate={{
                    latitude: 40.736924914351775, 
                    longitude: -73.98868431743989}}
                >
                    <Callout style={styles.callout}>
                      <View>
                          <Text style = {{fontSize: 17}}>Stop 2: Max's Kansas City</Text>
                      </View>
                      <Image source ={{
                            width: 140, 
                            height: 120, 
                            uri: "https://townsquare.media/site/295/files/2017/04/maxresdefault1.jpg?w=980&q=75"
                            }}
                      />
                    </Callout>
                </Marker> 
                <Marker 
                  coordinate={{
                  latitude: 40.73704556109122, 
                  longitude: -73.99097261757167 
                  }}
                  pinColor = "green"
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

                <MapViewDirections
                  origin={origin}
                  destination={destination}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeWidth={5}
                  strokeColor="hotpink"
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
        height: 700,
      }, 
      callout: {
        flex: 1, 
        backgroundColor: 'white', 
        alignItems: 'center', 
        justifyContent: 'center'
      }, 
      icon: {
        alignItems: 'center',
        justifyContent: 'center',
      }, 
      buttons: { 
        alignContent: "center", 
        justifyContent: "center", 
        padding: 5, 
        borderRadius: 24, 
        fontSize: 6, 
        marginBottom: 4, 
        marginTop: 16       
      }
})

export default MapStop3