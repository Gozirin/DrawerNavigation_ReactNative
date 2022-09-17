import React from 'react';
import { StyleSheet, Text, View, backgroundColor,Pressable} from 'react-native';

export default function ScreenC({navigation}){

    const onPressHandler = () => {
      //navigation.navigate('Screen_B');
      navigation.goBack();
    }
    return(
      <View style ={styles.body}>
        <Text style = {styles.text}>
          Screen D
        </Text>
        <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({backgroundColor: pressed ? '#ddd': '#ff1744'})}>
        
        <Text style = {styles.text}>
          Go to Screen A
        </Text>

        <Text style = {styles.text}>
          Go to Screen B
        </Text>

        
         </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    },
  })
  