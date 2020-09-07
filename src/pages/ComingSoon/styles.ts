import styled from "styled-components/native";
import { Platform } from "react-native";

import Constants from "expo-constants";

import colors from "../../styles/colors";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + "px"};

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.ImageBackground`
  /* background: ${colors.tag}; */

  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const OnlineStatus = styled.View`
  background: ${colors.green};
  width: 10px;
  height: 10px;
  border-radius: 10px;

  border: 2px solid ${colors.primary};

  position: absolute;
  bottom: 1px;
  right: 5px;
`;
export const Heading = styled.Text`
  color: ${colors.purple};
  font-family: roboto_500;
  font-size: 20px;

  margin: 10px;
`;

export const HeadingBold = styled.Text`
  color: ${colors.gray};
  font-family: roboto_700;
  font-size: 20px;
`;
