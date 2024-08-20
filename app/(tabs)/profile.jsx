import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const navigation = useNavigation();

  const profileOptions = [
    { title: "My Account", route: "profile/myAccount", icon: "person-outline" },
    {
      title: "Subscription",
      route: "profile/subscription",
      icon: "subscriptions",
    },
    { title: "Order History", route: "profile/orderHistory", icon: "history" },
    { title: "Payments", route: "profile/payments", icon: "payment" },
    { title: "Settings", route: "profile/settings", icon: "settings" },
  ];

  const supportOptions = [
    { title: "App Support", route: "AppSupport", icon: "support-agent" },
    { title: "Feedback", route: "Feedback", icon: "feedback" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2", padding: 16 }}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}
      >
        <Image
          source={{ uri: "https://via.placeholder.com/80" }} // Replace with your avatar URL
          style={{ width: 80, height: 80, borderRadius: 40, marginRight: 16 }}
        />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "600",
              color: "#333333",
            }}
          >
            Aryan
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("ProfileEdit")}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: "#888888",
                  fontSize: 16,
                  marginTop: 4,
                }}
              >
                Elite Plan
              </Text>
              <MaterialIcons
                name="chevron-right"
                size={24}
                color="#888888"
                style={{ marginLeft: 8 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginBottom: 24 }}>
        {profileOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.route)}
            style={{
              paddingVertical: 16,
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#E0E0E0",
            }}
          >
            <MaterialIcons
              name={item.icon}
              size={24}
              color="#FDA51D"
              style={{ marginRight: 16 }}
            />
            <Text
              style={{
                fontSize: 18,
                color: "#333333",
                flex: 1,
              }}
            >
              {item.title}
            </Text>
            <MaterialIcons name="chevron-right" size={24} color="#888888" />
          </TouchableOpacity>
        ))}
      </View>

      <Divider style={{ marginVertical: 24, backgroundColor: "#E0E0E0" }} />

      <View>
        {supportOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.route)}
            style={{
              paddingVertical: 14,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 8,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: "#FDA51D",
              backgroundColor: "#FFF5E1",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name={item.icon}
              size={24}
              color="#FDA51D"
              style={{ marginRight: 8 }}
            />
            <Text
              style={{
                color: "#FDA51D",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
