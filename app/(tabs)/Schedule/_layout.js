import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen
        name="reservation"
        options={{
          presentation: "transparentModal",
        }}
      />
    </Stack>
  );
}