import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

export default function SummaryChart() {
  const screenWidth = Dimensions.get("window").width;
  const adjustedWidth = screenWidth - 50;

  const data = {
    labels: ["Equity", "Fixed Income", "Real Estate", "Cash", "Liabilities"],
    data: [0.5, 0.25, 0.15, 0.05, 0.05],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <ProgressChart
        data={data}
        width={adjustedWidth}
        height={300}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          color: (opacity = 1, index) => {
            const colors = [
              `rgba(253, 165, 29, ${opacity})`, // Primary orange for Equity
              `rgba(0, 0, 0, ${opacity * 0.8})`, // Soft black for Fixed Income
              `rgba(255, 133, 51, ${opacity})`, // Complimentary orange for Real Estate
              `rgba(128, 128, 128, ${opacity * 0.6})`, // Gray for Cash
              `rgba(77, 77, 77, ${opacity * 0.7})`, // Dark gray for Liabilities
            ];
            return colors[index];
          },
          strokeWidth: 2,
        }}
        style={styles.chart}
        hideLegend={true} // Hide the default legend
      />
      <View style={styles.legendContainer}>
        {data.labels.map((label, index) => (
          <View key={index} style={styles.legendItem}>
            <View
              style={[
                styles.legendColor,
                {
                  backgroundColor:
                    index === 0
                      ? `rgba(253, 165, 29, 1)`
                      : index === 1
                      ? `rgba(0, 0, 0, 0.8)`
                      : index === 2
                      ? `rgba(255, 133, 51, 1)`
                      : index === 3
                      ? `rgba(128, 128, 128, 0.6)`
                      : `rgba(77, 77, 77, 0.7)`,
                },
              ]}
            />
            <Text style={styles.legendLabel}>{label}</Text>
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
    marginBottom: 10,
    color: "#333333",
    textAlign: "left",
  },
  chart: {
    marginTop: 10,
    alignSelf: "center",
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    flexWrap: "wrap",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  legendLabel: {
    fontSize: 14,
    color: "#333333",
  },
});
