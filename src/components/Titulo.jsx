import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default props => {
    return (
        <View>
            <Text style={style.txtTitulo}>Aleatório</Text>
        </View>
    )
}


const style = StyleSheet.create(
    {
        txtTitulo:{
            fontSize: 50,
            margin: 50,
            color: '#5E1675',
        }
    }
)