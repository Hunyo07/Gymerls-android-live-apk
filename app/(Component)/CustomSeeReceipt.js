import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
const CustomSeeReceipt = ({ Status, receipt }) => {
  const [showReceipt, setShowReceipt] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (showReceipt == false) {
            setShowReceipt(true);
          } else {
            setShowReceipt(false);
          }
        }}
      >
        <Text style={{ color: "#444", marginTop: "2%", fontWeight: "500" }}>
          {" "}
          See receipt
        </Text>
      </TouchableOpacity>
      <View>
        {showReceipt ? (
          <>
            <View>
              {Status == "Completed" ? (
                <>
                  <View
                    style={{
                      marginVertical: "3%",
                      padding: "2%",
                    }}
                  >
                    <Image
                      source={receipt}
                      style={{ width: "80%", height: 200 }}
                    />
                  </View>
                </>
              ) : (
                <>
                  <View style={{ marginVertical: "3%", padding: "2%" }}>
                    <Text
                      style={{
                        fontFamily: "EncodeSansSemiCondensed_600SemiBold",
                        color: "#444",
                      }}
                    >
                      No receipt available
                    </Text>
                  </View>
                </>
              )}
            </View>
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default CustomSeeReceipt;
