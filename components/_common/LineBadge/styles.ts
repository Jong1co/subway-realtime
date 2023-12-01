import styled from "styled-components/native";

export const Badge = styled.View<{ color: string; size: "md" | "sm" }>`
  width: ${({ size, theme }) => (size === "md" ? "24px" : "16px")};
  height: ${({ size, theme }) => (size === "md" ? "24px" : "16px")};
  background-color: ${({ color, theme }) =>
    theme.colors[color as keyof typeof theme.colors]};
  border-radius: 12px;
  justify-content: center;
`;

export const BadgeText = styled.Text<{ size: "md" | "sm" }>`
  font-size: ${({ size, theme }) =>
    size === "md" ? theme.font.subhead_1 : theme.font.subhead_4};

  color: ${({ theme }) => theme.colors.secondary_white};
  text-align: center;
`;
