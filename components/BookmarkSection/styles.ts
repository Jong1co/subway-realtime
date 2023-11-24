import styled from "styled-components/native";

export const Section = styled.View`
  padding: 12px 16px;
  flex: 1;
`;

export const Title = styled.Text`
  margin-bottom: 4px;
  ${({ theme }) => theme.font.subhead_2}
`;
