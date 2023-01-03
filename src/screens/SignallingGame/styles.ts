import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  padding: 24px;
`;

export const StatesBox = styled.View`
  flex: 1;
  border-radius: 4px;
  margin-right: 2px;
  margin-left: 2px;
  height: 38px;

  align-items: center;
  justify-content: center;

  background: white;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GREEN_700};
  `};
`;

export const Flex = styled.View`
  flex-direction: row;
`;

export const Icon = styled(MaterialIcons)``;

export const Lines = styled.View`
  height: 3px;
  width: 96px;
  background: white;
  background-color: white;
`;
