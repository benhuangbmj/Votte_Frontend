import EventScreen from "./EventScreen";
import { reactRouterParameters } from "storybook-addon-remix-react-router";

const meta = {
  component: EventScreen,
};

export default meta;

export const Default = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { eventId: "10001" },
      },
      routing: { path: "/event/:eventId" },
    }),
  },
};
