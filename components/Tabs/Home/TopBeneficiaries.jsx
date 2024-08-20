import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";

// Get the screen width
const screenWidth = Dimensions.get("window").width;

export default function TopBeneficiaries() {
  // Chart configuration
  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0.8,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.8,
    color: (opacity = 1) => `rgba(253, 165, 29, ${opacity})`, // Primary color with opacity
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  // Data for the PieChart
  const data = [
    {
      name: "John Doe",
      population: 40,
      color: "#FFB3B3", // Pastel Pink
      legendFontColor: "#333333",
      legendFontSize: 14,
    },
    {
      name: "Jane Smith",
      population: 35,
      color: "#FFDA22", // Pastel Peach
      legendFontColor: "#333333",
      legendFontSize: 14,
    },
    {
      name: "Alice Johnson",
      population: 25,
      color: "#F34AAB", // Pastel Red
      legendFontColor: "#333333",
      legendFontSize: 14,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Beneficiaries</Text>
      <PieChart
        data={data}
        width={screenWidth - 40} // Adjusted width to fit screen
        height={270}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[60, 0]}
        absolute
        hasLegend={false} // Hide the default legend
      />
      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View
              style={[styles.legendColorBox, { backgroundColor: item.color }]}
            />
            <Text style={styles.legendText}>
              {item.name}: {item.population}%
            </Text>
          </View>
        ))}
      </View>
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
