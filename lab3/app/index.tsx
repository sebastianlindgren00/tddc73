import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import RepoCard from "./components/repo-card";
import SearchOptionBar from "./components/search-option-bar";

export default function Index() {
  interface Repo {
    name: string;
    full_name: string;
    description: string;
    forks: number;
    stars: number;
    license: string;
    url: string;
  }

  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("cpp");

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true); // set true when fetching
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=30&page=1`
        );
        const data = await response.json();
        setRepos(
          data.items.map((item: any) => ({
            name: item.name,
            full_name: item.full_name,
            description: item.description,
            forks: item.forks_count,
            stars: item.stargazers_count,
            license: item.license ? item.license.name : "No license",
            url: item.html_url,
          }))
        );
      } catch (error) {
        console.error("Error fetching", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, [language]); // re-run on language change

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchOptionBar selectedLanguage={language} setLanguage={setLanguage} />
      <FlatList
        data={repos}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <RepoCard repo={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    alignItems: "center", // center horizontally
    padding: 10,
  },
});
