import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const currentPlan = {
  name: "Elite",
  price: "$99.99",
  features: [
    "24/7 support",
    "Daily reports",
    "Phone support",
    "Custom analytics",
    "Personalized advice",
  ],
};

const availablePlans = [
  {
    id: 1,
    name: "Standard",
    price: "$49.99",
    features: ["Basic support", "Monthly reports", "Email notifications"],
  },
  {
    id: 2,
    name: "Max",
    price: "$79.99",
    features: [
      "Priority support",
      "Weekly reports",
      "SMS notifications",
      "Advanced analytics",
    ],
  },
  {
    id: 3,
    name: "Elite",
    price: "$99.99",
    features: [
      "24/7 support",
      "Daily reports",
      "Phone support",
      "Custom analytics",
      "Personalized advice",
    ],
  },
];

export default function subscription() {
  const navigation = useNavigation();
  const handleChangeSubscription = () => {
    console.log("Change subscription");
    // Implement navigation or action to change subscription
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FDA51D" />
        </TouchableOpacity>
        <Text style={styles.title}>Payments</Text>
        {/* <TouchableOpacity onPress={handleChangePaymentMethod}>
            <Text style={styles.changeButton}>Change</Text>
          </TouchableOpacity> */}
      </View>
      <View style={styles.container}>
        {/* Current Plan */}
        <View style={styles.currentPlanCard}>
          <Text style={styles.currentPlanTitle}>Current Plan</Text>
          <Text style={styles.currentPlanName}>{currentPlan.name}</Text>
          <Text style={styles.currentPlanPrice}>{currentPlan.price}</Text>
          <View style={styles.features}>
            {currentPlan.features.map((feature, index) => (
              <View key={index} style={styles.feature}>
                <Ionicons name="checkmark-outline" size={16} color="#FDA51D" />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={styles.changeButton}
            onPress={handleChangeSubscription}
          >
            <Text style={styles.changeButtonText}>Change Subscription</Text>
          </TouchableOpacity>
        </View>

        {/* Available Plans */}
        <ScrollView>
          <View style={styles.plansContainer}>
            <Text style={styles.plansTitle}>Available Plans</Text>
            {availablePlans.map((plan) => (
              <View key={plan.id} style={styles.planCard}>
                <View style={styles.header}>
                  <Text style={styles.planTitle}>{plan.name}</Text>
                  <Text style={styles.planPrice}>{plan.price}</Text>
                </View>
                <View style={styles.features}>
                  {plan.features.map((feature, index) => (
                    <View key={index} style={styles.feature}>
                      <Ionicons
                        name="checkmark-outline"
                        size={16}
                        color="#FDA51D"
                      />
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  currentPlanCard: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  currentPlanTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  currentPlanName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FDA51D",
    marginBottom: 8,
  },
  currentPlanPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  features: {
    marginBottom: 16,
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 8,
  },
  changeButton: {
    paddingVertical: 12,
    backgroundColor: "#FDA51D",
    borderRadius: 8,
    alignItems: "center",
  },
  changeButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  plansContainer: {
    marginTop: 16,
  },
  plansTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  planCard: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  planPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FDA51D",
  },
});
