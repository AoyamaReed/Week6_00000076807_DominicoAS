import { useState } from "react";
import { Text, View } from "react-native";
import { CustomTextInput, NIMInput } from "./input";

export default function Index() {
  const [name, setName] = useState("");
  const [NIM, setNIM] = useState("");

  const handleChangeMyName = (value: string) => {
    setName(value);
  }
  const handleChangeNIM = (NIMValue: string) => {
    setNIM(NIMValue);
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{name} - {NIM}</Text>
      <CustomTextInput input={name} onChange={handleChangeMyName}/>
      <NIMInput input={NIM} onChange={handleChangeNIM}/>
    </View>
  );
}
