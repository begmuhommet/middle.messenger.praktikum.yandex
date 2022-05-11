export interface IButtonProps {
  label: string;
  type?: ButtonTypes;
  events?: {
    click: () => void;
  };
}

export enum ButtonTypes {
  Submit = "submit",
}
