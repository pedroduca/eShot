import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MatchCard from "./src/components/MatchCard";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MatchCard />
      <Text>Teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
