import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultCalc from "./Result";

export default function Form(){

    const [gasolineValue, setGasolineValue] = useState(null)
    const [ethanolValue, setEthanolValue] = useState(null)
    const [messageCalc, setMessageCalc] = useState("preencha o valor da gasolina e do etanol.")
    const [calc, setCalc] = useState(null)
    const [textButton, setTextButton] = useState("calcular")

    function resultCalculator(){
        return setCalc((ethanolValue/gasolineValue).toFixed(2))
    }

    function validatorCalc(){
        if(gasolineValue != null && ethanolValue != null){
            resultCalculator()
            setMessageCalc("O alcool e: ")
            setTextButton("Calcular novamente")
            return
        } else {
            setCalc(null)
            setTextButton("calcular")
            setMessageCalc("preencha o valor da gasolina e do etanol.")
        }
    }

    return(
        <View>
            <View>
                <Text>Valor do Etanol</Text>
                <TextInput onChangeText={setEthanolValue} value={ethanolValue} placeholder="valor do etanol..." keyboardType="numeric"/>
                <Text>Valor da gasolina</Text>
                <Text>Valor da gasolina</Text>
                <TextInput onChangeText={setGasolineValue} value={gasolineValue} placeholder="valor da gasolina..." keyboardType="numeric"/>
                <Button onPress={() => validatorCalc()} title={textButton}/>
            </View>
            <ResultCalc messageResultCalc={messageCalc} ResultCalc={calc}/>
        </View>
    )
}