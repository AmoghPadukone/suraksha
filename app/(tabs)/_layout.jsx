import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "@react-native-community/blur"; // Import the BlurView component
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("window").width;

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.tabIconContainer}>
      <Ionicons name={icon} size={24} color={color} />
      <Text
        style={[
          styles.tabLabel,
          { color: color, fontWeight: focused ? "600" : "400" },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

const CustomTabBar = (props) => {
  return (
    <View style={styles.tabBarContainer}>
      <BlurView
        style={styles.tabBar}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      >
        {props.children}
      </BlurView>
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
            backgroundColor: "white", // Make background transparent to show blur effect

            borderWidth: 0,
            height: 60,
            position: "absolute",
            elevation: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          },
          tabBar: (props) => <CustomTabBar {...props} />, // Use the custom TabBar component
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="home-sharp"
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
            tabBarLabel: "Assets & Liabilities",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="wallet"
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
                icon="person-sharp"
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

const styles = StyleSheet.create({
  tabBarContainer: {
    width: screenWidth,
    position: "absolute",
    bottom: 0,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 12,
  },
});

export default TabsLayout;
