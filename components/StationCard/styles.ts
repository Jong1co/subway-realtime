import styled from "styled-components/native";

type Props = {
  color: string;
};

export const TitleSection = styled.View<Props>`
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  padding: 12px 16px 8px 16px;
  background: ${(props) => props.color};
`;

export const Title = styled.Text`
  margin-left: 8px;
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

export const Card = styled.TouchableOpacity`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  width: 100%;
  flex: 1;
`;
