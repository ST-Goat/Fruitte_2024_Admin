export const BASE_URL: string =
  process.env.IS_MOCK === "true"
    ? "http://localhost:3001/api"
    : "http://localhost:8080/api";
