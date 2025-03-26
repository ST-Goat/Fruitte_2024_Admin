import { ResponseBody } from "@/constants/types";

export interface SessionOption {
  id: number;
  sessionId: number;
  optionId: number;
  step: number;
  maxSelectable: number;
  minRequired: number;
  totalStock: number;
  remainingStock: number;
}

export interface SessionOptionTable extends SessionOption {
  option: string;
  sessionDate: Date;
  sessionTime: Date;
}

export interface GetSessionOptionsRequest {}
export interface GetSessionOptionsResponse
  extends ResponseBody<SessionOption[]> {}

export interface GetSessionOptionRequest {}
export interface GetSessionOptionResponse extends ResponseBody<SessionOption> {}

export interface CreateSessionOptionRequest
  extends Omit<SessionOption, "id" | "step"> {}
export interface CreateSessionOptionResponse
  extends ResponseBody<SessionOption> {}

export interface UpdateSessionOptionRequest extends SessionOption {}
export interface UpdateSessionOptionResponse
  extends ResponseBody<SessionOption> {}

export interface DeleteSessionOptionRequest {}
export interface DeleteSessionOptionResponse extends ResponseBody<{}> {}

export interface GetSessionsForSelectorRequest {}
export interface GetSessionsForSelectorResponse
  extends ResponseBody<
    { id: string; sessionTime: string; sessionDate: string }[]
  > {}

export interface GetSessionsForStepSelectorRequest {}
export interface GetSessionsForStepSelectorResponse
  extends ResponseBody<
    {
      id: string;
      sessionTime: string;
      sessionDate: Date;
      optionCount: number;
    }[]
  > {}

export interface GetOptionsForSelectorRequest {}
export interface GetOptionsForSelectorResponse
  extends ResponseBody<{ id: string; title: string }[]> {}

export interface UpdateSessionOptionStepRequest extends Array<SessionOption> {}
export interface UpdateSessionOptionStepResponse
  extends ResponseBody<SessionOption[]> {}
