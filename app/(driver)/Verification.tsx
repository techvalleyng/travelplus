import { CustomButton } from "@/components/CustomButton";
import { Link, Redirect, router } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Verification = () => {
  return (
    <SafeAreaView>
      <View className=" h-full w-full flex flex-col">
        <View className="bg-primary text-white flex-1 flex justify-end items-center">
          <Text className="text-white text-center leading-[24px] font-[500] text-[20px] mb-4">
            Verification
          </Text>
        </View>
        <View className="flex-1 mx-8 justify-center relative">
          <Text>Verification</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
