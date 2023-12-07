import styled from "styled-components/native";
export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.secondary_white};
  ${({ theme }) => theme.font.subhead_3};
  margin-left: 2px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  padding: 8px 12px 8px 8px;
  background-color: ${({ theme }) => theme.colors.primary_100};
  flex: 1;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  border-radius: 12px;
  margin: auto;
`;
