import styled from "styled-components/native";

export const StationTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondary_black};
  ${({ theme }) => theme.font.subhead_1}
`;

export const StationListItem = styled.TouchableOpacity`
  padding: 16px 4px;
  border-width: 1px;
  border-right-width: 0px;
  border-left-width: 0px;
  border-top-width: 0px;
  border-color: ${({ theme }) => theme.colors.secondary_200};
  /* TODO: 이거 활성화하면 렌더링이 엄청 느리네 왜지? */
  /* flex: 1; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LineWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
