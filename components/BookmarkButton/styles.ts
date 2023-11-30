import styled from "styled-components/native";

export const Button = styled.TouchableOpacity<{ isActive: boolean }>`
  /* flex: 1; */
  flex-direction: row;
  /* align-self: flex-start; */
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary_white};
  padding: 4px 12px 4px 12px;
  /* padding: 4px 12px 4px 8px; */
  border-radius: 12px;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary_white : "transparent"};
`;

export const ButtonText = styled.Text<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary_black : theme.colors.secondary_white};
  ${({ theme }) => theme.font.body_3};
`;
