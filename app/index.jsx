import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  const [loading, setLoading] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  if (!loading && isLoggedin) {
    return <Redirect href="/home" />;
  }
  return (
    <SafeAreaView className=" bg-softWhite h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full  justify-center  items-center min-h-[85vh] p-4">
          <View className="relative mt-5">
            <Text className="text-3xl  font-medium text-center">
              {" "}
              Unclaimed Assets,
              <Text className="text-secondary-200">Reclaimed Peace</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
