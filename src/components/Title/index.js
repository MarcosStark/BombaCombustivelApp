import React from "react";
import { View, Text } from "react-native";

export default function Title(){
    return(
        <View>
            <Text>Cálculo do combustível</Text>
            {/*<TextInput value={baseValue} onChange={(e) => setBaseValue(e.target.value)} placeholder='Valor da base...'/>
            <TextInput value={heightValue} onChange={(e) => setHeightValue(e.target.value)}placeholder='Valor da altura...'/>
            <Text value={result1} onChange={(e) => setResult1(e.target.value)}></Text>
            <Button title='Calcular'/>
            <StatusBar style="auto" />*/}
        </View>
    )
}