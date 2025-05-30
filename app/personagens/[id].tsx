import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function Personagem() {
   const { id} = useLocalSearchParams();
   
   return (
       <View>
           <Text>{`você está vendo o personagem ${id}`}</Text>
       </View>
   );
}