import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import home from "./home";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center ">
      <Ionicons name={icon} size={24} color={color} />

      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "rgba(0, 0, 0, 0.6)",

          tabBarStyle: {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderWidth: 0,
            height: 60,
            position: "absolute",
            elevation: 0,
            backdropFilter: "blur(10px)", // Add backdrop filter for blur effect
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add box shadow for glassmorphic effect
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"home-sharp"}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="assetsLiabilities"
          options={{
            tabBarLabel: "assetsLiabilities",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"wallet"}
                color={color}
                name="Assets & Liabilities"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"person-sharp"}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#F2F2F2" style="dark" />
    </>
  );
};

export default TabsLayout;
