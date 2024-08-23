type Props = { children: React.ReactNode };
export default function HeadingFont({ children }: Props) {
  return <h1 className="font-bold text-xl">{children}</h1>;
}
