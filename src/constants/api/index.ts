export const BASE_URL: string =
  process.env.IS_MOCK === "true"
    ? "http://localhost:3001/api/admin"
    : "http://localhost:8080/api/admin";

export const API_URL = {
  getInfoOpt1: `${BASE_URL}/place/info/opt1`,
  updateInfoOpt1: `${BASE_URL}/place/info/opt1`,
  getInfoOpt2: `${BASE_URL}/place/info/opt2`,
  updateInfoOpt2: `${BASE_URL}/place/info/opt2`,
  createInfoOpt3: `${BASE_URL}/place/info/opt3`,
  getInfoOpt3: `${BASE_URL}/place/info/opt3`,
  updateInfoOpt3: `${BASE_URL}/place/info/opt3`,
};
