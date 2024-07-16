// SubjectCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SubjectCard = ({ title, diseases, imageUrl, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.card} onPress={onPress}>
      <Image style={{ width: 100, height: 100 }} source={{ uri: imageUrl }} />
      <View style={{flex: 1, height: "100%", marginLeft: 10}}>
        <Text style={styles.cardText}>
          {title}
        </Text>
        {diseases && diseases.length > 0 && (
          <Text style={styles.diseasesText}>
            {diseases.slice(0, 3).join(', ')}{diseases.length > 3 && ', etc.'}
          </Text>
        )}
      </View>
      <View style={{height: "100%"}}>
        <View style={styles.iconButton}>
          <Feather name='arrow-up-right' size={18} color={"#000"} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
  },
  card: {
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f3f3f3",
    borderColor: "#eee",
    borderWidth: 1,
    minHeight: 160,
    flex: 1,
    marginVertical: 10
  },
  cardText: {
    fontSize: 22,
    fontWeight: "500",
  },
  diseasesText: {
    marginTop: 10,
    color: "#666"
  }
});

export default SubjectCard;
