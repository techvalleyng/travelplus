import { CustomButton } from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Link, Redirect, router } from "expo-router";
import { useState } from "react";
import {
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [form, setFrom] = useState({
    email: "",
    password: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="h-full w-full flex flex-col p-7">
            <View className="items-center">
              <Image source={require("../../assets/images/logo-green.png")} />
            </View>

            <Text className="capitalize text-[#262628] font-[700] text-[14px]  my-5">
              Sign up as a driver below
            </Text>
            <Text className="capitalize text-[#262628]  text-[14px]  ">
              Register to enjoy endless benefit with Along
            </Text>

            <View className="gap-8 mt-2 mb-12">
              <View>
                <CustomInput
                  onChangeText={(value) => setFrom({ ...form, email: value })}
                  value={form.email}
                  label="email"
                  subText="This will be your username"
                />
              </View>
              <View>
                <CustomInput
                  onChangeText={(value) => setFrom({ ...form, phone: value })}
                  value={form.phone}
                  label="phone number"
                  subText="You will receive a confirmation code with this number"
                />
              </View>
              <View>
                <CustomInput
                  onChangeText={(value) =>
                    setFrom({ ...form, password: value })
                  }
                  value={form.password}
                  label="password"
                  secureTextEntry
                />
              </View>
            </View>
            <CustomButton
              title="Next &rarr;"
              // onPress={() => router.replace({ pathname: "/SignIn" })}
              onPress={() => router.navigate("/OTP")}
            />
            <View className="text-center absolute bottom-0 left-[10%] flex-row">
              <Text className="text-[#4A4A4A9E] pb-3 text-[13px]">
                By signin up, you agree to our{" "}
              </Text>
              <Link
                className=" font-extralight text-[13px] text-gray-500"
                href="/(auth)/SignUp"
              >
                Terms and Conditions
              </Link>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
