import CustomButton from "@/components/ui/CustomButton";
import React, { useState } from "react";
import { Button, Text, View } from "react-native"; 

export default function HomeScreen() {
    const [count, SetCount] = useState(0);
    
    return (
        <View>
            <Text>{count}</Text>
             <Button 
             title="Aumentar" 
             onPress={() => {SetCount(count+1)}}    
           />

            <Button
             title="Diminuir"
             onPress={() => {SetCount(count-1)}}
                
             />
            <Button
             title="Voltar do Zero"
             onPress={() => {SetCount(count-count)}}
            />
            <CustomButton title="teste"/>
            <CustomButton title="teste1"/>
            <CustomButton title="teste2"/>
        </View>
    );
}
