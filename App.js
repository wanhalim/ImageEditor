import React from 'react';
import { View, Text, Image, Button, StyleSheet, CameraRoll } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker'


export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      image: null,
     
    };
  }


  handleChooseImage = () => {
    
    ImagePicker.openPicker({
    }).then(image => {
      console.log(image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
      });
    });
    
  };


  handleTakeImage = () => {
   
    ImagePicker.openCamera({
    }).then(image => {
      console.log(image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
      });
    });
    
  };

  
  handleCropImage = () => {
   
    ImagePicker.openCropper({
      path:this.state.image.uri,
    }).then(image => {
      console.log(image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
      });
    });
    
  };
  

  render() {
    
    return (
      <View style={styles.all}>
        <Text style={styles.titleText}>Image Editor</Text>
        <Text></Text>
          <Image
            source={this.state.image}
            style={{ width: 400, height: 400, resizeMode: 'contain' }}
          />
        
        <Text></Text>
        <Button title="Choose Photo" onPress={this.handleChooseImage} color='black'/>
        <Text></Text>
        <Button title="Take New Photo" onPress={this.handleTakeImage} color='black'/>
        <Text></Text>
        <Button title="Crop" onPress={this.handleCropImage} color='black'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  all: {
   flex: 1,
   backgroundColor: 'steelblue',
   alignItems: 'center',
   justifyContent: 'center'
   
  },
  titleText: {
    fontSize: 35,
    
    
  }
 
});