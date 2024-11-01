import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import FeaturedTripCard from ".";
import "@/app/styles/globals.scss";

export default {
  title: "Components/TripCard",
  component: FeaturedTripCard,
} as Meta<typeof FeaturedTripCard>;

const Template: StoryFn<typeof FeaturedTripCard> = (args) => {
  return <FeaturedTripCard {...args} />;
};

export const TripCardExample = Template.bind({});

TripCardExample.args = {
  data: {
    id: "1",
    title: "Name",
    description: "Speciality",
  },
};
