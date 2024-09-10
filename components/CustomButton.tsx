import { Text, type TextProps, TouchableOpacity } from "react-native";

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
        "bg-primary text-white rounded-full font-medium p-4 items-center " +
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
