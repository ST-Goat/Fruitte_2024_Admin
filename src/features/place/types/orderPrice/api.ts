import { ResponseBody } from "@/constants/types";
import { mode } from "../api";

export interface Opt1Info {
  placeId: string;
  id: number;
  step: number;
  title: string;
  price: number;
}
export interface GetOrderPriceOpt1Request {}
export interface GetOrderPriceOpt1Response extends ResponseBody<Opt1Info[]> {}
export interface GetOrderPriceOpt1DetailRequest {}
export interface GetOrderPriceOpt1DetailResponse
  extends ResponseBody<Opt1Info> {}
export interface CreateOrderPriceOpt1Request
  extends Omit<Opt1Info, "id" | "step"> {}
export interface CreateOrderPriceOpt1Response extends ResponseBody<Opt1Info> {}
export interface UpdateOrderPriceOpt1Request extends Opt1Info {}
export interface UpdateOrderPriceOpt1Response extends ResponseBody<Opt1Info> {}
export interface DeleteOrderPriceOpt1Request {}
export interface DeleteOrderPriceOpt1Response extends ResponseBody<{}> {}
export interface UpdateOrderPriceOpt1StepRequest {
  info: Opt1Info[];
}
export interface UpdateOrderPriceOpt1StepResponse
  extends ResponseBody<Opt1Info[]> {}

export interface Opt2Info {
  placeId: string;
  id: number;
  step: number;
  title: string;
  price: number;
}
export interface GetOrderPriceOpt2Request {}
export interface GetOrderPriceOpt2Response extends ResponseBody<Opt2Info[]> {}
export interface GetOrderPriceOpt2DetailRequest {}
export interface GetOrderPriceOpt2DetailResponse
  extends ResponseBody<Opt2Info> {}
export interface CreateOrderPriceOpt2Request
  extends Omit<Opt2Info, "id" | "step"> {}
export interface CreateOrderPriceOpt2Response extends ResponseBody<Opt2Info> {}
export interface UpdateOrderPriceOpt2Request extends Opt2Info {}
export interface UpdateOrderPriceOpt2Response extends ResponseBody<Opt2Info> {}
export interface DeleteOrderPriceOpt2Request {}
export interface DeleteOrderPriceOpt2Response extends ResponseBody<{}> {}
export interface UpdateOrderPriceOpt2StepRequest {
  info: Opt2Info[];
}
export interface UpdateOrderPriceOpt2StepResponse
  extends ResponseBody<Opt2Info[]> {}

export interface OrderPriceOpt3 {
  description: string;
}
export interface GetOrderPriceOpt3Request {}
export interface GetOrderPriceOpt3Response
  extends ResponseBody<{
    mode: mode;
    info: OrderPriceOpt3;
  }> {}
export interface CreateOrderPriceOpt3Request extends OrderPriceOpt3 {
  placeId: string;
}
export interface CreateOrderPriceOpt3Response
  extends ResponseBody<CreateOrderPriceOpt3Request> {}
export interface UpdateOrderPriceOpt3Request extends OrderPriceOpt3 {
  placeId: string;
}
export interface UpdateOrderPriceOpt3Response
  extends ResponseBody<UpdateOrderPriceOpt3Request> {}
