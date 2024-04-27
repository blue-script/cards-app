import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography/typography'

const meta = {
  argTypes: {
    tag: {
      control: { type: 'radio' },
      options: [
        'body1',
        'body2',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'link1',
        'link2',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
    },
  },
  component: Typography,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
    color: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const Body1: Story = {
  args: {
    children: 'body1',
    tag: 'body1',
  },
}
export const Body2: Story = {
  args: {
    children: 'body2',
    tag: 'body2',
  },
}
export const Caption: Story = {
  args: {
    children: 'caption',
    tag: 'caption',
  },
}
export const H1: Story = {
  args: {
    children: 'h1',
    tag: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'h2',
    tag: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'h3',
    tag: 'h3',
  },
}
export const H4: Story = {
  args: {
    children: 'h4',
    tag: 'h4',
  },
}
export const Link1: Story = {
  args: {
    children: 'link1',
    tag: 'link1',
  },
}
export const Link2: Story = {
  args: {
    children: 'link2',
    tag: 'link2',
  },
}
export const Overline: Story = {
  args: {
    children: 'overline',
    tag: 'overline',
  },
}
export const Subtitle1: Story = {
  args: {
    children: 'subtitle1',
    tag: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'subtitle2',
    tag: 'subtitle2',
  },
}
