import React from 'react'
import { SafeAreaView ,View, Dimensions,Image, Text, StyleSheet, Animated,TouchableOpacity } from 'react-native'


const stopList = [
  {
  key: 1,
  name: "The Chelsea Hotel", 
  address: "222 West 23rd Street", 
  image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-chelsea-hotel-paul-clemence.jpg", 
  navigation: "The Chelsea Hotel"
  }, 
  {
  key: 2,  
  name: "Max's Kansas City", 
  address: "213 Park Avenue South", 
  image: "https://townsquare.media/site/295/files/2017/04/maxresdefault1.jpg?w=980&q=75",
  navigation: "Max's Kansas City" 
  }, 
{
  key: 3,  
  name: "The Factory", 
  address: "33 Union Square West", 
  image: "https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1601411926/auctions/NY030220/44_001.jpg", 
  navigation: "The Factory"
}, 
{
  key: 4, 
  name: "Judson Church", 
  address: "239 Thompson Street", 
  image: "https://cdn.urar.org/i/YWYq8bPgGVnSXvrW4iUq1jDHypoH9dGMkcfQvMtXYQvF.jpg", 
  navigation: "Judson Memorial Church"
}, 
{
  key: 5, 
  name: "Electric Lady Studio", 
  address: "52 W. 8th Street",
  image: "https://lh3.googleusercontent.com/proxy/Pkcb9tknFY_hH1rhRjma2n7dxQ7oNvDCgbWfCiz8qumKdnWRFMmlEOGd_kSSluyb0rjZiZLV5PKB1i8pzLviNMKF1I_yZSVcVq9KpY7-vEsVOFemghmrzfaqGnwjY2lVynUD", 
  navigation: "Electric Lady" 
}, 
{
  key: 6, 
  name: "Old Carriage House", 
  address: "59 Great Jones St.", 
  image: "https://i.pinimg.com/originals/74/b5/9a/74b59a6025a4ab6d76cf68a52f3a813e.jpg"
}, 
{
  key: 7, 
  name: "CBGB", 
  address: "315 Bowery", 
  image: "https://images.fineartamerica.com/images-medium-large-5/cbgb-classic-logo-brand-a.jpg"
}, 
{
  key: 8, 
  name: "The Velvet Underground", 
  address: "56 Ludlow Street", 
  image: "https://www.diversevinyl.com/wp-content/uploads/2019/04/5754987.jpg"
}]

const {width, height} = Dimensions.get('screen'); 
const SPACING = 15; 
const AVATAR_SIZE = 90; 
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const NonSequencedTour = ({ navigation }) => {

const scrollY = React.useRef(new Animated.Value(0)).current;
const { container } = styles; 

 return(

  <SafeAreaView style={container}>
    <Image source={{uri: "https://www.freundevonfreunden.com/wp-content/uploads/116_LinkList_KeithHaring-1-2-1-1-1-1-1-1.jpeg"}}
           style= {StyleSheet.absoluteFillObject} />
    <Animated.FlatList
      data = {stopList}
      onScroll= {Animated.event(
        [{ nativeEvent: {contentOffset: {y: scrollY}}}], 
        { useNativeDriver: true }
      )}
      keyExtractor = {item => item.key}
      contentContainerStyle= {{
        padding: SPACING  
      }}
      renderItem= {({item, index}) =>{
        
        const inputRange = [
          -1, 
          0, 
          ITEM_SIZE * index, 
          ITEM_SIZE * (index + 2)
        ]

        const opacityInputRange = [
          -1, 
          0, 
          ITEM_SIZE * index, 
          ITEM_SIZE * (index + .5)
        ]

        const scale = scrollY.interpolate({
          inputRange, 
          outputRange: [1, 1, 1, 0]
        })

        const opacity = scrollY.interpolate({
          inputRange: opacityInputRange, 
          outputRange: [1, 1, 1, 0]
        })

        return <TouchableOpacity >
                    <Animated.View  
                        style = {{flexDirection: "row", 
                                  padding: SPACING, 
                                  marginBottom: SPACING * 1.9, 
                                  backgroundColor: "gold", 
                                  borderRadius: 12, 
                                  shadowColor: "hotpink", 
                                  shadowoffset: {
                                  width: 0, 
                                  height: 10
                                }, 
                                  shadowOpacity: .3, 
                                  shadowRadius:20,
                                  opacity, 
                                  transform: [{scale}]}}>
         
                    <Image source ={{uri: item.image}} style= {{width: AVATAR_SIZE, height: AVATAR_SIZE, 
                           borderRadius: AVATAR_SIZE, marginRight: SPACING}}/>
                    <View style = {{marginTop: 25}}>
                        <Text style= {{fontSize: 20, fontWeight: '700'}}>{item.name}</Text>
                        <Text style = {{fontSize: 14, opacity: .7}}>{item.address}</Text>
                    </View>
                    </Animated.View>
                </TouchableOpacity>
              }}
            />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  
  }
})

export default NonSequencedTour