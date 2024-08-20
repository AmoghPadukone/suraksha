import { Ionicons } from "@expo/vector-icons"; // Ensure react-native-vector-icons is installed
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const LiabilitiesTabContent = () => {
  const navigation = useNavigation();

  // Example data for charts and liabilities
  const liabilityData = {
    labels: ["Personal Loans", "Credit Cards", "Unorganized Loans", "Others"],
    datasets: [
      {
        data: [50000, 30000, 15000, 10000],
      },
    ],
  };

  const topLoans = [
    { name: "Home Loan", amount: "₹4,00,000", interest: "7%" },
    { name: "Car Loan", amount: "₹2,00,000", interest: "8%" },
    { name: "Education Loan", amount: "₹1,50,000", interest: "6%" },
  ];

  const recentPayments = [
    {
      date: "01 Aug 2024",
      description: "Credit Card Payment",
      amount: "₹5,000",
    },
    {
      date: "28 Jul 2024",
      description: "Personal Loan Payment",
      amount: "₹10,000",
    },
    {
      date: "15 Jul 2024",
      description: "Home Loan Payment",
      amount: "₹15,000",
    },
  ];

  const unorganizedLoans = [
    { name: "Loan 1", amount: "₹5,000" },
    { name: "Loan 2", amount: "₹3,000" },
  ];

  const paymentHistory = [
    {
      date: "01 Aug 2024",
      description: "Credit Card Payment",
      amount: "₹5,000",
    },
    {
      date: "28 Jul 2024",
      description: "Personal Loan Payment",
      amount: "₹10,000",
    },
    {
      date: "15 Jul 2024",
      description: "Home Loan Payment",
      amount: "₹15,000",
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: () => `#FDA51D`,
    barPercentage: 0.5,
  };

  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => navigateToScreen("LiabilitiesOverview")}
        >
          <Text style={styles.header}>Liabilities</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#FDA51D" />
        </TouchableOpacity>
        <Text style={styles.subHeader}>Total Liabilities: ₹7,50,000</Text>
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => navigateToScreen("LiabilityBreakdown")}
        >
          <Text style={styles.sectionHeader}>Liability Breakdown</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#FDA51D" />
        </TouchableOpacity>
        <BarChart
          data={liabilityData}
          width={screenWidth - 40} // Width of the chart
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
          style={styles.chartStyle}
        />
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => navigateToScreen("TopLoans")}
        >
          <Text style={styles.sectionHeader}>Top Loans</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#FDA51D" />
        </TouchableOpacity>
        {topLoans.map((loan, index) => (
          <View key={index} style={styles.loanItem}>
            <Text style={styles.loanName}>{loan.name}</Text>
            <Text style={styles.loanDetails}>Amount: {loan.amount}</Text>
            <Text style={styles.loanDetails}>Interest: {loan.interest}</Text>
          </View>
        ))}
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => navigateToScreen("RecentPayments")}
        >
          <Text style={styles.sectionHeader}>Recent Payments</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#FDA51D" />
        </TouchableOpacity>
        {recentPayments.map((payment, index) => (
          <View key={index} style={styles.paymentItem}>
            <Text style={styles.paymentDate}>{payment.date}</Text>
            <Text style={styles.paymentDescription}>{payment.description}</Text>
            <Text style={styles.paymentAmount}>{payment.amount}</Text>
          </View>
        ))}
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => navigateToScreen("UnorganizedLoans")}
        >
          <Text style={styles.sectionHeader}>Unorganized Loans</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#FDA51D" />
        </TouchableOpacity>
        {unorganizedLoans.map((loan, index) => (
          <View key={index} style={styles.unorganizedLoanItem}>
            <Text style={styles.unorganizedLoanName}>{loan.name}</Text>
            <Text style={styles.unorganizedLoanAmount}>{loan.amount}</Text>
          </View>
        ))}
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => navigateToScreen("PaymentHistory")}
        >
          <Text style={styles.sectionHeader}>Payment History</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#FDA51D" />
        </TouchableOpacity>
        {paymentHistory.map((payment, index) => (
          <View key={index} style={styles.paymentItem}>
            <Text style={styles.paymentDate}>{payment.date}</Text>
            <Text style={styles.paymentDescription}>{payment.description}</Text>
            <Text style={styles.paymentAmount}>{payment.amount}</Text>
          </View>
        ))}
      </View>

      <View style={{ paddingTop: 80, paddingBottom: 100 }}>
        <Text style={styles.dateInfo}>
          *Data last updated as of : 2024-06-07, 19:30:00 IST
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F2F2F2",
  },
  header: {
    fontSize: 32,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 8,
    flex: 1,
  },
  subHeader: {
    fontSize: 18,
    color: "#888",
    marginBottom: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2, // For Android shadow
  },
  sectionHeader: {
    fontSize: 20,
    color: "#333",
    marginBottom: 12,
    fontWeight: "bold",
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  loanItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  loanName: {
    fontSize: 16,
    color: "#333",
  },
  loanDetails: {
    fontSize: 14,
    color: "#888",
  },
  paymentItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  paymentDate: {
    fontSize: 14,
    color: "#888",
  },
  paymentDescription: {
    fontSize: 16,
    color: "#333",
  },
  paymentAmount: {
    fontSize: 16,
    color: "#FDA51D",
    fontWeight: "bold",
  },
  unorganizedLoanItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  unorganizedLoanName: {
    fontSize: 16,
    color: "#333",
  },
  unorganizedLoanAmount: {
    fontSize: 16,
    color: "#FDA51D",
  },
  dateInfo: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
});

export default LiabilitiesTabContent;
