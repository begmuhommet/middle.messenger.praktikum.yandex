import { Routes } from "../routes";

export interface IInput {
  name: string;
  type: string;
  placeholder: string;
  isRequired: boolean;
  label: string;
  errorText: string;
}

export interface IErrorData {
  errorCode: number;
  errorDescription: string;
  link: string;
  href: Routes;
}
