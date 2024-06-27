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
    direction: "top",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type TooltipStory = StoryObj<typeof meta>;

// Default를 Top으로 수정했더니 에러 발생
export const Default: TooltipStory = {
  args: {
    children: <span>Hover over me (Top)</span>,
  },
};

export const Bottom: TooltipStory = {
  args: {
    direction: "bottom",
    children: <span>Hover over me (Bottom)</span>,
  },
};

export const Left: TooltipStory = {
  args: {
    direction: "left",
    children: <span>Hover over me (Left)</span>,
  },
};

export const Right: TooltipStory = {
  args: {
    direction: "right",
    children: <span>Hover over me (Right)</span>,
  },
};
