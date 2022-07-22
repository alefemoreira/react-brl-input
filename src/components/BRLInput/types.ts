import { ChangeEventHandler, ChangeEvent } from "react";

export interface BRLInputProps {
  id?: string;
  key?: React.Key | null | undefined;
  inputValue?: number;
  height?: number;
  width?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  disabled?: boolean;
  placeholder?: string;
  showCurrencySymbol?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: number) => void;
}
