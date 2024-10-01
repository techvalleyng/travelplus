import { CustomButton } from "@/components/CustomButton";
import { Link, Redirect, router } from "expo-router";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CheckBox from "react-native-check-box";
import { CustomCheckBox } from "@/components/CustomCheckBox";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import CustomSelect from "@/components/CustomSelect";

const PersonalInformation = () => {
  const [form, setFrom] = useState({
    name: "",
    gender: "male",
    licence_no: "",
  });

  return (
    <SafeAreaView>
      <View className="h-full w-full flex flex-col p-4 bg-[#F8F8F8] py-8">
        <Text className="text-[20px] font-[600] mt-4 mb-8">
          Personal Information
        </Text>
        <Text className="text-[16px] font-[400] mb-8">
          your name and vehicle are the only details visible to clients during
          the booking
        </Text>
        <View className="flex flex-col gap-4">
          <View>
            <CustomInput
              onChangeText={(value) => setFrom({ ...form, name: value })}
              value={form.name}
              label="Full Name"
            />
          </View>
          <View>
            <CustomInput
              onChangeText={(value) => setFrom({ ...form, licence_no: value })}
              value={form.licence_no}
              label="Driver License Number"
              subText="license number  on your drivers documents"
            />
          </View>
          <View>
            <CustomSelect
              selectedValue={form.gender}
              onValueChange={(value) => console.log(value)}
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
              label="Gender"
              subText="know that if you choose female as gender, you will 
            receive certain communication specifications as 
            female driver"
            />
          </View>
        </View>
        <View className="mt-20">
          <CustomButton title="Save" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalInformation;
