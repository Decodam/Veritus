
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function Home() {
  return (
    <>
      <View style={styles.topUserData}>
        <View style={{flex: 1}}>
          <Text style={styles.greetings}>Good Morning</Text>
          <Text style={styles.username}>Arghya Mondal</Text>
        </View>

        <TouchableOpacity onPress={() => {router.navigate("/profile")}} activeOpacity={0.7}>
          <Image style={styles.avatar} source={{uri: "https://mighty.tools/mockmind-api/content/abstract/51.jpg"}} />
        </TouchableOpacity>
      </View>

      
      <View style={styles.mainCards}>
        <TouchableOpacity activeOpacity={0.7} style={[styles.card, {marginRight: 16, flex: 1.5}]}>
          <View style={{flexDirection: "row", flex: 1}}>
            <View style={{flex: 1, paddingVertical: 6, justifyContent: "flex-end"}}>
              <Image style={{width: 94, height: 94}} source={{uri: "https://kzzbjwjnwuncsohpmsxv.supabase.co/storage/v1/object/public/speciality-images/heart.png"}} />
            </View>
            <View>
              <View style={{padding: 10, borderRadius: 10, backgroundColor: "#e0e0e0"}}><FontAwesome6 name="stethoscope" size={16} color="black" /></View>
            </View>
          </View>
          <Text style={{color: "333"}}>Continue</Text>
          <Text style={styles.cardText}>Cardiology</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.card}>
          <View style={{flexDirection: "row", flex: 1, justifyContent: "flex-end"}}>
            <View>
              <View style={{padding: 10, borderRadius: 10, backgroundColor: "#e0e0e0"}}><FontAwesome6 name="user-doctor" size={16} color="black" /></View>
            </View>
          </View>
          <Text style={{color: "333"}}>Random</Text>
          <Text style={styles.cardText}>Patient</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainCards: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 24,
  },
  topUserData: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: "center",
  },
  username: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
  },
  greetings: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 32,
  },
  card: {
    padding: 15, borderRadius: 16, 
    backgroundColor: "#f3f3f3", 
    borderColor: "#eee", borderWidth: 1, 
    flex: 1, minHeight: 160
  },
  cardText: {
    fontSize: 22,
    fontWeight: "500"
  }
});