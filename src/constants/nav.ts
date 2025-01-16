export const commonUrl = [
  "/events",
  "/notice(/.*)?",
  "/faq(/.*)?",
  "/fruitte-host",
  "/farm-place(/.*)?",
  "/fruitte-pick(/.*)?",
  "/fruitte-order",
  "/about",
];
export const guestUrl = ["/login", "/find(/.*)?", "/join"];
export const userUrl = ["/mypage(/.*)?", "/fruitte-type(/.*)?"];

export const partnerUrl = [...userUrl, "/partner(/.*)?"];
export const adminUrl = [...partnerUrl];

export const fixMenuUrl = [
  "/fruitte-order",
  "/partner/order/detail",
  "/fruitte-type",
  "/fruitte-type/result",
];
