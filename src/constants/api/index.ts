import { uploadImgOnS3 } from "@/features/upload/api";

export const BASE_URL: string =
  process.env.IS_MOCK === "true"
    ? "http://localhost:3001/api"
    : "http://localhost:8080/api";

export const API_URL = {
  getPresignedUrl: `${BASE_URL}/upload/presigned-url`,
  getInfoOpt1: `${BASE_URL}/admin/place/info/opt1`,
  updateInfoOpt1: `${BASE_URL}/admin/place/info/opt1`,
  getInfoOpt2: `${BASE_URL}/admin/place/info/opt2`,
  updateInfoOpt2: `${BASE_URL}/admin/place/info/opt2`,
  createInfoOpt3: `${BASE_URL}/admin/place/info/opt3`,
  getInfoOpt3: `${BASE_URL}/admin/place/info/opt3`,
  updateInfoOpt3: `${BASE_URL}/admin/place/info/opt3`,
  getInfoOpt4: `${BASE_URL}/admin/place/info/opt4`,
  createInfoOpt4: `${BASE_URL}/admin/place/info/opt4`,
  updateInfoOpt4: `${BASE_URL}/admin/place/info/opt4`,
  getInfoOpt5: `${BASE_URL}/admin/place/info/opt5`,
  createInfoOpt5: `${BASE_URL}/admin/place/info/opt5`,
  updateInfoOpt5: `${BASE_URL}/admin/place/info/opt5`,
  getInfoOpt6: `${BASE_URL}/admin/place/info/opt6`,
  createInfoOpt6: `${BASE_URL}/admin/place/info/opt6`,
  updateInfoOpt6: `${BASE_URL}/admin/place/info/opt6`,
  getIntroOpt1Desc: `${BASE_URL}/admin/place/intro/opt1/desc`,
  createIntroOpt1Desc: `${BASE_URL}/admin/place/intro/opt1/desc`,
  updateIntroOpt1Desc: `${BASE_URL}/admin/place/intro/opt1/desc`,
  getIntroOpt2: `${BASE_URL}/admin/place/intro/opt2`,
  createIntroOpt2: `${BASE_URL}/admin/place/intro/opt2`,
  getIntroOpt2Detail: `${BASE_URL}/admin/place/intro/opt2/detail`,
  updateIntroOpt2: `${BASE_URL}/admin/place/intro/opt2`,
  deleteIntroOpt2: `${BASE_URL}/admin/place/intro/opt2/delete`,
  updateIntroOpt2Step: `${BASE_URL}/admin/place/intro/opt2/step`,
  getIntroOpt3: `${BASE_URL}/admin/place/intro/opt3`,
  createIntroOpt3: `${BASE_URL}/admin/place/intro/opt3`,
  getIntroOpt3Detail: `${BASE_URL}/admin/place/intro/opt3/detail`,
  updateIntroOpt3: `${BASE_URL}/admin/place/intro/opt3`,
  deleteIntroOpt3: `${BASE_URL}/admin/place/intro/opt3/delete`,
  updateIntroOpt3Step: `${BASE_URL}/admin/place/intro/opt3/step`,
};
