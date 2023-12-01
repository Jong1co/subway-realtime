import styled from "styled-components/native";

export const Section = styled.View`
  padding: 12px 0;
  flex: 1;
`;

export const Title = styled.Text`
  padding: 0 16px;
  margin-bottom: 4px;
  ${({ theme }) => theme.font.subhead_2}
`;
