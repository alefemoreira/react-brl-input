import styled from "styled-components";
import { BRLInputProps } from "./types";

export const StyledInput = styled.input<BRLInputProps>`
  height: ${(props) => (props.height ? props.height : 20)}px;
  width: ${(props) => (props.width ? props.width : 80)}px;
  border-radius: ${(props) => props.borderRadius || 3}px;
  border: solid
    ${(props) => (props.disabled ? "#545454" : props.borderWidth || 1)}px
    ${(props) => props.borderColor || "#353637"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  &:focus {
    border: solid
      ${(props) => (props.borderWidth ? props.borderWidth + 1 : 2)}px
      ${(props) => props.borderColor || "#353637"};
  }
`;
