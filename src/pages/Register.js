import React, { useState } from 'react';
import { View, Button, TextInput, Text,StyleSheet,ImageBackground,Image,Animated } from 'react-native';
import { URL } from '../server/constants';
import { colors } from '../../utils/colors';
import {sizes} from '../../utils/sizes';

const Register = ({ navigation }) => {

  const image = require('../images/fundo1.jpg')
  const [opcBlack] = useState(new Animated.Value(1));
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rotacao] = useState(new Animated.Value(0));



  let rotacaoInterpolada = rotacao.interpolate({
    inputRange: [0, 90],
    outputRange: ['0deg', '180deg'],
  });

  Animated.loop(
    
    Animated.sequence([
      Animated.timing(opcBlack, {toValue:0, duration:1500}),
      Animated.timing(opcBlack, {toValue:1, duration:1500})
    ])      
  ).start();
  
  const handleRegister = () => {
    if (name != "" && password != "") {
      const newUser = {
        name,
        password
      }
      fetch(`${URL}/users`, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then((response) => {
        if (response.ok) {
          navigation.popToTop();
          alert("Cadastro realizado com sucesso");
        } 
        else {
          alert("Ocorreu uma falha no cadastro");
        }
      })
    }
    else {
      alert("Insira todos os dados");
    }
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
        <Text style={styles({rotacaoInterpolada}).text}>Insira seu nome</Text>
        <TextInput
          style={styles({}).textInput}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles({rotacaoInterpolada}).text}>Insira uma senha</Text>
        <TextInput
          style={styles({}).textInput}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          autoComplete="password"
          secureTextEntry={true}
        /> 
       </View>

       <View style={styles().box3 }>
       <Button
          title="Cadastrar"
          onPress={handleRegister}
        />
       </View>

       <View style={styles().box4 }>
       <Button
          title="Voltar"
          onPress={() => navigation.popToTop()}
        />
       </View>

     </ImageBackground>
   </View>
  );
}
export default Register;

const styles = () => StyleSheet.create({
  box1:{
    flex:1,
    margin: sizes.spacing.xlarge,
    alignItems:'center',
    justifyContent:'center',
  },
  box2:{
    flex:1,
    marginBottom: sizes.spacing.xlarge,   
  },
 
  box3:{
    marginTop: sizes.spacing.xlarge,
    padding:sizes.spacing.large,
  },
  box4:{
    padding:sizes.spacing.large,
  },

  text: {
    fontfamily: "Lucida Handwriting", 
    fontSize: sizes.font.large,
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center',
    margin: sizes.spacing.large,
  }, 
  
  textInput: {
    borderWidth: sizes.spacing.small,
    margin: sizes.spacing.medium,
    padding: sizes.spacing.medium,
    borderColor: colors.basic.blue,
  },

  
  
  

});