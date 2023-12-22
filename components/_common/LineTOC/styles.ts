import styled from "styled-components/native";

export const Badge = styled.TouchableOpacity<{
  color: string;
  isActive: boolean;
}>`
  background-color: ${({ color, theme, isActive }) =>
    isActive
      ? theme.colors[color as keyof typeof theme.colors]
      : "transparent"};
  border-radius: 16px;
  justify-content: center;
  padding: 4px 12px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary_white : theme.colors.secondary_400};
  border-width: 1px;
  border-color: ${({ theme, isActive, color }) =>
    isActive
      ? theme.colors[color as keyof typeof theme.colors]
      : theme.colors.secondary_400};
  transition: 0.15s ease-in-out;
`;

export const BadgeText = styled.Text<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary_white : theme.colors.secondary_400};
  text-align: center;
  ${({ theme }) => theme.font.subhead_3}
`;
