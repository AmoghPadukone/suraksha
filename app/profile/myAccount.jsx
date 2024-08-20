import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyAccount() {
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  });

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    console.log(profileData);
    setIsEditing(false);
  };

  const handleCancelPress = () => {
    setIsEditing(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 65 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("profile")}>
            <Ionicons name="arrow-back" size={24} color="#FDA51D" />
          </TouchableOpacity>
          <Text style={styles.title}>My Account</Text>
          <TouchableOpacity
            onPress={isEditing ? handleSavePress : handleEditPress}
          >
            <Text style={styles.editButton}>{isEditing ? "Save" : "Edit"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.field}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={[
                styles.input,
                isEditing ? styles.editableInput : styles.disabledInput,
              ]}
              value={profileData.name}
              editable={isEditing}
              onChangeText={(text) =>
                setProfileData({ ...profileData, name: text })
              }
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[
                styles.input,
                isEditing ? styles.editableInput : styles.disabledInput,
              ]}
              value={profileData.email}
              editable={isEditing}
              onChangeText={(text) =>
                setProfileData({ ...profileData, email: text })
              }
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={[
                styles.input,
                isEditing ? styles.editableInput : styles.disabledInput,
              ]}
              value={profileData.phone}
              editable={isEditing}
              onChangeText={(text) =>
                setProfileData({ ...profileData, phone: text })
              }
            />
          </View>
        </View>

        {isEditing && (
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancelPress}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5", // subtle border
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  editButton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FDA51D",
  },
  content: {
    padding: 16,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
  },
  editableInput: {
    backgroundColor: "#fff",
  },
  disabledInput: {
    color: "#888",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
  },
  cancelButton: {
    padding: 12,
    backgroundColor: "#E5E5E5",
    borderRadius: 8,
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#333",
  },
});
