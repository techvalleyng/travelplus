import { Text, type TextProps, TouchableOpacity, View } from "react-native";

export type CustomCheckBoxProps = TextProps & {
  className?: string;
  handleClick?: () => void;
  checked?: boolean;
};

export function CustomCheckBox({
  style,
  className,
  checked,
  handleClick,
  ...rest
}: CustomCheckBoxProps) {
  return (
    <TouchableOpacity
      onPress={handleClick}
      className={
        " rounded-[4px] border-primary border-solid border-2 font-medium w-[fit-content] h-[fit-content]  bg-primary  " +
        className
      }
      {...rest}
    >
      <View className="border-solid border-white border-2 h-6 w-6">
        {checked && (
          <Text className="text-white text-[14px] font-bold items-center border px-[3px]">
            &#10003;
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
