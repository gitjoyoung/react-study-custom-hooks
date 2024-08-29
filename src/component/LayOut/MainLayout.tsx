interface Props {
  children?: React.ReactNode;
  className?: string;
}
export default function MainLayout({ children, className }: Props) {
  const style = `flex flex-col min-h-screen gap-4 ${className}`;
  return <div className={style}>{children}</div>;
}
