import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import AssetTabContent from "../../components/Tabs/Assets/AssetTabContent";
import LiabilitiesTabContent from "../../components/Tabs/Liabilites/LiabilitiesTabContent";

const FirstRoute = () => <AssetTabContent />;

const SecondRoute = () => <LiabilitiesTabContent />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = (props) => {
  const inputRange = props.navigationState.routes.map((x, i) => i);
  var width = Dimensions.get("window").width;
  return (
    <View style={styles.tabBar}>
      {props.navigationState.routes.map((route, i) => {
        return (
          <Pressable
            key={route.key}
            style={styles.tabItem}
            onPress={() => setIndex(i)}
          >
            <Animated.View
              style={{
                backgroundColor,
                margin: 0,
                borderTopLeftRadius,
                borderTopRightRadius,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  margin: 0,
                  paddingVertical: 12,
                  width: width * 0.5,
                  fontFamily: "Outfit-Regular",
                  fontSize: 17,
                }}
              >
                {route.title}
              </Text>
            </Animated.View>
            <View
              style={{
                shadowColor: "#rgba(247, 217, 190, 80)",
                shadowOpacity: 0.2,
                shadowRadius: 2,
                shadowOffset: { width: 0, height: 2 },
                elevation: 4,
                borderColor: "#F4BE8D",
                borderWidth: 4,
                width: width,
                // backgroundColor: '#fff',
                height: 8,
              }}
            />
          </Pressable>
        );
      })}
    </View>
  );
};
export default function assetsLiabilities() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      title="Assets & Liabilities"
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ backgroundColor: "#F7D5B8" }}
    />
  );
}
