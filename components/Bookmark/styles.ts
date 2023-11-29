import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  padding: 8px 12px;
  align-self: flex-start;
  height: auto;
  background-color: ${({ theme }) => theme.colors.secondary_200};
  border-radius: 12px;
  /* height: 54px; */
`;

export const CardTitle = styled.View`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DirectionWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View`
  width: 16px;
  height: 16px;
  background: gray;
`;

export const Direction = styled.Text`
  margin-left: 2px;
  ${({ theme }) => theme.font.subhead_4}
`;

export const ArrivalTime = styled.Text`
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.font.subhead_4}
`;

export const CardContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const CurrentStation = styled.Text`
  margin-left: 4px;
  ${({ theme }) => theme.font.subhead_3}
`;

export const Arrow = styled.View`
  margin: 0 2px;
  width: 16px;
  height: 16px;
  background: gray;
`;

export const NextStation = styled.Text`
  ${({ theme }) => theme.font.body_3}
`;
