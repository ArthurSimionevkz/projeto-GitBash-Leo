import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {

    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options= {{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (<Ionicons name="home" size={24} color={color} />),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explorar',
                    tabBarIcon: ({color}) => (<Ionicons name="home-outline" color={color} />),
                }}
            />  
        </Tabs>
    );
}