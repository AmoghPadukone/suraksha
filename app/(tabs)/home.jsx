import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AssetAllocation from "../../components/Tabs/Home/AssetAllocation";
import LiabilitiesAllocation from "../../components/Tabs/Home/LiabilitiesAllocation";
import SummaryChart from "../../components/Tabs/Home/SummaryChart";
import TopBeneficiaries from "../../components/Tabs/Home/TopBeneficiaries";
import TopLiabilities from "../../components/Tabs/Home/TopLiabilities";

const TouchableScale = ({ onPress, children }) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 1.02, // Slightly larger
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1, // Back to original size
      friction: 3, // Less "bouncy"
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 65 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        <View>
          <Text className="text-xl text-[#FDA51D] font-pbold ">Hi,</Text>
          <Text className="text-4xl text-black-100">Aryan</Text>
          <Text className="text-md text-black-100">Sat 9th Jul</Text>
        </View>
        <Divider className="my-3 " />

        <TouchableScale onPress={() => navigation.navigate("SummaryChart")}>
          <SummaryChart />
        </TouchableScale>

        <View>
          <TouchableScale
            onPress={() => navigation.navigate("TopBeneficiaries")}
          >
            <TopBeneficiaries />
          </TouchableScale>
        </View>

        <TouchableScale onPress={() => navigation.navigate("AssetAllocation")}>
          <AssetAllocation />
        </TouchableScale>

        <TouchableScale
          onPress={() => navigation.navigate("LiabilitiesAllocation")}
        >
          <LiabilitiesAllocation />
        </TouchableScale>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
