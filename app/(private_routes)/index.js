
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import SubjectCard from '../../components/subjectCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



const DATA = [
  {
    id: '1',
    title: 'Cardiology',
    imageUrl: 'https://kzzbjwjnwuncsohpmsxv.supabase.co/storage/v1/object/public/speciality-images/heart.png',
    onPress: () => router.navigate("/diagnose/cardiology"),
    diseases: ['Heart disease', 'Arrhythmia', 'Congenital heart defects', 'Coronary artery disease']
  },
  {
    id: '2',
    title: 'Neurology',
    imageUrl: 'https://kzzbjwjnwuncsohpmsxv.supabase.co/storage/v1/object/public/speciality-images/brain.png',
    onPress: () => router.navigate("/diagnose/neurology"),
    diseases: ['Stroke', 'Epilepsy', 'Multiple sclerosis', 'Parkinson\'s disease']
  },
  {
    id: '3',
    title: 'Orthopedics',
    imageUrl: 'https://kzzbjwjnwuncsohpmsxv.supabase.co/storage/v1/object/public/speciality-images/spine.png',
    onPress: () => router.navigate("/diagnose/orthopedics"),
    diseases: ['Fractures', 'Arthritis', 'Sports injuries', 'Spinal disorders']
  },
  {
    id: '4',
    title: 'Pulmonology',
    imageUrl: 'https://kzzbjwjnwuncsohpmsxv.supabase.co/storage/v1/object/public/speciality-images/lungs.png',
    onPress: () => router.navigate("/diagnose/pulmonology"),
    diseases: ['Asthma', 'Chronic obstructive pulmonary disease (COPD)', 'Pneumonia', 'Lung cancer']
  },
  {
    id: '5',
    title: 'Nephrology',
    imageUrl: 'https://kzzbjwjnwuncsohpmsxv.supabase.co/storage/v1/object/public/speciality-images/kidney.png',
    onPress: () => router.navigate("/diagnose/nephrology"),
    diseases: ['Kidney stones', 'Chronic kidney disease', 'Glomerulonephritis', 'Polycystic kidney disease']
  },
  {
    id: '6',
    title: 'Hepatology',
    imageUrl: 'https://kzzbjwjnwuncsohpmsxv.supabase.co/storage/v1/object/public/speciality-images/liver.png',
    onPress: () => router.navigate("/diagnose/urology"),
    diseases: ['Hepatitis', 'Cirrhosis', 'Liver cancer', 'Fatty liver disease']
  },
  {
    id: '7',
    title: 'Gastroenterology',
    imageUrl: 'https://kzzbjwjnwuncsohpmsxv.supabase.co/storage/v1/object/public/speciality-images/intestine.png',
    onPress: () => router.navigate("/diagnose/gastroenterology"),
    diseases: ['Gastroesophageal reflux disease (GERD)', 'Irritable bowel syndrome (IBS)', 'Crohn\'s disease', 'Ulcerative colitis']
  },
  {
    id: '8',
    title: 'Obstetrics',
    imageUrl: 'https://kzzbjwjnwuncsohpmsxv.supabase.co/storage/v1/object/public/speciality-images/uterus.png',
    onPress: () => router.navigate("/diagnose/obstetrics"),
    diseases: ['Pregnancy complications', 'Prenatal care', 'Labor and delivery issues', 'Postpartum care']
  },
];


export default function Home() {
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
        <View style={styles.topUserData}>
          <View style={{flex: 1}}>
            <Text style={styles.greetings}>Good Morning</Text>
            <Text style={styles.username}>Arghya Mondal</Text>
          </View>

          <TouchableOpacity onPress={() => {router.navigate("/profile")}} activeOpacity={0.7}>
            <Image style={styles.avatar} source={{uri: "https://mighty.tools/mockmind-api/content/abstract/51.jpg"}} />
          </TouchableOpacity>
        </View>


        
        <View style={styles.mainContent}>
          <TouchableOpacity onPress={() => {router.navigate("/diagnose/cardiology")}} activeOpacity={0.7} style={[styles.card, {marginRight: 16, flex: 1.5}]}>
            <View style={{flexDirection: "row", flex: 1}}>
              <View style={{flex: 1, paddingVertical: 6, justifyContent: "flex-end"}}>
                <Image style={{width: 94, height: 94}} source={{uri: "https://kzzbjwjnwuncsohpmsxv.supabase.co/storage/v1/object/public/speciality-images/heart.png"}} />
              </View>
              <View>
                <View style={styles.iconButton}><FontAwesome6 name="stethoscope" size={16} color="black" /></View>
              </View>
            </View>
            <Text style={{color: "333"}}>Continue</Text>
            <Text style={styles.cardText}>Cardiology</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {router.navigate("/diagnose/random")}} activeOpacity={0.7} style={styles.card}>
            <View style={{flexDirection: "row", flex: 1, justifyContent: "flex-end"}}>
              <View>
                <View style={styles.iconButton}><FontAwesome6 name="user-doctor" size={16} color="black" /></View>
              </View>
            </View>
            <Text style={{color: "333"}}>Random</Text>
            <Text style={styles.cardText}>Patient</Text>
          </TouchableOpacity>
        </View>



        <View style={[styles.mainContent, {marginTop: 40, alignItems: "center", justifyContent: "space-between"}]}>
          <Text style={{fontSize: 22, fontWeight: "600"}}>All Subjects</Text>
          <TouchableOpacity activeOpacity={0.6}><Ionicons name="search" size={24} color="black" /></TouchableOpacity>
        </View>

        {/* Flat */}
        <View style={{marginTop: 10, marginBottom: 30, marginHorizontal: 20}}>
          {DATA.map((item, index) => (
            <SubjectCard
              key={index}
              organ={item.organ}
              title={item.title}
              diseases={item.diseases}
              imageUrl={item.imageUrl}
              iconName={item.iconName}
              onPress={item.onPress}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
  },
  mainContent: {
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