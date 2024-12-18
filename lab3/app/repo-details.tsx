import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // arrow 

export default function RepoDetails() {
  const { name, description, license, url } = useLocalSearchParams(); // query params
  const router = useRouter(); 

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.license}>License: {license}</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(Array.isArray(url) ? url[0] : url)} // needed argument as string[]
        >
          {url}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20, 
  },
  card: {
    width: 600,
    height: 600,
    backgroundColor: "#fffaf0",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // android shadow
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  license: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 20,
  },
  link: {
    color: "#1e90ff",
    fontSize: 16,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
