import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    content: "This is a tooltip",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type TooltipStory = StoryObj<typeof meta>;

export const Default: TooltipStory = {
  args: {
    children: <span>Hover over me</span>,
  },
};
