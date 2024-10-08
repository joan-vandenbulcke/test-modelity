import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api-backend/itinerary", () => {
    return HttpResponse.json({
      "1": {
        color: "#5394cf",
        total_duration_s: 720,
        path: [
          [45.760520956041326, 4.858194774687109],
          [45.76326674486923, 4.8573960638766405],
          [45.76294867125261, 4.853999013623984],
          [45.76271123483556, 4.853960483753443],
        ],
      },
      "2": {
        color: "#f5a623",
        total_duration_s: 720,
        path: [
          [45.760520956041326, 4.858194774687109],
          [45.76326674486923, 4.8573960638766405],
          [45.76294867125261, 4.853999013623984],
          [45.76271123483556, 4.853960483753443],
        ],
      },
    });
  }),
];
