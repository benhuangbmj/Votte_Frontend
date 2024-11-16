import { http, HttpResponse, delay } from "msw";
import allEventsMock from "../mocks/allEvents.json";

export function mockGetRequest(url, mockData) {
	return http.get(url, () => HttpResponse.json(mockData));
}

export function mockGetAllEvents() {
	return mockGetRequest(
		`${import.meta.env.VITE_BASE_URL}/api/events/all-events`,
		allEventsMock,
	);
}
