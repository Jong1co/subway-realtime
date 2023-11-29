import styled from "styled-components/native";

export const GroupTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StationName = styled.Text`
  align-items: center;
  margin-left: 8px;
  ${({ theme }) => theme.font.headline}
`;
