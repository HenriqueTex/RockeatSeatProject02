import styled, { css } from "styled-components/native";

type Props = {
  size: number;
  // rotate?: number;
  // isActive: boolean;
};

export const Container = styled.View<Props>`
  ${({ size }) => css`
    width: ${size}px;
  `}

  transform: rotate(30deg);
  height: 3px;
  background: white;
  background-color: white;
`;
