import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  /* flex: 1; */
  flex-direction: row;
  /* align-self: flex-start; */
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary_white};
  padding: 4px 12px 4px 12px;
  /* padding: 4px 12px 4px 8px; */
  border-radius: 12px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.secondary_white};
  ${({ theme }) => theme.font.body_3};
`;
