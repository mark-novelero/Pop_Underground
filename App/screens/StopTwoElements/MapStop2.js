import React from 'react';
import MapView, {Marker, Callout,} from 'react-native-maps';
import { StyleSheet, Text, Button, SafeAreaView, Image, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import BottomSheet from '@gorhom/bottom-sheet'
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { Entypo } from '@expo/vector-icons';



const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 70; 
const ITEM_HEIGHT = height * .98
const SPACING = 20; 
const AVATAR_SIZE = 120; 



const MapStop2 = ({ navigation }) => {

const origin = {latitude: 40.744521034171775, longitude: -73.99686217330031};
const destination = {latitude: 40.736924914351775, longitude: -73.98868431743989};
const GOOGLE_MAPS_APIKEY = "" //insert personal google maps API key here for direction line. 

  return(

      <SafeAreaView style={styles.container}> 
        <Image style = {{borderRadius: 200, marginBottom: 25}} 
               source={{
                    borderColor: "silver",
                    height: 405, 
                    width: width,
                    uri: "https://www.rollingstone.com/wp-content/uploads/2018/06/r-131_maxskansascity1976_gruen144-1078c76b-4fcc-4a76-9f77-c7f07d78e2e1.jpg?resize=1800,1200&w=1800"}}/> 
        <Text style ={{fontSize: 44, color: "white"}}>.  .  .  .  .</Text>  
        <Text style={{fontSize: 42, color: "yellow", fontFamily: "AvenirNextCondensed-Heavy"}} 
              numberOfLines={1} >Max<Text style={{fontSize: 36, color: "white"}}>'s Kan<Text style={{fontSize: 33, color: "yellow"}}>sas</Text><Text style={{fontSize: 33, color: "white"}}> Cit</Text><Text style={{fontSize: 50, color: "red"}}>Y</Text></Text></Text>
        <Text style = {{fontSize: 14, color: "white"}}>213 Park Avenue South</Text>
        <TouchableOpacity style = {styles.buttons} onPress={()=> navigation.navigate("Max's Kansas City")}>
            <Entypo name="forward" size={50} color="blue" />
        </TouchableOpacity> 

        <BottomSheet  snapPoints= {[height - ITEM_HEIGHT, height * .75]}>
            <MapView
              style={styles.map}   
              initialRegion={{
              latitude: 40.745927310866335,
              longitude: -73.99597633165467,
              latitudeDelta: 0.0471,
              longitudeDelta: 0.0409,
              }} >
                <Marker 
                  coordinate={{
                  latitude: 40.744521034171775, 
                  longitude: -73.99686217330031
                }}>
                    <Callout style={styles.callout}>
                        <Text style = {{fontSize: 17}}>Stop 1: The Chelsea Hotel</Text>
                        <Image source ={{
                                  width: 140, 
                                  height: 120, 
                                  uri: "https://www.nydailynews.com/resizer/DJMKtbdrBySWgddI-sEq6tfYiHA=/415x271/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/6IYV233C2NHZZDZR4F3RIUDBUM.jpg"
                                  }}/>
                    </Callout>
                </Marker> 
                <Marker 
                    coordinate={{
                        latitude: 40.736924914351775, 
                        longitude: -73.98868431743989
                        }}
                        pinColor = "green">
                      <Callout style={styles.callout}>
                          <Text style = {{fontSize: 17}}>Stop 2: Max's Kansas City</Text>
                          <Image source ={{
                                  width: 140, 
                                  height: 120, 
                                  uri: "https://townsquare.media/site/295/files/2017/04/maxresdefault1.jpg?w=980&q=75"}}/>
                      </Callout>
                  </Marker>
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor="hotpink"
                    mode= "WALKING"/>
            </MapView>
            <Button style= {styles.button} title = "Play Stop 2" onPress={()=> navigation.navigate("Max's Kansas City")}/>
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

export default MapStop2