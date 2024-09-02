import {
  Text,
  type TextProps,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type CustomButtonProps = TextProps & {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  title: string;
  className?: string;
};

export function CustomButton({
  style,
  title,
  className,
  onPress,
  type = "default",
  ...rest
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={
        "bg-primary text-white rounded-[16px] font-medium p-4 items-center " +
        className
      }
      {...rest}
    >
      <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
