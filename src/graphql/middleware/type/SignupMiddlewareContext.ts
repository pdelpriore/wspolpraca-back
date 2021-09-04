import { Request } from "express";

type TYoutuberData = {
  userType: string;
  name: string;
  email: string;
  password: string;
};

export interface IUserDataVariables {
  userSuffix: string;
  signupUserData: TYoutuberData;
}

interface ISignup extends Request {
  body: {
    variables: IUserDataVariables;
  };
}

export interface IContext {
  req: ISignup;
}
