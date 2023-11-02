import {View, Text,Pressable,Image,StyleSheet} from 'react-native';
import React,{useState} from 'react';
import ImagePicker from 'react-native-image-picker';
const SignUpProcess1 = () => {
  const [image, setImage] = useState(null);

  
  return (
    <View style ={styles.container}>
      <View>
        <Text>Upload Your Photo Profile</Text>
      </View>
      <Pressable >
        <Image
        style = {styles.image}
        source={require('../../assets/img/GalleryButton.png')}/>
      </Pressable>
      <Pressable style ={{backgroundColor:'#000'}}>
        <Image
        style = {styles.image}
        source={require('../../assets/img/CameraButton.png')}/>
      </Pressable>
      
    </View>
  );
};

export default SignUpProcess1;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  
})