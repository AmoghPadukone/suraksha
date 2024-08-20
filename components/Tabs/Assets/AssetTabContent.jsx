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

const AssetTabContent = () => {
  const navigation = useNavigation();

  // Example data for charts and assets
  const topAssets = [
    { name: "Asset 1", value: "₹50,000" },
    { name: "Asset 2", value: "₹30,000" },
    { name: "Asset 3", value: "₹20,000" },
  ];

  const assetDiversificationData = {
    labels: ["Stocks", "Bonds", "Real Estate", "Cash"],
    datasets: [
      {
        data: [40, 20, 30, 10],
      },
    ],
  };

  const recentTransactions = [
    { date: "01 Aug 2024", description: "Stock Purchase", amount: "₹5,000" },
    { date: "28 Jul 2024", description: "Real Estate Sale", amount: "₹20,000" },
    { date: "15 Jul 2024", description: "Dividend Received", amount: "₹1,500" },
  ];

  const investmentGoals = [
    { goal: "Retirement Fund", target: "₹10,00,000", achieved: "₹4,50,000" },
    { goal: "Emergency Fund", target: "₹2,00,000", achieved: "₹1,20,000" },
    { goal: "Vacation", target: "₹50,000", achieved: "₹30,000" },
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
          onPress={() => navigateToScreen("AssetsOverview")}
        >
          <Text style={styles.header}>Assets</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#FDA51D" />
        </TouchableOpacity>
        <Text style={styles.subHeader}>Top Asset Worth: ₹1,00,000</Text>
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => navigateToScreen("TopPerformingAssets")}
        >
          <Text style={styles.sectionHeader}>Top Performing Assets</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#FDA51D" />
        </TouchableOpacity>
        <BarChart
          data={assetDiversificationData}
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
          onPress={() => navigateToScreen("TopAssets")}
        >
          <Text style={styles.sectionHeader}>Top Assets</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#FDA51D" />
        </TouchableOpacity>
        {topAssets.map((asset, index) => (
          <View key={index} style={styles.assetItem}>
            <Text style={styles.assetName}>{asset.name}</Text>
            <Text style={styles.assetValue}>{asset.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => navigateToScreen("AssetDiversification")}
        >
          <Text style={styles.sectionHeader}>Asset Diversification</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#FDA51D" />
        </TouchableOpacity>
        <BarChart
          data={assetDiversificationData}
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
          onPress={() => navigateToScreen("RecentTransactions")}
        >
          <Text style={styles.sectionHeader}>Recent Transactions</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#FDA51D" />
        </TouchableOpacity>
        {recentTransactions.map((transaction, index) => (
          <View key={index} style={styles.transactionItem}>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
            <Text style={styles.transactionDescription}>
              {transaction.description}
            </Text>
            <Text style={styles.transactionAmount}>{transaction.amount}</Text>
          </View>
        ))}
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => navigateToScreen("InvestmentGoals")}
        >
          <Text style={styles.sectionHeader}>Investment Goals</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#FDA51D" />
        </TouchableOpacity>
        {investmentGoals.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal.goal}</Text>
            <Text style={styles.goalProgress}>
              {goal.achieved} / {goal.target}
            </Text>
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
  assetItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  assetName: {
    fontSize: 16,
    color: "#333",
  },
  assetValue: {
    fontSize: 16,
    color: "#FDA51D",
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  transactionItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  transactionDate: {
    fontSize: 14,
    color: "#888",
  },
  transactionDescription: {
    fontSize: 16,
    color: "#333",
  },
  transactionAmount: {
    fontSize: 16,
    color: "#FDA51D",
    fontWeight: "bold",
  },
  goalItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  goalText: {
    fontSize: 16,
    color: "#333",
  },
  goalProgress: {
    fontSize: 16,
    color: "#FDA51D",
  },
  dateInfo: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
});

export default AssetTabContent;
