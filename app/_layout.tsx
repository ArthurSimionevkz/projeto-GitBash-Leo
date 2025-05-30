import { Slot, Stack } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Layout () {
    return (
        <Stack>
            <Stack.Screen name = "(tabs)" options={{ headerShown: false }} />
        </Stack>
    ) 
}
