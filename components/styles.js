import * as React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    alignItems: 'center'
  },

  paragraph: {
    backgroundColor: '#EBE2F0',
    borderRadius: 5,
    margin: 24,
    marginRight: 20,
    fontSize: 18,
    paddingVertical: 5, 
    textAlign: 'center', 
    fontWeight: 'bold',
    fontStyle: 'italic'
  },

  item2: {
    textAlign: 'center'     
  },

  legenda: {
     fontWeight: 600      
  },

  img: {
    height: 200,
    width: 300,
    borderRadius: 6,
    marginVertical: 25
  },

  item: {
    backgroundColor: '#D9BDFA',
    margin: 5,
    borderRadius: 5,
    textAlign: 'center',       
    paddingVertical: 10 
  }
  
})

export default styles;