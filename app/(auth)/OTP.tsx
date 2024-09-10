import { CustomButton } from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const OTP = () => {
  const [OTP, setOTP] = useState("");

  const handleVerifyOtp = () => {
    //verify otp and navigate
    console.log(OTP);
    router.navigate("/(driver)/Home");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            className="h-[100vh] w-full flex flex-col p-7 bg-white"
            style={{ justifyContent: "center" }}
          >
            <View className="items-center">
              <Image source={require("../../assets/images/logo-green.png")} />
            </View>

            <Text className="capitalize text-[#262628] font-[700] text-[20px]  my-5 text-center">
              Enter Code{" "}
            </Text>
            <Text className="capitalize text-[#262628] font-[700] text-[24px]  my-b text-center">
              0803621*****{" "}
            </Text>

            <View className="gap-8 mt-2 mb-12">
              <View>
                <TextInput
                  onChangeText={(value) => setOTP(value)}
                  value={OTP}
                  style={{
                    backgroundColor: "#EEF1F4",
                    margin: "auto",
                    width: "50%",
                    padding: 20,
                    fontWeight: "800",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                />
              </View>
            </View>
            <CustomButton title="Submit" onPress={handleVerifyOtp} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OTP;
