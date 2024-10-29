import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TripCard from ".";
import "@/app/styles/globals.scss";

export default {
  title: "Components/TripCard",
  component: TripCard,
} as Meta<typeof TripCard>;

const Template: StoryFn<typeof TripCard> = (args) => {
  return <TripCard {...args} />;
};

export const TripCardExample = Template.bind({});

TripCardExample.args = {
  data: {
    id: "1",
    title: "Name",
    description: "Speciality",
  },
};
