import styled from "styled-components/native";

export const BottomSheetContainer = styled.View`
  padding: 24px 16px 32px 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondary_white};
  align-items: flex-start;
  width: 100%;
`;

export const Overlay = styled.View`
  background-color: #00000040;
  flex: 1;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  ${({ theme }) => theme.font.subhead_1};
  color: ${({ theme }) => theme.colors.secondary_black};
  margin-bottom: 4px;
`;

export const Body = styled.Text`
  ${({ theme }) => theme.font.subhead_3};
  color: ${({ theme }) => theme.colors.secondary_400};
  margin-bottom: 12px;
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
  background-color: ${({ theme }) => theme.colors.primary_900};
  padding: 10px 16px;
  border-radius: 8px;
  width: 49%;
  border: 1px solid ${({ theme }) => theme.colors.primary_900};
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
