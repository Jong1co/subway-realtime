import styled from "styled-components/native";

export const Card = styled.View`
  border-radius: 8px;
  overflow: hidden;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.secondary_300};
`;
export const TitleSection = styled.View<{ color: string }>`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme, color }) =>
    theme.colors[color as keyof typeof theme.colors]};
  padding: 12px 16px 8px 16px;
`;

export const NextStation = styled.Text`
  ${({ theme }) => theme.font.subhead_1};
  color: ${({ theme }) => theme.colors.secondary_white};
`;

export const Direction = styled.Text`
  ${({ theme }) => theme.font.body_3}
  color: ${({ theme }) => theme.colors.secondary_white};
`;

export const TitleBox = styled.View`
  align-items: flex-start;
  flex: 1;
`;

export const Content = styled.View`
  padding: 8px 16px 12px 16px;
  background: ${({ theme }) => theme.colors.secondary_100};
`;

export const RemainTime = styled.Text`
  ${({ theme }) => theme.font.subhead_3};
  color: ${({ theme }) => theme.colors.red_01};
`;
