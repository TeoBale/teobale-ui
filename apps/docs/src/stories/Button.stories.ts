import type { Meta, StoryObj } from '@storybook/react';

import Button from "@teobale/button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
    layout: 'centered',
  },
  args: {
    className: "",
    children: "Button",
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {

};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: 'test',
  },
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    children: 'miao',
  },
};