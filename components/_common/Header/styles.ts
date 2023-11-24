import styled from "styled-components/native";

export const HeaderLeft = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const DistanceBadge = styled.View`
  margin-left: 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2px 8px;
  flex-direction: row;
  align-items: center;
`;

export const DistanceBadgeText = styled.Text`
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.secondary_white};
  ${({ theme }) => theme.font.subhead_3}
`;

export const Title = styled.Text`
  ${({ theme }) => theme.font.subhead_1};
`;
