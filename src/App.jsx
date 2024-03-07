import React from "react";
import { StyleSheet, View } from "react-native";
import Estilo from "./components/estilo";

import Titulo from "./components/Titulo";
import Aleatorio from "./components/Aleatorio";
// import MinMax from "./components/MinMax";

export default ()=>{

    return (
        <View style={Estilo.fundo}>
            <Titulo />
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            {/* <MinMax maior={90} menor={10}/> */}
        </View>
    )

}

const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 30,
            textAlign: 'center'
        }
    }

)
