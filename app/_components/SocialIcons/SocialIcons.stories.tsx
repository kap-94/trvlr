import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SocialIcons from "./index";

export default {
  title: "Components/SocialIcons",
  component: SocialIcons,
} as Meta;

const Template: StoryFn<typeof SocialIcons> = (args) => {
  return <SocialIcons {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  options: ["facebook", "twitter", "instagram"],
};

export const CustomIcons = Template.bind({});
CustomIcons.args = {
  options: ["facebook", "twitter", "instagram", "tiktok"],
};

export const LimitedOptions = Template.bind({});
LimitedOptions.args = {
  options: ["facebook", "twitter"],
};

export const EmptyOptions = Template.bind({});
EmptyOptions.args = {
  options: [],
};
