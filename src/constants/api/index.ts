import { uploadImgOnS3 } from "@/features/upload/api";

export const BASE_URL: string =
  process.env.IS_MOCK === "true"
    ? "http://localhost:3001/api"
    : "http://localhost:8080/api";

export const API_URL = {
  getPlaceList: `${BASE_URL}/admin/place/list`,
  updatePlaceInfoJson: `${BASE_URL}/admin/place/json/detail`,
  getPartners: `${BASE_URL}/admin/place/partnerInfo`,
  createPlace: `${BASE_URL}/admin/place`,
  deletePlace: `${BASE_URL}/admin/place/delete`,
  getPresignedUrl: `${BASE_URL}/upload/presigned-url`,
  getInfoOpt1: `${BASE_URL}/admin/place/info/opt1`,
  updateInfoOpt1: `${BASE_URL}/admin/place/info/opt1`,
  getInfoOpt2: `${BASE_URL}/admin/place/info/opt2`,
  createInfoOpt2: `${BASE_URL}/admin/place/info/opt2`,
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
  getIntroOpt4: `${BASE_URL}/admin/place/intro/opt4`,
  createIntroOpt4: `${BASE_URL}/admin/place/intro/opt4`,
  updateIntroOpt4: `${BASE_URL}/admin/place/intro/opt4`,
  getIntroOpt5: `${BASE_URL}/admin/place/intro/opt5`,
  getIntroOpt5Detail: `${BASE_URL}/admin/place/intro/opt5`,
  createIntroOpt5: `${BASE_URL}/admin/place/intro/opt5`,
  updateIntroOpt5: `${BASE_URL}/admin/place/intro/opt5`,
  deleteIntroOpt5: `${BASE_URL}/admin/place/intro/opt5/delete`,
  updateIntroOpt5Step: `${BASE_URL}/admin/place/intro/opt5/step`,
  getIntroOpt6: `${BASE_URL}/admin/place/intro/opt6`,
  getIntroOpt6Detail: `${BASE_URL}/admin/place/intro/opt6`,
  createIntroOpt6: `${BASE_URL}/admin/place/intro/opt6`,
  updateIntroOpt6: `${BASE_URL}/admin/place/intro/opt6`,
  deleteIntroOpt6: `${BASE_URL}/admin/place/intro/opt6/delete`,
  updateIntroOpt6Step: `${BASE_URL}/admin/place/intro/opt6/step`,
  getIntroOpt7: `${BASE_URL}/admin/place/intro/opt7`,
  createIntroOpt7: `${BASE_URL}/admin/place/intro/opt7`,
  updateIntroOpt7: `${BASE_URL}/admin/place/intro/opt7`,
  getIntroOpt8: `${BASE_URL}/admin/place/intro/opt8`,
  createIntroOpt8: `${BASE_URL}/admin/place/intro/opt8`,
  updateIntroOpt8: `${BASE_URL}/admin/place/intro/opt8`,
  getScheduleOpt1: `${BASE_URL}/admin/place/schedule/opt1`,
  createScheduleOpt1: `${BASE_URL}/admin/place/schedule/opt1`,
  updateScheduleOpt1: `${BASE_URL}/admin/place/schedule/opt1`,
  getScheduleOpt2: `${BASE_URL}/admin/place/schedule/opt2`,
  getScheduleOpt2Detail: `${BASE_URL}/admin/place/schedule/opt2`,
  createScheduleOpt2: `${BASE_URL}/admin/place/schedule/opt2`,
  updateScheduleOpt2: `${BASE_URL}/admin/place/schedule/opt2`,
  deleteScheduleOpt2: `${BASE_URL}/admin/place/schedule/opt2/delete`,
  updateScheduleOpt2Step: `${BASE_URL}/admin/place/schedule/opt2/step`,
  getScheduleOpt3: `${BASE_URL}/admin/place/schedule/opt3`,
  createScheduleOpt3: `${BASE_URL}/admin/place/schedule/opt3`,
  updateScheduleOpt3: `${BASE_URL}/admin/place/schedule/opt3`,
  getScheduleOpt4: `${BASE_URL}/admin/place/schedule/opt4`,
  createScheduleOpt4: `${BASE_URL}/admin/place/schedule/opt4`,
  updateScheduleOpt4: `${BASE_URL}/admin/place/schedule/opt4`,
  getScheduleOpt5: `${BASE_URL}/admin/place/schedule/opt5`,
  createScheduleOpt5: `${BASE_URL}/admin/place/schedule/opt5`,
  updateScheduleOpt5: `${BASE_URL}/admin/place/schedule/opt5`,
  getScheduleOpt6: `${BASE_URL}/admin/place/schedule/opt6`,
  createScheduleOpt6: `${BASE_URL}/admin/place/intschedulero/opt6`,
  updateScheduleOpt6: `${BASE_URL}/admin/place/schedule/opt6`,
  getOrderPriceOpt1: `${BASE_URL}/admin/place/orderPrice/opt1`,
  createOrderPriceOpt1: `${BASE_URL}/admin/place/orderPrice/opt1`,
  getOrderPriceOpt1Detail: `${BASE_URL}/admin/place/orderPrice/opt1`,
  updateOrderPriceOpt1: `${BASE_URL}/admin/place/orderPrice/opt1`,
  deleteOrderPriceOpt1: `${BASE_URL}/admin/place/orderPrice/opt1/delete`,
  updateOrderPriceOpt1Step: `${BASE_URL}/admin/place/orderPrice/opt1/step`,
  getOrderPriceOpt2: `${BASE_URL}/admin/place/orderPrice/opt2`,
  createOrderPriceOpt2: `${BASE_URL}/admin/place/orderPrice/opt2`,
  getOrderPriceOpt2Detail: `${BASE_URL}/admin/place/orderPrice/opt2`,
  updateOrderPriceOpt2: `${BASE_URL}/admin/place/orderPrice/opt2`,
  deleteOrderPriceOpt2: `${BASE_URL}/admin/place/orderPrice/opt2/delete`,
  updateOrderPriceOpt2Step: `${BASE_URL}/admin/place/orderPrice/opt2/step`,
  getOrderPriceOpt3: `${BASE_URL}/admin/place/orderPrice/opt3`,
  createOrderPriceOpt3: `${BASE_URL}/admin/place/orderPrice/opt3`,
  updateOrderPriceOpt3: `${BASE_URL}/admin/place/orderPrice/opt3`,
  getNearbyOpt1: `${BASE_URL}/admin/place/nearby/opt1`,
  createNearbyOpt1: `${BASE_URL}/admin/place/nearby/opt1`,
  getNearbyOpt1Detail: `${BASE_URL}/admin/place/nearby/opt1/detail`,
  updateNearbyOpt1: `${BASE_URL}/admin/place/nearby/opt1`,
  deleteNearbyOpt1: `${BASE_URL}/admin/place/nearby/opt1/delete`,
  updateNearbyOpt1Step: `${BASE_URL}/admin/place/nearby/opt1/step`,
};
