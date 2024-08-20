import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function AssetAllocation() {
  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0.8,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.8,
    color: (opacity = 1) => `rgba(253, 165, 29, ${opacity})`, // Primary color with opacity
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: false, // optional
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Time labels
    datasets: [
      {
        data: [1000, 1200, 1500, 1700, 1600, 1800, 2000], // Example asset values
        color: (opacity = 1) => `rgba(255, 177, 77, ${opacity})`, // Pastel Orange
        strokeWidth: 2, // Line width
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Asset Growth</Text>
      <LineChart
        data={data}
        width={screenWidth - 75} // Adjusted width to fit screen
        height={220}
        chartConfig={chartConfig}
        fromZero={true}
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
});
