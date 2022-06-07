import { 
StyleSheet,
Text, 
TouchableOpacity,
View } 
from 'react-native'
import React from 'react'
import colors from '../utils/colors';

export default function Footer (props) {

  const {calculate} = props;

  return (
    <View style={styles.viewfooter}>
        <TouchableOpacity style ={styles.buttom} onPress={calculate}>
            <Text style = {styles.viewcalculo}>CALCULAR</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

    viewfooter:{
        position: "absolute",
        bottom: 0,
        width:"100%",
        backgroundColor: colors.SECOND_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        alignItems: "center",
        justifyContent: "center",
    },

    viewcalculo:{
        fontWeight:"bold",
        fontSize: 18,
        color: "#FDFEFE",
        textAlign: "center"
    },
    buttom:{
        backgroundColor: colors.SECOND_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: "70%",
    }

});
