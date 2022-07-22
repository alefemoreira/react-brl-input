import React, { useState, ChangeEvent } from "react";
import { Story, Meta } from "@storybook/react";
import BRLInput from "./index";
import { BRLInputProps } from "./types";

export default {
  title: "BRL/BRLInput",
  component: BRLInput,
  argTypes: {},
} as Meta<typeof BRLInput>;

const Template: Story<BRLInputProps> = (args) => {
  const [value, setValue] = useState(0);
  const onChange = (_: ChangeEvent<HTMLInputElement>, value: number) => {
    setValue(value);
  };

  return <BRLInput {...args} inputValue={value} onChange={onChange} />;
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const NoCurrencySymbol = Template.bind({});
NoCurrencySymbol.args = {
  showCurrencySymbol: false,
};
