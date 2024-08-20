// MDropdown.js
import React from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const MDropdown = ({ label, iconName, items, onValueChange, value, error }) => {
  return (
    <View>
      <Dropdown
        style={[styles.dropdown, error && styles.errorInput]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={items}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={label}
        searchPlaceholder="Search..."
        value={value}
        onChange={(item) => {
          onValueChange(item.value);
        }}
        // renderLeftIcon={() => (
        //   <Icon style={styles.icon} color="black" name={iconName} size={20} />
        // )}
      />
    </View>
  );
};

const styles = {
  // Add your styles here
};

export default MDropdown;
