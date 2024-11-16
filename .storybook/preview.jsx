/** @type { import('@storybook/react').Preview } */
import "/src/index.css";
import localStorageMock from "./mocks/localStorage.json";
import { withRouter } from "storybook-addon-remix-react-router";
import withLocalStorage from "./decorators/withLocalStorage";
import { initialize, mswLoader } from "msw-storybook-addon";

localStorage.clear();
initialize();

const preview = {
  parameters: {
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
