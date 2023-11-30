import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const SearchBar = styled.TextInput<{ width: number }>`
  height: 32px;
  margin-left: 12px;
  width: ${({ width }) => width}px;
  margin-right: 80;
  padding: 4px 12px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.secondary_200};
`;
