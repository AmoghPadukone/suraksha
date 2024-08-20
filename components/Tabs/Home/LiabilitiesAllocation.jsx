import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function LiabilitiesAllocation() {
  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0.8,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.8,
    color: (opacity = 2) => `rgba(23, 5, 20, ${opacity})`, // Primary color with opacity
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data = {
    labels: ["Rent", "Loan", "Credit Card", "Utilities", "Other"], // Labels for the liabilities
    datasets: [
      {
        data: [500, 300, 200, 150, 100], // Example data values
        colors: [
          "#FF6F61", // Coral
          "#6B5B95", // Lavender
          "#88B04B", // Olive Green
          "#F7C6C7", // Light Pink
          "#D3B8AE", // Beige
        ].map((color) => () => color), // Ensure colors are functions
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Liabilities</Text>
      <BarChart
        data={data}
        width={screenWidth - 75} // Adjusted width to fit screen
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        fromZero={true}
        showBarTops={false}
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "300",
    color: "#333333",
    textAlign: "left",
    marginBottom: 20,
  },
  chart: {
    width: screenWidth - 40,
    height: 220,
  },
  legendContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 10,
  },
  legendColorBox: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
    color: "#333333",
  },
});
