import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 14px;
  padding-bottom: 10px;
  padding-right: 14px;
`;

export const Avatar = styled.ImageBackground`
  /* background: ${colors.tag}; */

  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
export const OnlineStatus = styled.View`
  background: ${colors.green};
  width: 10px;
  height: 10px;
  border-radius: 10px;

  border: 2px solid ${colors.primary};

  position: absolute;
  bottom: 0;
  right: 0;
`;
export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;
