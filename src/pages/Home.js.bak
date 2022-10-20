import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet,ImageBackground} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { sizes } from '../../utils/sizes';

const Home = () => {

    

    const modalizeLaz = useRef(null);
    const openModalizeLaz = () => {
        modalizeLaz.current?.open();
    };

    const modalizeFF = useRef(null);
    const openModalizeFF = () => {
        modalizeFF.current?.open();
    };

    const modalizeTor = useRef(null);
    const openModalizeTor = () => {
        modalizeTor.current?.open();
    };
    

   

  return (
    <View>
      
        

        <Text style={styles({}).receita}>Receitas</Text>
        
        <View style={styles({}).box1}>

            <TouchableOpacity 
                style={{padding: sizes.spacing.medium}}
                onPress={openModalizeLaz}
            ><Image
                source={require('../images/lasanha-de-carne-moida.jpg')}
                style={styles({}).img}
                />
            </TouchableOpacity>

            <TouchableOpacity 
                    style={{padding: sizes.spacing.medium}}
                    onPress={openModalizeFF}
            ><Image
                source={require('../images/file-de-frango-ao-molho-de-requeijao.jpeg')}
                style={styles({}).img}
                />
            </TouchableOpacity>

            <TouchableOpacity 
                    style={{padding: sizes.spacing.medium}}
                    onPress={openModalizeTor}
            ><Image
                source={require('../images/tortinha-de-maca1.jpg')}
                style={styles({}).img}
                />
            </TouchableOpacity>

        </View>
        <Modalize
            ref={modalizeLaz}
            snapPoint={180}
            modalHeight={400}
        >
            <View style={styles({}).modalize}>
            <Text>Lasanha de carne moída</Text>
                        <Text>1 quilo e meio de carne moída</Text>
                        <Text>1 fio de azeite</Text>
                        <Text>2 cebolas picadas</Text>
                        <Text>2 dentes de alho picados</Text>
                        <Text>1 pimentão verde picado</Text>
                        <Text>1 pimentão amarelo picado</Text>
                        <Text>1 pimentão vermelho picado</Text>
                        <Text>3 tomates picados em cubos</Text>
                        <Text>Tempero verde a gosto</Text>
                        <Text>Molho de tomate a gosto</Text>
                        <Text>Sal a gosto</Text>
                        <Text>Ingredientes - Lasanha</Text>
                        <Text>500 gramas de massa para lasanha</Text>
                        <Text>600 gramas de queijo muçarela</Text>
                        <Text>Queijo parmesão ralado a gosto</Text>
                        <Text>Molho à bolonhesa</Text>
                        <Text>1. Em uma panela, coloque 1 fio de azeite e 1 quilo de carne moída. Frite até ficar soltinho.
                        2. Em seguida, acrescente 2 cebolas picadas, 2 dentes de alho picados, 1 pimentão verde picado, 1 pimentão amarelo picado, 1 pimentão vermelho picado, 3 tomates picados em cubos e tempero verde a gosto. Refogue.
                        3. Depois, adicione molho de tomate a gosto e sal a gosto. Misture e reserve.
                        Modo de Preparo - Lasanha
                        1. Em um refratário que possa ir ao forno, espalhe a primeira camada de molho à bolonhesa no fundo.
                        2. Em seguida, faça uma camada com a massa de lasanha.
                        3. Depois, faça mais uma camada com molho à bolonhesa. Em seguida, acrescente uma camada de queijo muçarela.
                        4. Repita as camadas e finalize com queijo parmesão ralado a gosto.
                        5. Leve ao forno preaquecido a 200 graus Celsius por 20 minutos.
                        6. Depois, aumente a temperatura para 250 graus Celsius e deixe assar por mais 20 minutos.
                        7. Sirva em seguida
                        </Text>
            </View>
        </Modalize>

        <Modalize
            ref={modalizeFF}
            snapPoint={180}
            modalHeight={400}
        >
            <View sstyle={styles({}).modalize}>
                                <Text>Filé de frango ao molho de requeijão</Text>
                    <Text>Ingredientes</Text>
                    <Text>50 gramas de manteiga</Text>
                    <Text>50 gramas de farinha de trigo</Text>
                    <Text>150 militros de leite integral</Text>
                    <Text>200 gramas de requeijão cremoso</Text>
                    <Text>Sal a gosto</Text>
                    <Text>Pimenta-do-reino a gosto</Text>
                    <Text>Modo de Preparo - Filé de frango Sadia Bio
                    1. Tempere os filés de peito de frango Sadia Bio com sal, cebola em pó, orégano e tomilho picado.
                    2. Aqueça uma frigideira em temperatura média com azeite e disponha os filés de peito de frango.
                    3. Grelhe os filés por 8 minutos de cada lado e retire-os da frigideira.
                    Modo de Preparo - Molho de requeijão
                    1. Na mesma frigideira em que grelhou o frango, adicione a manteiga, a farinha de trigo e misture.
                    2. Acrescente o leite integral, o requeijão cremoso, o sal, a pimenta-do-reino e cozinhe por 3 minutos, mexendo com uma colher.</Text>
            </View>
        </Modalize>


        <Modalize
            ref={modalizeTor}
            snapPoint={180}
            modalHeight={400}
        >
            <View sstyle={styles({}).modalize}>
            <Text>Tortinha de maçã</Text>
                    <Text>Ingredientes - Massa</Text>
                    <Text>1 xícara de resíduos de leite de castanhas ou leite de vaca</Text>
                    <Text>1 banana prata amassada</Text>
                    <Text>1 colher de chá de canela em pó</Text>
                    <Text>2 colheres de sopa de ghee ou manteiga comum</Text>
                    <Text>3 colheres de chá de mel</Text>
                    <Text>2 colheres de chá de açúcar mascavo ou de coco</Text>
                    <Text>Ingredientes - Recheio</Text>
                    <Text>1 maçã fuji pequena fatiada</Text>
                    <Text>1 copo americano de suco de laranja</Text>
                    <Text>Meia xícara de água</Text>
                    <Text>1 colher de sopa de aveia em flocos</Text>
                    <Text>Meia colher de chá de canela</Text>
                    <Text>1 colher de chá de açúcar de coco ou mascavo</Text>
                    <Text>Ingredientes - Cobertura</Text>
                    <Text>1 colher de castanhas da sua preferência
                    Modo de Preparo - Massa
                    1. Preaqueça o forno a 200 graus Celsius.
                    2. Bata no liquidificador a castanha com água. Depois, coe essa mistura e utilize os resíduos para o preparo da massa.
                    3. Amasse a banana e misture com o restante dos ingredientes da massa.
                    4. Coloque a massa em forminhas de silicone e pressione bem, para que ela não fique muito grossa.
                    5. Leve ao forno por cerca de 15 minutos.</Text>
                    <Text>Modo de Preparo - Recheio</Text>
                    <Text>1. Coloque numa panela a maçã, o suco de laranja, água, aveia em flocos, a canela e o açúcar.
                    2. Leve ao fogo brando e misture até a maçã ficar cozida. Deixe esfriar.</Text>
                    <Text>Modo de Preparo - Montagem</Text>
                    <Text>1. Após retirar a massa da tortinha do forno, acrescente o recheio, distribuindo por igual entre as forminhas.
                    2. Finalize com a castanha e está pronto!</Text>

            </View>
        </Modalize>
        
    </View>
  );
}
export default Home;

const styles = () => StyleSheet.create({
   
    receita:{
        fontSize: sizes.font.xlarge, 
        textAlign: 'center', 
        fontWeight: 'bold', 
        margin: sizes.spacing.xlarge,

    },

    box1:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    img:{
        width: 150, 
        height: 130, 
        padding: sizes.spacing.medium, 
        borderRadius: sizes.spacing.small,
    },
    modalize:{
        flex: 1, 
        height: 180, 
        justifyContent: 'space-around',
        alignItems: 'center', 
        margin: sizes.spacing.modalize,
    }
    
    
  
  });