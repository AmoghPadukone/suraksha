import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const plans = [
  {
    title: "Essentials Plan",
    description: "Secure Your Legacy, Simply Informed",
    price: "499",
    features: [
      "Securely keep track of your assets and liabilities",
      "Securely keep track of your assets and liabilities",
      "Securely keep track of your assets and liabilities",
    ],
  },
  {
    title: "Assurance Plan",
    description: "Peace of Mind with Expert Support",
    price: "499",
    features: [
      "Includes all Essentials Plan features.",
      "Our in-house expert lawyers assist and help you claim these assets.",
      "Personalized guidance through the claims process.",
    ],
  },
  {
    title: "Legacy Plan",
    description: "Complete Protection and Future Planning",
    price: "499",
    features: [
      "Includes all Assurance Plan features.",
      "Provision to help you create and maintain an e-will.",
      "VIP customer support for immediate assistance.",
    ],
  },
  // Add more plan objects here as needed
];

const PlanCard = ({
  title = "title plan",
  subtitle = "epic sub",
  price = 999,
  features = [
    "Securely keep track of your assets and liabilities",
    "Securely keep track of your assets and liabilities",
    "Securely keep track of your assets and liabilities",
  ],
}) => {
  return (
    <View className="border-2 w-[300px] h-full mx-auto px-8 py-14 rounded-[16px] m-2">
      <View>
        <Text className="text-20 font-psemibold">{title}</Text>
        <Text className="text-[16px] font-pregular">{subtitle}</Text>
      </View>
      <View className="flex  mt-5 w-full">
        {features.map((feature, index) => (
          <View
            key={index}
            className="flex w-full item-center justify-start flex-row gap-2 mb-5"
          >
            <Ionicons name="checkmark-circle" size={22} color="#FDA51D" />
            <Text className="text-12 font-pmedium ">{feature}</Text>
          </View>
        ))}
      </View>
      <View className="flex justify-end items-end mt-5">
        <View className="flex-row items-start">
          <Text className="font-pbold text-[28px] text-[#FDA51D]  ">₹</Text>
          <Text className="font-pblack text-[52px] text-[#FDA51D]">
            {price}
          </Text>
        </View>
        <Text className="font-plight -mt-1 text-[#FDA51D]">per month</Text>
      </View>
    </View>
  );
};

const PlansScrollView = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={true}
      className="py-5"
    >
      {plans.map((plan, index) => (
        <PlanCard
          key={index}
          title={plan.title}
          subtitle={plan.description}
          features={plan.features}
          price={plan.price}
        />
      ))}
    </ScrollView>
  );
};

export default PlansScrollView;
