import styled from "styled-components/native";

export const EmptyText = styled.Text`
  ${({ theme }) => theme.font.headline};
  color: ${({ theme }) => theme.colors.secondary_600};
  margin-bottom: 12px;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => theme.font.subhead_3};
  color: ${({ theme }) => theme.colors.secondary_white};
  margin-left: 4px;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary_100};
  padding: 12px;
  border-radius: 6px;
  /* padding: 4px 12px 4px 8px;
  border-radius: 12px; */
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  flex-direction: row;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;
