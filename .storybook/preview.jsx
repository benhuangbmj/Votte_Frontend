/** @type { import('@storybook/react').Preview } */
import "/src/index.css";
import localStorageMock from "./mocks/localStorage.json";
import { withRouter } from "storybook-addon-remix-react-router";
import withLocalStorage from "./decorators/withLocalStorage";
import { initialize, mswLoader } from "msw-storybook-addon";
import { mockGetAllEvents } from "/.storybook/utils/mockHttpRequests";

localStorage.clear();
initialize();

const preview = {
  parameters: {
    msw: {
      handlers: [mockGetAllEvents()],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  args: {
    userName: "World!",
    localStorageMock,
  },
  decorators: [withRouter, withLocalStorage],
  loaders: [mswLoader],
};

export default preview;
