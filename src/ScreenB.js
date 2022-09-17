import React from 'react';
import { StyleSheet, Text, View, backgroundColor,Pressable} from 'react-native';

export default function ScreenB({navigation}){

    const onPressHandler = () => {
      navigation.navigate('Screen_A');
      navigation.navigate('Screen_D');
      //navigation.goBack();
    }
    return(
      <View style ={styles.body}>
        <Text style = {styles.text}>
          Screen B
        </Text>
        <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({backgroundColor: pressed ? '#ddd': '#f4eb24'})}>
        
        <Text style = {styles.text}>
          Go to Screen A
        </Text>

        <Text style = {styles.text}>
          Go to Screen D
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
  