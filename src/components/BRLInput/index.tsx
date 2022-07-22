import React, { Fragment } from "react";
import { BRLInputProps } from "./types";
import { StyledInput } from "./styles";

const BRLInput: React.FC<BRLInputProps> = ({
  id,
  key,
  disabled,
  inputValue,
  onChange,
  placeholder,
  showCurrencySymbol = true,
  ...props
}) => {
  const parseBrl = (value?: number) => {
    const options: Intl.NumberFormatOptions = {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    };

    if (showCurrencySymbol) {
      options.style = "currency";
      options.currency = "BRL";
    }

    return new Intl.NumberFormat("pt-BR", options).format(value || 0);
  };

  const parseNumber = (value?: string) => {
    if (!value) return 0;
    const numberString = value.replace(/[R$.\s]/g, "").replace(/[,]/g, ".");
    console.log(value);
    console.log(numberString);
    let number = new Number(numberString).valueOf();

    if (numberString.split(".")[1].length < 2) return number / 10;

    if (numberString.split(".")[1].length > 2) return number * 10;

    return number;
  };

  return (
    <Fragment>
      <StyledInput
        key={key}
        id={id}
        value={parseBrl(inputValue)}
        type="text"
        onChange={(e) => {
          const value = parseNumber(e.target.value);
          if (onChange) onChange(e, value);
        }}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      />
    </Fragment>
  );
};

export default BRLInput;
