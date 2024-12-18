import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

type repo = {
  license: string;
  name: string;
  full_name: string;
  description: string;
  forks: number;
  stars: number;
  url: string;
};

export default function RepoCard({ repo }: { repo: repo }) {
  const router = useRouter();

  const handlePress = () => {
    // passing params
    router.push({
      pathname: `/repo-details`,
      params: {
        name: repo.name,
        description: repo.description,
        license: repo.license,
        url: repo.url,
      },
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Text style={styles.name}>{repo.name}</Text>
        <Text style={styles.fullName}>{repo.full_name}</Text>
        <Text style={styles.description}>{repo.description}</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.stat}>{repo.forks} Forks</Text>
          <Text style={styles.stat}>{repo.stars} ⭐</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 400,
    backgroundColor: "#fffaf0", 
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginVertical: 10, 
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  fullName: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
  },
  description: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
    marginVertical: 8,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  stat: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

