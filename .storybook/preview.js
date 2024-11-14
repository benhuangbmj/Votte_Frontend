/** @type { import('@storybook/react').Preview } */
import "/src/index.css";
import { withRouter } from "storybook-addon-remix-react-router";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withRouter],
};

export default preview;
