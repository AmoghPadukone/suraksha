import * as React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabView } from "react-native-tab-view";
import AssetTabContent from "../../components/Tabs/Assets/AssetTabContent";
import LiabilitiesTabContent from "../../components/Tabs/Liabilites/LiabilitiesTabContent";

const FirstRoute = () => <AssetTabContent />;

const SecondRoute = () => <LiabilitiesTabContent />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = (props) => {
  const { index } = props.navigationState;

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#F2F2F2",
        justifyContent: "center",
        paddingBottom: 8,
      }}
    >
      {props.navigationState.routes.map((route, i) => {
        const isActive = index === i;
        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => props.jumpTo(route.key)}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 16,
                color: isActive ? "#333333" : "#888888",
                textAlign: "center",
              }}
            >
              {route.title}
            </Text>
            {isActive && (
              <View
                style={{
                  height: 2,
                  backgroundColor: "#FDA51D",
                  width: 30,
                  marginTop: 4,
                  borderRadius: 1,
                }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function AssetsLiabilities() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Assets" },
    { key: "second", title: "Liabilities" },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
      <TabView
        renderTabBar={renderTabBar}
        title="Assets & Liabilities"
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{ backgroundColor: "#F2F2F2", marginTop: 10 }}
      />
    </SafeAreaView>
  );
}
