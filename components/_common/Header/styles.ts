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
  flex: 1;
`;

export const HeaderRight = styled.View``;
export const Header = styled.View`
  height: 48px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
`;
