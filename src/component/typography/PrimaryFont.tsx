type Props = { children: React.ReactNode };
export default function PrimaryFont({ children }: Props) {
  return <h1 className="text-md">{children}</h1>;
}
