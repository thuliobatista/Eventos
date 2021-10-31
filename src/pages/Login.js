import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image,Animated,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from '../server/constants';
import { colors } from '../../utils/colors';
import {sizes} from '../../utils/sizes';

const Login = () => {
    
    const image = require('../images/fundo1.jpg');
    const [opcBlack] = useState(new Animated.Value(1));
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    Animated.loop(
      Animated.sequence([
        Animated.timing(opcBlack, {toValue:0, duration:1500}),
        Animated.timing(opcBlack, {toValue:1, duration:1500})
      ])      
    ).start();

    const Login = async () => {
      const result = await fetch(`${URL}/users?name=${name}&password=${password}`, {
        method: "GET",
        headers: {
          'content-type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error(error);
      })

      if (result.length != 0) {
        const storeData = async (result) => {
          try {
            const value = JSON.stringify(result[0]);
            await AsyncStorage.setItem('userData', value);
          }
          catch (error) {
            console.error(error);
          }
        }
        storeData(result);
        navigation.navigate("Tabs");
      }
      else {
        alert("Usuário não cadastrado.")
      }

      setName("");
      setPassword("");
  }

  const Register = () => {
    navigation.navigate("Register");
  }

  
    
    return (
      <View>
         <ImageBackground source={image}>

           <View style={styles().box1 }>
           <Animated.Image
                style={{width:150, height:150, opacity:opcBlack}}
                source={require('../images/logo.png')}
            />
           </View>

           <View style={styles().box2 }>
           <Text style={styles().text}>Login</Text>
           <TextInput 
                style={styles().textInput }
                placeholder="User"
                onChangeText={setName}
                autoCapitalize="sentences"
          />
           <TextInput 
                style={styles().textInput }
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
           </View>
           
           <View style={styles().box3}>
           <Button
                  title="Login"
                  onPress={Login}
                />
           </View>

           <View style={styles().box4 }>
           <Button
                  title="Cadastrar"
                  onPress={Register}
                />  
           </View>
         </ImageBackground>
      </View>
  );
}
export default Login;

const styles = () => StyleSheet.create({

  box1:{
    
    alignItems:'center',
    margin: sizes.spacing.xlarge,
    padding:sizes.spacing.xlarge,
  },

  box2:{
    
    margin: sizes.spacing.xlarge,
    padding:sizes.spacing.xlarge,
  },

  box3:{
    flex:1,
    margin: sizes.spacing.xlarge,
    padding:sizes.spacing.xlarge,
  },
  box4:{
    flex:1,
    margin: sizes.spacing.large,
    padding:sizes.spacing.large,
  },
  
  text: {
    fontSize: sizes.font.xlarge,
    fontWeight: '700',
    marginLeft:20,
    color:colors.basic.white,
  },
  
  textInput: {
    borderWidth: sizes.spacing.small,
    margin: sizes.spacing.medium,
    padding: sizes.spacing.medium,
    borderColor: colors.basic.blue,
  },

});

    
    
