import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function ResultCalc(props){
    return(
        <View>
            <Text>{props.messageResultCalc}</Text>
            <Text>{props.ResultCalc}</Text>
        </View>
    )
}