import { Request, Response } from "express";

type TUserData = {
  userType: string;
  name: string;
  email: string;
};

export interface IUserDataVariables {
  isGoogleUser: boolean;
  signupUserData: TUserData;
}

interface ISignup extends Request {
  body: {
    variables: IUserDataVariables;
  };
}

export interface ISignupContext {
  req: ISignup;
}

export interface IContext {
  req: Request;
  res: Response;
}
