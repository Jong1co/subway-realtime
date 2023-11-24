import styled from "styled-components/native";

export const TitleSection = styled.View`
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 8px;
  font-size: 18px;
  font-weight: 700;
`;

export const Card = styled.TouchableOpacity`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  width: 100%;
  flex: 1;
`;
