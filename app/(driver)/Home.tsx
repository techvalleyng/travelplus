import { CustomButton } from "@/components/CustomButton";
import { Link, Redirect, router } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Pressable } from "react-native";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleCloseModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView>
      <View className=" h-full w-full flex flex-col">
        <View className="flex-1 mx-8">
          <Text>Big ass map should be hedsdre</Text>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text className="text-center font-[600] mb-4 ">
              Complete Your Profile Registration
            </Text>
            <Text className="text-center mb-4">
              You profile registration is incomplete,{"\n"} press continue to
              complete your registration
            </Text>
            <CustomButton
              title="Continue"
              className="w-[100%]"
              onPress={() => {
                handleCloseModal();
                router.navigate("/(driver)/Verification");
              }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    marginBottom: 40,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Home;
