import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Estilo from "./estilo";

export default props =>{
    const delta = props.max - props.min + 1    
    const aleatorio = parseInt(Math.random() * delta + props.min)
    return (
        <View>
            <Text style={style.txtG}>
                Número aleatório {aleatorio}
            </Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 30,
            textAlign: 'center',
            marginTop: 20
           
        }
    }

)
