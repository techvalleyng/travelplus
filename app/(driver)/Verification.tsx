import { CustomButton } from "@/components/CustomButton";
import { Link, Redirect, router } from "expo-router";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CheckBox from "react-native-check-box";
import { CustomCheckBox } from "@/components/CustomCheckBox";

const Verification = () => {
  return (
    <SafeAreaView>
      <View className="h-full w-full flex flex-col p-4 bg-[#F8F8F8] py-8">
        <Text className="text-[30px] font-[600]">
          Welcome Back, {"\n"} Dr Lavit
        </Text>
        <Text className="text-[20px] font-[600] my-6">Remaining Steps</Text>
        <Text className="text-[16px] font-[400] mb-8">
          Here is what you need to do {"\n"}
          to set up your account.
        </Text>
        <View className="flex flex-col gap-4">
          <Pressable
            onPress={() => router.navigate("/(driver)/PersonalInformation")}
            className="flex-row justify-between bg-[#18C1480F] h-[116px] items-center pl-4 pr-14"
          >
            <Text className="text-[24px] font-[600]">Personal Information</Text>
            <CustomCheckBox checked={true} />
          </Pressable>
          <Pressable className="flex-row justify-between bg-[#E4E9EE] h-[116px] items-center pl-4 pr-14">
            <Text className="text-[24px] font-[600]">Vehicle Information</Text>
            <CustomCheckBox checked={false} />
          </Pressable>
          <Pressable className="flex-row justify-between bg-[#EEF1F4] h-[116px] items-center pl-4 pr-14">
            <Text className="text-[24px] font-[600]">Document Upload</Text>
            <CustomCheckBox checked={false} />
          </Pressable>
        </View>
        <View className="mt-20">
          <CustomButton title="continue" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
