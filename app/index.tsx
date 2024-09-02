import { Redirect } from "expo-router";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return <Redirect href="/(auth)/Welcome" />;
}
