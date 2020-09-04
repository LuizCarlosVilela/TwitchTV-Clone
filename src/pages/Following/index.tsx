import React from "react";
import { Text } from "react-native";

import { Wrapper, Container, Main } from "./styles";

import Header from "../../components/Header";

const Following: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header />

        <Main />
      </Container>
    </Wrapper>
  );
};

export default Following;
