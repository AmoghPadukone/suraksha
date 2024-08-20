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

const transactions = [
  {
    id: 1,
    date: "2024-08-15",
    plan: "Elite",
    amount: "$99.99",
    paymentMethod: "Credit Card",
    paidBy: "John Doe",
  },
  {
    id: 2,
    date: "2024-07-25",
    plan: "Standard",
    amount: "$49.99",
    paymentMethod: "PayPal",
    paidBy: "Jane Smith",
  },
  {
    id: 3,
    date: "2024-06-10",
    plan: "Basic",
    amount: "$19.99",
    paymentMethod: "Debit Card",
    paidBy: "Alice Johnson",
  },
  // Add more transactions as needed
];

export default function OrderHistory() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#FDA51D" />
          </TouchableOpacity>
          <Text style={styles.title}>Payments</Text>
          {/* <TouchableOpacity onPress={handleChangePaymentMethod}>
            <Text style={styles.changeButton}>Change</Text>
          </TouchableOpacity> */}
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {transactions.map((transaction) => (
            <View key={transaction.id} style={styles.transactionCard}>
              <View style={styles.transactionHeader}>
                <Text style={styles.date}>{transaction.date}</Text>
                <Ionicons
                  name="ios-calendar-outline"
                  size={20}
                  color="#FDA51D"
                />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.label}>Plan:</Text>
                <Text style={styles.detail}>{transaction.plan}</Text>
                <Text style={styles.label}>Amount:</Text>
                <Text style={styles.detail}>{transaction.amount}</Text>
                <Text style={styles.label}>Payment Method:</Text>
                <Text style={styles.detail}>{transaction.paymentMethod}</Text>
                <Text style={styles.label}>Paid By:</Text>
                <Text style={styles.detail}>{transaction.paidBy}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaace-between",
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  scrollContainer: {
    height: "100%",
    paddingBottom: 65,
  },
  transactionCard: {
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
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  transactionDetails: {
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },
  detail: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
});
