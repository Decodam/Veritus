import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChatMessage from '../../../../components/chatMessage';
import { Feather, FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';


const DiagnosisChat = () => {
  const insets = useSafeAreaInsets();
  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalRef = useRef(null);
  const scrollViewRef = useRef();

  const [MessageFromUserInput, setMessageFromUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  let { speciality } = useLocalSearchParams();
  

  const [chatHistory, setChatHistory] = useState([
    {
      role: "user",
      parts: [{ text: "Hello, what consult do you have for me?" }],
    },
    {
      role: "model",
      parts: [{ text: "I have a CABG case." }],
    },
  ]);


  {/** Timer Code */}
  useEffect(() => {
    // Start timer when component mounts
    intervalRef.current = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => {
      // Clean up timer on component unmount
      clearInterval(intervalRef.current);
    };
  }, []);

  const formatTimeElapsed = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };


  {/** Scroll to bottom */}
  useEffect(() => {
    // Scroll to bottom when chatHistory updates
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [chatHistory]);




  {/** Submit Message */}
  const handleSendMessage = () => {
    setLoading(true);
    if (MessageFromUserInput) {
      const newMessage = {
        role: 'user',
        parts: [{ text: MessageFromUserInput }]
      };
      
      setChatHistory(prev => [...prev, newMessage]);
    }
    
    setMessageFromUserInput("");
    setLoading(false);
  };
  


  return (
    <View style={[styles.container, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }]}>


      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        
        <Text style={styles.headerText}>{speciality.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - {formatTimeElapsed(timeElapsed)}</Text>
        
        <TouchableOpacity onPress={() => alert('Stethoscope button')} style={styles.headerButton}>
          <FontAwesome6 name="stethoscope" size={18} color="#000" />
        </TouchableOpacity>
      </View>


      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {chatHistory.map((message, index) => (
          <ChatMessage key={index} role={message.role} parts={message.parts} />
        ))}
        {
          loading && (
            <Text style={{color: "#ccc", margin: 10}}>Loading...</Text>
          )
        }
      </ScrollView>




      {/* Input area for sending new message */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={MessageFromUserInput}
          onChangeText={setMessageFromUserInput}
          placeholder="Type your message..."
          onSubmitEditing={handleSendMessage}
          editable={!loading}
          blurOnSubmit={false}
        />
        <TouchableOpacity activeOpacity={0.7} disabled={loading} style={styles.sendButton} onPress={handleSendMessage}>
          {loading ? <ActivityIndicator color={"#fff"} size={24} /> : <Feather name="send" size={24} color="#fff" />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  scrollViewContent: {
    paddingBottom: 20, // Padding at the bottom to avoid content being hidden under input area
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 16, fontWeight: "600",
    backgroundColor: '#f0f0f0', // Grayish background color
  },
  sendButton: {
    backgroundColor: '#3575d6',
    height: 50, width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginLeft: 10,
  },
});

export default DiagnosisChat;
