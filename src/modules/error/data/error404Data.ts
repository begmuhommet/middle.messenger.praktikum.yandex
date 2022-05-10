import { Routes } from "../../../routes";
import { IErrorData } from "../../../types/MainTypes";

const error404Data: IErrorData = {
  errorCode: 404,
  errorDescription: "Already repairing",
  link: "Back to chat",
  href: Routes.Chat,
};

export default error404Data;
