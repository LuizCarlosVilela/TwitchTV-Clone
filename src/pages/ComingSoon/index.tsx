import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { Wrapper, Avatar, OnlineStatus, Heading, HeadingBold } from "./styles";

const ComingSoon: React.FC = () => {
  return (
    <Wrapper>
      <TouchableOpacity>
        <Avatar
          source={{
            uri:
              "https://avatars3.githubusercontent.com/u/57350762?s=460&u=5c28607a6573c3f9ae703ebc9e23c31c916e3ab3&v=4",
          }}
          imageStyle={{ borderRadius: 25 }}
        >
          <OnlineStatus />
        </Avatar>
      </TouchableOpacity>
      <Heading>
        <HeadingBold>@</HeadingBold>CarlosVilelal
      </Heading>
    </Wrapper>
  );
};

export default ComingSoon;
