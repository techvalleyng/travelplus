import {
  TextInput,
  TextInputProps,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

type Props = TextInputProps & {
  className?: string;
  label?: string;
  subText?: string;
};

const CustomInput = ({
  onChangeText,
  value,
  className,
  label,
  subText,
  ...rest
}: Props) => {
  return (
    <View className="flex-col gap-2">
      {label && (
        <Text className="capitalize text-text-grey font-[700] text-[14px]  ">
          {label}
        </Text>
      )}
      <TextInput
        onChangeText={onChangeText}
        value={value}
        className={`border-[1px] border-[#66708080] focus:border-primary bg-white p-2 text-[16px] text-[#50555C] h-[48px] rounded-[6px] ${className}`}
        {...rest}
      />
      {subText && (
        <Text className="capitalize text-text-grey font-[400] text-[13px]  ">
          {subText}
        </Text>
      )}
    </View>
  );
};

export default CustomInput;
