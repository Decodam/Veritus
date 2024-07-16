import { Slot, Stack } from 'expo-router';
import React from 'react';


export default function PrivateRouter() {


  return (
    <Stack 
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};