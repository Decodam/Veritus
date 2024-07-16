import { Slot } from 'expo-router';
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Router() {
  const insets = useSafeAreaInsets();


  return (
    <View
      style={[{flex: 1, backgroundColor: "#fff"}, {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }]}>
      <ScrollView style={{flex: 1}}>
        <Slot />
      </ScrollView>
    </View>
  );
};