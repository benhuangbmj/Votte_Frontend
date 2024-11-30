import EventsList from "./EventsList";
import { mockGetAllEvents } from "/.storybook/utils/mockHttpRequests";

const meta = {
	title: "EventsList",
	component: EventsList,
};

export default meta;

export const Mocked = {
	parameters: {
		msw: {
			handlers: [mockGetAllEvents()],
		},
	},
};

export const Primary = {};
