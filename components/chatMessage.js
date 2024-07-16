import { StyleSheet, Text, View } from "react-native";

const ChatMessage = ({ role, parts }) => {
  return (
    <View style={[styles.messageContainer, role === 'user' ? styles.userMessage : styles.modelMessage]}>
      {parts.map((part, index) => (
        <Text key={index} style={[styles.messageText, {color: role === 'user' ? "#fff" : "#000"}]}>{part.text}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#3575d6',
    borderTopRightRadius: 0
  },
  modelMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 0
  },
  messageText: {
    fontSize: 16,
  },
})

export default ChatMessage