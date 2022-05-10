import { Routes } from "../../../routes";
import { IErrorData } from "../../../types/MainTypes";

const error500Data: IErrorData = {
  errorCode: 500,
  errorDescription: "Wrong way",
  link: "Back to chat",
  href: Routes.Chat,
};

export default error500Data;
