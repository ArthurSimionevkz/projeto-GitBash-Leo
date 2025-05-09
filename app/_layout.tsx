import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Characteres() {
  const router = useRouter();

  return (
    <View>
      <Text>teste</Text>

      <Button
        title="personagens"
        onPress={() => router.push('/characteres')}
      />
    </View>
  );
}
