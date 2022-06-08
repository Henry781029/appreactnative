import React from "react";
import {
View,
StyleSheet,
TextInput
} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import {Picker} from '@react-native-picker/picker';
import colors from "../utils/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Form = (props) =>{

    const {setNombre, setCapital, setInterest, setMeses} = props;

    return(
        
        <View style={style.vistaForm1}>
            <View>
                <TextInput
                    placeholder="Nombre Completo"
                    style={style.nombre}
                    onChange={(e) => setNombre(e.nativeEvent.text)}
                />
            </View>

            <View style={style.cajaSelect}>
                <RNPickerSelect
                    onValueChange={(value) => setMeses(value)}
                    placeholder={{
                        label: 'seleciona los plazos...',
                        value: null,
                    }}
                    items={[
                        { label: '3 meses', value: 3 },
                        { label: '6 meses', value: 6 },
                        { label: '12 meses', value: 12 },
                        { label: '24 meses', value: 24 },
                        { label: '36 meses', value: 36 },
                    ]}
                /> 
            </View>
            
            <View style={style.vistacaja}>
                <TextInput 
                    placeholder="Cantidad a pedir"
                    keyboardType="numeric"
                    style={style.caja}
                    onChange={(e) => setCapital(e.nativeEvent.text)}
                />
                <TextInput 
                    placeholder="Interes %"
                    keyboardType="numeric"
                    style={[style.caja, style.cajapor]}
                    onChange={(e) => setInterest(e.nativeEvent.text)}
                />
            </View> 
            

        </View>
    );
};

const style = StyleSheet.create({
    vistaForm1:{
        position:"absolute",
        bottom: -90,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 210,
        justifyContent: "center",
    },

    vistacaja:{
        flexDirection:"row"
    },

    caja:{
        height: 50,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "black",
        paddingHorizontal: 20
    },

    cajapor:{
        width: "40%",
        marginLeft: 5,
    },

    cajaSelect:{
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 5,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#FDFEFE",
        marginLeft: -5,
        marginRight: -5,
    },

    nombre: {
        height: 40,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "105%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "black",
        paddingHorizontal: 20,
        marginTop: 5,
        
    }

});







export default Form;