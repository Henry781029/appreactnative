/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';
import usePressability from 'react-native/Libraries/Pressability/usePressability';
import useMergeRefs from 'react-native/Libraries/Utilities/useMergeRefs';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultadoCalculo from './src/components/ResultadoCalculo';
import colors from './src/utils/colors';


const App = () => {

  const [Nombre, setNombre] = useState(null);
  const [Capital, setCapital] = useState(null);
  const [Interest, setInterest] = useState(null);
  const [Meses, setMeses] = useState(null);
  const [Total, setTotal] = useState(null);
  const [errorMensaje, seterrorMensaje] = useState('');

  useEffect (() =>{
    if(Nombre && Capital && Interest && Meses){
      calculate();
    }else{
      reset();
    }
  }, [Nombre, Capital, Interest, Meses])

  const calculate = () =>{
    reset();
    if (!Nombre){
    seterrorMensaje ("Añade Nombre del Cotizante");
    }else if(!Meses){
    seterrorMensaje ("Añade los meses de plazo del monto");
    }else if(!Capital){
      seterrorMensaje ("añade la cantidad que quieres solicitar");
    }else if(!Interest){
      seterrorMensaje ("Añade el interes del prestamo");
    }else{
      const i = Interest / 100;
      const fee = Capital / ((1 - Math.pow(i + 1, - Meses)) / i);
      setTotal({
        mesesPago: fee.toFixed(2).replace('.' , ','),
        pagototal: (fee * Meses).toFixed(2).replace('.' , ','),
      });
    }
  };

  const reset = ()=>{
    seterrorMensaje ("");
    setTotal(null)
  }
  const isDarkMode = useColorScheme() === 'dark';

  return (
  <>
    <StatusBar
    barStyle="light-content"
    />
   <SafeAreaView style={estilo.safearea}>
      <Text style={estilo.titulo}>COTIZADOR DE PRESTAMOS</Text>
      <Form 
      setNombre = {setNombre}
      setCapital = {setCapital}
      setInterest = {setInterest}
      setMeses = {setMeses}
      />
    </SafeAreaView>

   <ResultadoCalculo
      Nombre = {Nombre}
      Capital = {Capital}
      Interest = {Interest}
      Meses = {Meses}
      Total = {Total}
      errorMensaje = {errorMensaje}
   />

    <Footer
    calculate = {calculate}
    />
  </>  
   
  );
};

const estilo = StyleSheet.create ({

  safearea:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center"
  },

  titulo:{
    fontSize: 25,
    fontWeight: "bold",
    color:"#FDFEFE",
    marginTop: 15
  },

});



export default App;
