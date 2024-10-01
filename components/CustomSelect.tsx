import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

type PickerProps = {
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
  options: { label: string; value: string }[];
  className?: string;
  label?: string;
  subText?: string;
};

const CustomSelect = ({
  selectedValue,
  onValueChange,
  options,
  className,
  label,
  subText,
}: PickerProps) => {
  return (
    <View className="flex-col gap-2">
      {label && (
        <Text className="capitalize text-text-grey font-[700] text-[14px]">
          {label}
        </Text>
      )}
      <View
        className={`border-[1px] border-[#66708080] focus:border-primary bg-white p-2 h-[48px] rounded-[6px] ${className}`}
      >
        <RNPickerSelect
          placeholder={"please select"}
          items={[...options]}
          onValueChange={onValueChange}
          value={selectedValue}
          //   style={{ height: 48, color: "#50555C", fontSize: 16 }}
          //   InputAccessoryView={() => null}
          style={pickerSelectStyles}
        />
      </View>
      {subText && (
        <Text className="capitalize text-text-grey font-[400] text-[13px]">
          {subText}
        </Text>
      )}
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    // paddingVertical: 12,
    // paddingHorizontal: 10,
    height: "100%",
    color: "black",
    // paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    // paddingHorizontal: 10,
    // paddingVertical: 8,

    // paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default CustomSelect;
