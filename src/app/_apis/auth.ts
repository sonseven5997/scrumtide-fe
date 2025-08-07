import { LoginBody, RegisterBody, User } from "../_types/auth";
import axiosInstance from "./config";

export const register = async (data: RegisterBody) =>
  axiosInstance.post("/auth/register", data);

export const login = async (data: LoginBody) =>
  axiosInstance.post<{ token: string; user: User }>("/auth/login", data);