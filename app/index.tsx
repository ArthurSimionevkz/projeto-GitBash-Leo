import { router } from "expo-router";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Contador: {count}</Text>

      <Button
        title="Personagens"
        onPress={() => router.push('/characteres')}
      />

 
      <Button
        title="Aumentar"
        onPress={() => setCount(count + 1)}
      />

     
      <Button
        title="Diminuir"
        onPress={() => setCount(count - 1)}
      />
    </View>
  );
}
