import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors';

export default function ResultadoCalculo(props) {
 
 const{Nombre, Capital, Interest, Meses, Total, errorMensaje} = props;
    return (
    <View style={styles.content}>
      {Total && (
          <View style={styles.vistaresultado}>
            <Text style={styles.vistaresumen}>
              RESUMEN
            </Text>
            <DataResult
              vistaresumen="Nombre Cotizante:"
              value ={` ${Nombre}`}
            />
            <DataResult
              vistaresumen="Cantidad Solicitada:"
              value ={`$ ${Capital}`}
            />
            <DataResult
              vistaresumen="Interes %:"
              value ={`${Interest} %`}
            />
             <DataResult
              vistaresumen="Plazos:"
              value ={`${Meses} Meses`}
            />
             <DataResult
              style={styles.totalpago}
              vistaresumen="Pago Mensual:"
              value ={`$ ${Total.mesesPago}`}
            />
            <DataResult
              vistaresumen="Total a Pagar:"
              value ={`$ ${Total.pagototal}`}
            />
          </View>
      )}
      <View>
          <Text style={styles.error}>
            {errorMensaje}
          </Text>
      </View>
    </View>
  )
}

function DataResult (props){
  const {vistaresumen, value}= props;

  return(
    <View style={styles.value}>
      <Text>{vistaresumen}</Text>
      <Text>{value}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    content:{
        marginTop: 90,
        marginHorizontal: 40,
    },
    error:{
        textAlign: "center",
        color: "red",
        fontWeight: "bold",
        fontSize: 20,
    },
    vistaresultado: {
        padding: 30, 
    },
    vistaresumen: {
      fontSize: 30,
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: 30,
    },
    value: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    totalpago:{
      fontWeight: "bold",
      color: colors.SECOND_COLOR_DARK,
      }

})