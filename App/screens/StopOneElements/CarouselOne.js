import React, { useRef, useState } from 'react'
import { View, StyleSheet, Dimensions, Image, Animated } from 'react-native'
import useInterval from '../useInterval'


const MAX_WIDTH = Dimensions.get('screen').width
const MAX_HEIGHT = MAX_WIDTH * 1.4



const CarouselOne = ({images}) => {

    const animation = useRef(new Animated.Value(0));
    const [currentImage, setCurrentImage] = useState(0)
    useInterval(() => handleAnimation(), 11200);

    const handleAnimation = () => {
        let newCurrentImage = currentImage + 1; 

        if(newCurrentImage >= images.length){
            newCurrentImage = 0;
        }

        Animated.spring(animation.current, {
            toValue: -(MAX_WIDTH * newCurrentImage), 
            useNativeDriver: true, 
        }).start();

        setCurrentImage(newCurrentImage);
    }; 


 return(

    <React.Fragment>
        <View>
            <Animated.View style= {[styles.container, {transform: [{translateX: animation.current}]}]}>
                 {images.map(image => <Image key= {image} source={{uri: image}} style= {styles.image}/>)}
            </Animated.View>
            <View style = {styles.indicatorContainer}>
                 {images.map((image, index) => (<View key = {`${image}_${index}`} style = {[styles.indicator, index === currentImage ? styles.activeIndicator : undefined]}/>))}
            </View>
        </View>
    </React.Fragment> 
  )
}


const styles = StyleSheet.create({
  image: {
      resizeMode: 'cover', 
      height: MAX_HEIGHT * .95, 
      width: MAX_WIDTH, 
      borderRadius: 10
  }, 
  container: {
      flexDirection: "row"
  }, 
  indicatorContainer: {
      position: 'absolute', 
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: MAX_WIDTH, 
      bottom: 10, 
      zIndex: 2
  }, 
  indicator: {
      width: 8, 
      height: 8, 
      borderRadius: 3, 
      borderColor: 'white', 
      borderWidth: 1, 
      marginHorizontal: 10, 
      marginBottom: 10
  }, 
  activeIndicator: {
      backgroundColor: "white",
  }
})

export default CarouselOne