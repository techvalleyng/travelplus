import { CustomButton } from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const SignIn = () => {
  const [form, setFrom] = useState({
    phone: "",
    password: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ backgroundColor: "green", height: "100%" }}
        >
          <View
            className="h-[100vh] w-full flex flex-col p-7"
            style={{ justifyContent: "center" }}
          >
            <View className="items-center">
              <Image source={require("../../assets/images/logo-green.png")} />
            </View>

            <Text className="capitalize text-[#262628] font-[700] text-[14px]  my-5">
              Sign In To Continue{" "}
            </Text>

            <View className="gap-8 mt-2 mb-12">
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
              title="Sign In"
              // onPress={() => router.replace({ pathname: "/SignIn" })}
              onPress={() => alert(form.password + " " + form.phone)}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
