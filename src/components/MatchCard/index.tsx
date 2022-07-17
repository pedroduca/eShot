import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Furia from "../../assets/Furia.svg";
import Navi from "../../assets/Navi.svg";

const MatchCard = () => {
  return (
    <Background>
      <Container>
        <TeamContainer>
          <TeamImage>
            <Furia></Furia>
            <Text>FURIA</Text>
          </TeamImage>
          <Text>VS</Text>
          <TeamImage>
            <Navi></Navi>
            <Text>NAVI</Text>
          </TeamImage>
        </TeamContainer>
      </Container>
    </Background>
  );
};

const Background = styled.View`
  height: 202px;
  width: 377px;
  border-radius: 10px;
  background-color: #222430;
  align-content: center;
`;
const Container = styled.View`
  align-items: center;
`;

const TeamContainer = styled.View`
  flex-direction: row;
  align-content: center;
  background: lightpink;
`;

const TeamImage = styled.View`
  flex-direction: column;
  align-items: center;
  max-width: 80px;
  max-height: 101px;
  background-color: lightblue;
`;

export default MatchCard;
