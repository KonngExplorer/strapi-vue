import { http } from "@/utils/http";

export type VerifyCodeResult = {
  success: boolean;
  data: {
    verifyCodeToken: string;
    img: string;
  };
};

export const getVerifyCode = (data?: object): Promise<VerifyCodeResult> => {
  return http.get("/api/code/img", { data });
};
