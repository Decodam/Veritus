import { Feather, Foundation } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fetchQuote } from '../../../utils/utils';


export default function Profile() {
  const insets = useSafeAreaInsets();
  const [quote, setQuote] = useState({
    text: "The good physician treats the disease; the great physician treats the patient who has the disease.",
    author: "William Osler"
  });

  const getQuote = async () => {
    try {
      const fetchedQuote = await fetchQuote();
      setQuote(fetchedQuote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };


  return (
    <View
    style={[styles.container, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }]}>
      <ScrollView style={{flex: 1}}>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.headerText}>Profile</Text>

          <TouchableOpacity onPress={getQuote} style={styles.headerButton}>
            <Feather name="shuffle" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.userInfo}>
          <Image style={styles.avatar} source={{ uri: 'https://mighty.tools/mockmind-api/content/abstract/51.jpg' }} /> 
          <View style={styles.info}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.username}>@aiims_nagpur</Text>
            {/* TODO: Make this image dynamic */}
          </View>
        </View>


        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Cases</Text>
            <Text style={styles.statValue}>1,234</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Accuracy</Text>
            <Text style={styles.statValue}>70%</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Ratings</Text>
            <Text style={styles.statValue}>12</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Streak</Text>
            <Text style={styles.statValue}>24</Text>
          </View>
        </View>



        <Text style={styles.bio}>
          {`"`}{quote.text}{`"`}
        </Text>
        <Text style={[styles.bio, {textAlign: "right", marginTop: 10, marginBottom: 20, color: "#aaa"}]}>
          {`- `}{quote.author}
        </Text>



        <View style={styles.options}>
          <TouchableOpacity activeOpacity={0.7} style={styles.optionButton}>
            <Feather name="user" size={20} color={"#333"} /><Text style={[styles.optionButtonText, {color: "#333"}]}>Account Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.optionButton}>
            <Feather name="bar-chart-2" size={20} color={"#333"} /><Text style={[styles.optionButtonText, {color: "#333"}]}>Your Performance</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.optionButton}>
            <Feather name="award" size={20} color={"#465cc5"} /><Text style={[styles.optionButtonText, {color: "#465cc5"}]}>Your Badges</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.optionButton}>
          <Foundation name="crown" size={24} color={"#fac629"} /><Text style={[styles.optionButtonText, {color: "#eab825"}]}>Buy Premium</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={[styles.optionButton, {borderBottomWidth: 0}]}>
          <Feather name="power" size={20} color={"#ea2535"} /><Text style={[styles.optionButtonText, {color: "#ea2535"}]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 25,
  },
  info: {
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    color: '#999',
    fontSize: 18,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    color: '#999',
    fontSize: 14,
  },
  statValue: {
    fontSize: 18,
  },
  bio: {
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
  },
  options: {
    margin: 20,
    borderColor: "#e9e9e9",
    borderWidth: 1,
    borderRadius: 16,
    overflow: "hidden"
  },
  optionButton: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderBottomColor: "#e9e9e9",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  optionButtonText: {
    fontSize: 16,
    marginLeft: 8
  },
});