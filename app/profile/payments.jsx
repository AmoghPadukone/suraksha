import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Payments() {
  const navigation = useNavigation();

  const [paymentMethod, setPaymentMethod] = useState({
    type: "Credit Card",
    cardNumber: "**** **** **** 1234",
    cardHolder: "John Doe",
  });

  const [billingAddress, setBillingAddress] = useState({
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  });

  const [preferredPayment, setPreferredPayment] = useState({
    method: "Credit Card",
  });

  const transactionHistory = [
    { id: 1, date: "2024-08-01", amount: "$50.00", method: "Credit Card" },
    { id: 2, date: "2024-07-20", amount: "$25.00", method: "PayPal" },
    { id: 3, date: "2024-07-10", amount: "$75.00", method: "Credit Card" },
  ];

  const handleChangePaymentMethod = () => {
    console.log("Change Payment Method");
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 65 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#FDA51D" />
          </TouchableOpacity>
          <Text style={styles.title}>Payments</Text>
          <TouchableOpacity onPress={handleChangePaymentMethod}>
            <Text style={styles.changeButton}>Change</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Last Payment Method Widget */}
          <View style={styles.widget}>
            <Text style={styles.label}>Last Payment Method</Text>
            {paymentMethod.type === "Credit Card" ? (
              <View>
                <Text style={styles.paymentDetail}>
                  Card Number: {paymentMethod.cardNumber}
                </Text>
                <Text style={styles.paymentDetail}>
                  Card Holder: {paymentMethod.cardHolder}
                </Text>
              </View>
            ) : (
              <Text style={styles.paymentDetail}>
                Payment Method: {paymentMethod.type}
              </Text>
            )}
          </View>

          {/* Billing Address Widget */}
          <View style={styles.widget}>
            <Text style={styles.label}>Billing Address</Text>
            <Text style={styles.addressDetail}>
              {billingAddress.addressLine1}
            </Text>
            {billingAddress.addressLine2 && (
              <Text style={styles.addressDetail}>
                {billingAddress.addressLine2}
              </Text>
            )}
            <Text style={styles.addressDetail}>
              {billingAddress.city}, {billingAddress.state}{" "}
              {billingAddress.zipCode}
            </Text>
          </View>

          {/* Preferred Payment Method Widget */}
          <View style={styles.widget}>
            <Text style={styles.label}>Preferred Payment Method</Text>
            <Text style={styles.paymentDetail}>{preferredPayment.method}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  changeButton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FDA51D",
  },
  content: {
    padding: 16,
  },
  widget: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  paymentDetail: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  addressDetail: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  transactionRow: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  transactionDetail: {
    fontSize: 16,
    color: "#333",
  },
});
