import React from "react";

import { Container, Avatar, OnlineStatus, RightSide, Button } from "./styles";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

import colors from "../../styles/colors";
import { TouchableOpacity } from "react-native";

const Header: React.FC = () => {
  return (
    <Container>
      <TouchableOpacity>
        <Avatar
          source={{
            uri:
              "https://avatars3.githubusercontent.com/u/57350762?s=460&u=5c28607a6573c3f9ae703ebc9e23c31c916e3ab3&v=4",
          }}
          imageStyle={{ borderRadius: 20 }}
        >
          <OnlineStatus />
        </Avatar>
      </TouchableOpacity>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
