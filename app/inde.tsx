import { useRouter } from "expo-router";
import React from "react";
import { View, Button } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

    return (
        <View>
        <Button
            title="Go to Profile"
            onPress={() => {
            router.push("/profile");
            }}
        />
        <Button
            title="Go to Settings"
            onPress={() => {
            router.push("/settings");
            }}
        />
        </View>
    );
}