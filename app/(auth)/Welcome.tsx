import { CustomButton } from "@/components/CustomButton";
import { Link, Redirect, router } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return (
    <SafeAreaView>
      <View className=" h-full w-full flex flex-col">
        <View className="bg-primary text-white flex-1 flex justify-end items-center">
          <Text className="text-white text-center leading-[24px] font-[500] text-[20px] mb-4">
            Drive With Along. {"\n"}
            Earn Good Money With Your {"\n"}
            Vehicle
          </Text>
        </View>
        <View className="flex-1 mx-8 justify-center relative">
          <CustomButton
            title="Log In"
            onPress={() => router.navigate({ pathname: "/SignIn" })}
          />
          <View className="text-center absolute bottom-0 left-[20%] flex-row">
            <Text className="text-[#4A4A4A9E] pb-3 text-[16px]">
              Not an Along driver?{" "}
            </Text>
            <Link
              className="text-primary font-bold text-[16px]"
              href="/(auth)/SignUp"
            >
              Register
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
