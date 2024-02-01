import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Sandox/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;


export const Filled: Story = {
  args: {
    style: 'filled',
    state: 'enabled',
    size: 'large',
    label: 'Filled button',
    iconUrl: './icon.svg',

  },
};

export const Outlined: Story = {
  args: {
    style: 'outlined',
    state: 'enabled',
    size: 'large',
    label: 'Outlined button',
    iconUrl: './icon.svg',
  },
};

export const Text: Story = {
  args: {
    style: 'text',
    state: 'enabled',
    size: 'large',
    label: 'Text button',
    iconUrl: './icon.svg',
  },
};

export const Elevated: Story = {
  args: {
    style: 'elevated',
    state: 'enabled',
    size: 'large',
    label: 'Elevated button',
    iconUrl: './icon.svg',
  },
};


export const Tonal: Story = {
  args: {
    style: 'tonal',
    state: 'enabled',
    size: 'large',
    label: 'Tonal button',
    iconUrl: './icon.svg',
  },
};
