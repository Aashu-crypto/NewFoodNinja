import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
const SignUpProcess1 = () => {
  const [image, setImage] = useState(null);
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View>
        <Text>Upload Your Photo Profile</Text>
      </View>
      <Pressable
        onPress={() => {
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            setImage(image);
          });
        }}>
        <Image
          style={styles.image}
          source={require('../../assets/img/GalleryButton.png')}
        />
      </Pressable>
      
      <Pressable
        style={{backgroundColor: '#000'}}
        onPress={() => {
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            setImage(image);
          });
        }}>
        <Image
          style={styles.image}
          source={require('../../assets/img/CameraButton.png')}
        />
      </Pressable>
      {image && (
        <Image style={{width: 200, height: 200}} source={{uri: image.path}} />
      )}
      {image && (
        <Pressable onPress={() => setImage(null)}>
          <Text>Cancel</Text>
        </Pressable>
      )}
      <Pressable onPress={() => navigation.navigate('2')}>
          <Text>Next</Text>
        </Pressable>
    </View>
  );
};

export default SignUpProcess1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
