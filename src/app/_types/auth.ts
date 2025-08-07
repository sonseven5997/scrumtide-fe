export type User = {
  id: string;
};

export type LoginBody = {
  email: string;
  password: string;
};

export type RegisterBody = {
  email?: string;
  password?: string;
  fullName?: string;
  isGuest?: boolean;
};