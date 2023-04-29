export interface IUser {
  email: string;
  password: string;
}

export interface ISignUpResponseData {
  user: IUser;
  message: string;
}

export interface ILoginResponseData {
  token: string;
  expiredAfter: number;
}