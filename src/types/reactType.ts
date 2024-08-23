// 일반 컴포넌트
type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

// 입력 컴포넌트
type InputProps = {
  type?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// 버튼 컴포넌트
type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

// 폼 컴포넌트
type FormProps = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};
