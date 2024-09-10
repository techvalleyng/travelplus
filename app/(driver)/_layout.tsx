import { Stack } from "expo-router";

export default function DriverLayout() {
  return (
    <Stack>
      <Stack.Screen name="Home" options={{ headerShown: false }} />
      <Stack.Screen name="Verification" options={{ headerShown: false }} />
    </Stack>
  );
}
