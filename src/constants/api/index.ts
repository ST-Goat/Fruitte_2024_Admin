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
  getInfoOpt4: `${BASE_URL}/place/info/opt4`,
  createInfoOpt4: `${BASE_URL}/place/info/opt4`,
  updateInfoOpt4: `${BASE_URL}/place/info/opt4`,
  getInfoOpt5: `${BASE_URL}/place/info/opt5`,
  createInfoOpt5: `${BASE_URL}/place/info/opt5`,
  updateInfoOpt5: `${BASE_URL}/place/info/opt5`,
  getInfoOpt6: `${BASE_URL}/place/info/opt6`,
  createInfoOpt6: `${BASE_URL}/place/info/opt6`,
  updateInfoOpt6: `${BASE_URL}/place/info/opt6`,
  getIntroOpt1Desc: `${BASE_URL}/place/intro/opt1/desc`,
  createIntroOpt1Desc: `${BASE_URL}/place/intro/opt1/desc`,
  updateIntroOpt1Desc: `${BASE_URL}/place/intro/opt1/desc`,
  getIntroOpt2: `${BASE_URL}/place/intro/opt2`,
  getIntroOpt2Detail: `${BASE_URL}/place/intro/opt2/detail`,
};
