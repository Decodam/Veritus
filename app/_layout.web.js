import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Slot } from 'expo-router';

export default function WebRoot() {
  return (
    <View style={styles.container}>
        <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "800px",
    marginHorizontal: "auto",
    width: "100%"
  },
});