import EventScreen from "./EventScreen";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { mockGetAllEvents } from "/.storybook/utils/mockHttpRequests";

const meta = {
  component: EventScreen,
};

export default meta;

export const Default = {
  parameters: {
    msw: {
      handlers: [mockGetAllEvents()],
    },
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { eventId: "10001" },
      },
      routing: { path: "/event/:eventId" },
    }),
  },
};
