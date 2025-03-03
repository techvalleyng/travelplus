import { CustomButton } from "@/components/CustomButton";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";
import CustomSelect from "@/components/CustomSelect";
import { router } from "expo-router";
import { CustomCheckBox } from "@/components/CustomCheckBox";

const VehicleInformation = () => {
  const [hasVehicle, setHasVehicle] = useState(false);
  const [form, setFrom] = useState({
    model: "",
    year: "",
    licence_plate: "",
    color: "",
  });

  const years = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "20010",
    "20011",
    "20012",
    "20013",
    "20014",
    "20015",
    "20016",
    "20017",
    "20018",
    "20019",
    "2021",
    "2022",
    "2023",
    "2024",
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      className="h-full w-full  bg-[#F8F8F8] py-8"
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="h-full w-full flex flex-col p-4 bg-[#F8F8F8] py-8">
            <Text className="text-[20px] font-[600] mt-4 mb-8">
              Vehicle Information
            </Text>
            <Text className="text-[16px] font-[400] mb-8">
              Your vehicle details will be visible to clients during the booking
            </Text>
            <View className="flex-row  items-center mb-6">
              <CustomCheckBox
                checked={hasVehicle}
                onPress={() => setHasVehicle(!hasVehicle)}
              />
              <Text className="text-[18px] font-[400] ml-4">
                I have a vehicle that i will drive{" "}
              </Text>
            </View>
            <View className="flex flex-col gap-4">
              <View>
                <CustomSelect
                  selectedValue={form.model}
                  onValueChange={(value) => console.log(value)}
                  options={[
                    { label: "Toyoto corolla", value: "Toyoto corolla" },
                    { label: "Toyota camry", value: "Toyota camry" },
                    { label: "honda accord", value: "honda accord" },
                  ]}
                  label="vehicle manufacturer and model"
                  subText="if you dont find your car model from the list, then 
              inform us @"
                />
              </View>
              <View>
                <CustomSelect
                  selectedValue={form.year}
                  onValueChange={(value) => console.log(value)}
                  options={years.map((year) => ({ label: year, value: year }))}
                  label="vehicle year of manuacturing"
                  subText="you can find the year of manufacturing by looking at your seat belt"
                />
              </View>
              <View>
                <CustomInput
                  onChangeText={(value) =>
                    setFrom({ ...form, licence_plate: value })
                  }
                  value={form.licence_plate}
                  label="license plate number"
                />
              </View>
              <View>
                <CustomInput
                  onChangeText={(value) =>
                    setFrom({ ...form, licence_plate: value })
                  }
                  value={form.licence_plate}
                  label="Vehicle Paint/color"
                />
              </View>
            </View>
            <View className="mt-20">
              <CustomButton
                title="Save"
                onPress={() => router.navigate("/(driver)/Verification")}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VehicleInformation;
