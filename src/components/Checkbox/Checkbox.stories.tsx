import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from ".";

export default {
  title: "Components/Custom Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

const Checked = Template.bind({});
Checked.args = {
  checked: true,
  label: "Checked",
};

const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  label: "Unchecked",
};

export { Checked, Unchecked };
