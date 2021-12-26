import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import styles from './components/styles';


const api = async (callback) => {
  const response = await fetch ('https://api-imp.seade.gov.br/v1/dados/0/2/2010');
  const parsed = await response.json();
  callback(parsed.dados) 
}

export default function App() {

  const [registro, setRegistros] = useState([]);

  useEffect(()=> {
  api(setRegistros)
  }, []);


return (
    <View style={styles.container}>
       <Text style = {styles.paragraph}> Sistema Estadual de Análise de Dados (SEADE) </Text>
       
       <Text style = {styles.item2}>
       SEADE é um Sistema de Gestão Pública – GRP orientado por processos, com funcionalidades que contribuem para a otimização e transparência das rotinas administrativas e aumento da arrecadação dos municípios. {'\n'} {'\n'} 
       
       Abaixo estão variados municípios do Estado de São Paulo e as regiões as quais pertencem:
       
       </Text>

       <Image style = {styles.img} source = {require ('./assets/sp.jpg')}/>

       <FlatList
         data = {registro}
         keyExtractor = {(item) => item.codigo_localidade.toString()}
         renderItem = {({item}) => <Text style = {styles.item}> 
       <Text style = {styles.legenda}> Município: </Text> {item.localidade} {'\n'} {item.nome_localidade_pai} 
        
       </Text>}
        
       />
       
    </View>
  );
}





