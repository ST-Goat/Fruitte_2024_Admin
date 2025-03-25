import {
  getFruittePick,
  updateFruittePickStep,
} from "@/features/fruitte-pick/api";
import { uploadImgOnS3 } from "@/features/upload/api";

export const BASE_URL: string =
  process.env.IS_MOCK === "true"
    ? "http://localhost:3001/api"
    : "http://localhost:8080/api";

export const API_URL = {
  getPlaceList: `/admin/place/list`,
  updatePlaceInfoJson: `/admin/place/json/detail`,
  getPartners: `/admin/place/partnerInfo`,
  createPlace: `/admin/place`,
  deletePlace: `/admin/place/delete`,
  getPresignedUrl: `/upload/presigned-url`,
  getInfoOpt1: `/admin/place/info/opt1`,
  updateInfoOpt1: `/admin/place/info/opt1`,
  getInfoOpt2: `/admin/place/info/opt2`,
  createInfoOpt2: `/admin/place/info/opt2`,
  updateInfoOpt2: `/admin/place/info/opt2`,
  createInfoOpt3: `/admin/place/info/opt3`,
  getInfoOpt3: `/admin/place/info/opt3`,
  updateInfoOpt3: `/admin/place/info/opt3`,
  getInfoOpt4: `/admin/place/info/opt4`,
  createInfoOpt4: `/admin/place/info/opt4`,
  updateInfoOpt4: `/admin/place/info/opt4`,
  getInfoOpt5: `/admin/place/info/opt5`,
  createInfoOpt5: `/admin/place/info/opt5`,
  updateInfoOpt5: `/admin/place/info/opt5`,
  getInfoOpt6: `/admin/place/info/opt6`,
  createInfoOpt6: `/admin/place/info/opt6`,
  updateInfoOpt6: `/admin/place/info/opt6`,
  getIntroOpt1Desc: `/admin/place/intro/opt1/desc`,
  createIntroOpt1Desc: `/admin/place/intro/opt1/desc`,
  updateIntroOpt1Desc: `/admin/place/intro/opt1/desc`,
  getIntroOpt2: `/admin/place/intro/opt2`,
  createIntroOpt2: `/admin/place/intro/opt2`,
  getIntroOpt2Detail: `/admin/place/intro/opt2/detail`,
  updateIntroOpt2: `/admin/place/intro/opt2`,
  deleteIntroOpt2: `/admin/place/intro/opt2/delete`,
  updateIntroOpt2Step: `/admin/place/intro/opt2/step`,
  getIntroOpt3: `/admin/place/intro/opt3`,
  createIntroOpt3: `/admin/place/intro/opt3`,
  getIntroOpt3Detail: `/admin/place/intro/opt3/detail`,
  updateIntroOpt3: `/admin/place/intro/opt3`,
  deleteIntroOpt3: `/admin/place/intro/opt3/delete`,
  updateIntroOpt3Step: `/admin/place/intro/opt3/step`,
  getIntroOpt4: `/admin/place/intro/opt4`,
  createIntroOpt4: `/admin/place/intro/opt4`,
  updateIntroOpt4: `/admin/place/intro/opt4`,
  getIntroOpt5: `/admin/place/intro/opt5`,
  getIntroOpt5Detail: `/admin/place/intro/opt5`,
  createIntroOpt5: `/admin/place/intro/opt5`,
  updateIntroOpt5: `/admin/place/intro/opt5`,
  deleteIntroOpt5: `/admin/place/intro/opt5/delete`,
  updateIntroOpt5Step: `/admin/place/intro/opt5/step`,
  getIntroOpt6: `/admin/place/intro/opt6`,
  getIntroOpt6Detail: `/admin/place/intro/opt6`,
  createIntroOpt6: `/admin/place/intro/opt6`,
  updateIntroOpt6: `/admin/place/intro/opt6`,
  deleteIntroOpt6: `/admin/place/intro/opt6/delete`,
  updateIntroOpt6Step: `/admin/place/intro/opt6/step`,
  getIntroOpt7: `/admin/place/intro/opt7`,
  createIntroOpt7: `/admin/place/intro/opt7`,
  updateIntroOpt7: `/admin/place/intro/opt7`,
  getIntroOpt8: `/admin/place/intro/opt8`,
  createIntroOpt8: `/admin/place/intro/opt8`,
  updateIntroOpt8: `/admin/place/intro/opt8`,
  getScheduleOpt1: `/admin/place/schedule/opt1`,
  createScheduleOpt1: `/admin/place/schedule/opt1`,
  updateScheduleOpt1: `/admin/place/schedule/opt1`,
  getScheduleOpt2: `/admin/place/schedule/opt2`,
  getScheduleOpt2Detail: `/admin/place/schedule/opt2`,
  createScheduleOpt2: `/admin/place/schedule/opt2`,
  updateScheduleOpt2: `/admin/place/schedule/opt2`,
  deleteScheduleOpt2: `/admin/place/schedule/opt2/delete`,
  updateScheduleOpt2Step: `/admin/place/schedule/opt2/step`,
  getScheduleOpt3: `/admin/place/schedule/opt3`,
  createScheduleOpt3: `/admin/place/schedule/opt3`,
  updateScheduleOpt3: `/admin/place/schedule/opt3`,
  getScheduleOpt4: `/admin/place/schedule/opt4`,
  createScheduleOpt4: `/admin/place/schedule/opt4`,
  updateScheduleOpt4: `/admin/place/schedule/opt4`,
  getScheduleOpt5: `/admin/place/schedule/opt5`,
  createScheduleOpt5: `/admin/place/schedule/opt5`,
  updateScheduleOpt5: `/admin/place/schedule/opt5`,
  getScheduleOpt6: `/admin/place/schedule/opt6`,
  createScheduleOpt6: `/admin/place/schedule/opt6`,
  updateScheduleOpt6: `/admin/place/schedule/opt6`,
  getOrderPriceOpt1: `/admin/place/orderPrice/opt1`,
  createOrderPriceOpt1: `/admin/place/orderPrice/opt1`,
  getOrderPriceOpt1Detail: `/admin/place/orderPrice/opt1`,
  updateOrderPriceOpt1: `/admin/place/orderPrice/opt1`,
  deleteOrderPriceOpt1: `/admin/place/orderPrice/opt1/delete`,
  updateOrderPriceOpt1Step: `/admin/place/orderPrice/opt1/step`,
  getOrderPriceOpt2: `/admin/place/orderPrice/opt2`,
  createOrderPriceOpt2: `/admin/place/orderPrice/opt2`,
  getOrderPriceOpt2Detail: `/admin/place/orderPrice/opt2`,
  updateOrderPriceOpt2: `/admin/place/orderPrice/opt2`,
  deleteOrderPriceOpt2: `/admin/place/orderPrice/opt2/delete`,
  updateOrderPriceOpt2Step: `/admin/place/orderPrice/opt2/step`,
  getOrderPriceOpt3: `/admin/place/orderPrice/opt3`,
  createOrderPriceOpt3: `/admin/place/orderPrice/opt3`,
  updateOrderPriceOpt3: `/admin/place/orderPrice/opt3`,
  getNearbyOpt1: `/admin/place/nearby/opt1`,
  createNearbyOpt1: `/admin/place/nearby/opt1`,
  getNearbyOpt1Detail: `/admin/place/nearby/opt1`,
  updateNearbyOpt1: `/admin/place/nearby/opt1`,
  deleteNearbyOpt1: `/admin/place/nearby/opt1/delete`,
  updateNearbyOpt1Step: `/admin/place/nearby/opt1/step`,
  getNotice: `/admin/notice`,
  getExposedNotice: `/admin/notice/exposed`,
  getNoticeDetail: `/admin/notice`,
  createNotice: `/admin/notice`,
  updateNotice: `/admin/notice`,
  deleteNotice: `/admin/notice/delete`,
  updateNoticeStep: `/admin/notice/step`,
  getFruittePicks: "/admin/fruitte-pick",
  getFruittePicksExposed: "/admin/fruitte-pick/exposed",
  getFruittePick: "/admin/fruitte-pick",
  createFruittePicks: "/admin/fruitte-pick",
  updateFruittePicks: "/admin/fruitte-pick",
  deleteFruittePicks: "/admin/fruitte-pick/delete",
  updateFruittePickStep: "/admin/fruitte-pick/step",
  getFruittePickIntroList: "/admin/fruitte-pick/intro",
  getFruittePickIntro: "/admin/fruitte-pick/intro",
  createFruittePickIntro: "/admin/fruitte-pick/intro",
  updateFruittePickIntro: "/admin/fruitte-pick/intro",
  deleteFruittePickIntro: "/admin/fruitte-pick/intro/delete",
  updateFruittePickIntroStep: "/admin/fruitte-pick/intro/step",
  getTickets: "/admin/place/ticket",
  createTicket: "/admin/place/ticket",
  updateTicket: "/admin/place/ticket",
  deleteTicket: "/admin/place/ticket/delete",
  getOptions: "/admin/place/option",
  createOption: "/admin/place/option",
  updateOption: "/admin/place/option",
  deleteOption: "/admin/place/option/delete",
  getSessions: "/admin/place/session",
  createSession: "/admin/place/session",
  updateSession: "/admin/place/session",
  deleteSession: "/admin/place/session/delete",
  createMultipleSession: "/admin/place/session/multiple",
  getSessionTickets: "/admin/place/session-ticket",
  createSessionTicket: "/admin/place/session-ticket",
  updateSessionTicket: "/admin/place/session-ticket",
  deleteSessionTicket: "/admin/place/session-ticket/delete",
  getSessionsForSelector: "/admin/place/session/selector",
  getTicketsForSelector: "/admin/place/ticket/selector",
};
