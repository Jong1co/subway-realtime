import styled from "styled-components/native";

export const SubwayDestination = styled.Text`
  ${({ theme }) => theme.font.subhead_4};
  color: ${({ theme }) => theme.colors.secondary_black};
  background: ${({ theme }) => theme.colors.secondary_300};
  padding: 2px;
  border-radius: 4px;
  overflow: hidden;
  position: absolute;
  bottom: 16px;
`;

export const Subway = styled.View<{ isUphill: boolean }>`
  transform: ${({ isUphill }) => (isUphill ? "" : "scaleX(-1)")};
`;
