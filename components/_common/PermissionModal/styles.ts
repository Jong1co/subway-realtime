import styled from "styled-components/native";

export const BottomSheetContainer = styled.View`
  padding: 24px;
  /* overflow: hidden; */
  background-color: ${({ theme }) => theme.colors.secondary_white};
  border-radius: 16px;
  /* align-items: flex-start; */
  width: calc(100% - 32px);
  margin: 0 16px;
`;

export const Overlay = styled.View`
  background-color: #00000040;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => theme.font.subhead_1};
  color: ${({ theme }) => theme.colors.secondary_black};
  margin-bottom: 8px;
`;

export const Body = styled.Text`
  ${({ theme }) => theme.font.body_1};
  color: ${({ theme }) => theme.colors.secondary_black};
`;

export const Badge = styled.Text<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 4px 12px;
  border-radius: 13px;
  margin-right: 8px;
  overflow: hidden;
  ${({ theme }) => theme.font.subhead_3};
  color: ${({ theme }) => theme.colors.secondary_white};
`;

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const CloseButton = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary_100};
  padding: 10px 16px;
  border-radius: 8px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary_100};
`;

export const CloseButtonText = styled.Text`
  ${({ theme }) => theme.font.subhead_1};
  color: ${({ theme }) => theme.colors.secondary_white};
`;

export const ConfirmButton = styled(CloseButton)`
  background-color: ${({ theme }) => theme.colors.secondary_white};
`;

export const ConfirmButtonText = styled(CloseButtonText)`
  color: ${({ theme }) => theme.colors.primary_900};
`;
