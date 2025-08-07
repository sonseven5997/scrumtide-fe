import { AxiosError } from "axios";
import { message } from "antd";

export const axiosErrorHandler = (
  error: AxiosError<{ error?: { message: string[] }; message?: string }>
) => {
  if (error.response?.data?.message) {
    message.error(error.response?.data?.message);
  }
  if (error.response?.data?.error?.message) {
    message.error(error.response?.data?.error?.message[0]);
  }
};
