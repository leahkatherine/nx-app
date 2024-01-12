import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedTypography } from './AnimatedTypography';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AnimatedTypography> = {
  component: AnimatedTypography,
  title: 'AnimatedTypography',
};
export default meta;
type Story = StoryObj<typeof AnimatedTypography>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AnimatedTypography!/gi)).toBeTruthy();
  },
};
