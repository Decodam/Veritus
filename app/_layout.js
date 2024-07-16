import React from 'react';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';


export default function Root() {
  return (
    <>
      <Slot />
      <StatusBar style='dark' />
    </>
  );
};