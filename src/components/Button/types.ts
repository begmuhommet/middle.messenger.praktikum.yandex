export interface IButtonProps {
  label: string;
  events?: {
    click: () => void;
  };
}
