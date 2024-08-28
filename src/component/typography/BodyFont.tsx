type Props = { children?: React.ReactNode; className?: string };
export default function BodyFont({ children, className }: Props) {
  const classes = `font-semi text-sm ${className}`;
  return <h1 className={classes}>{children}</h1>;
}
