type Props = { children: React.ReactNode };
export default function BodyFont({ children }: Props) {
  return <h1 className="font-semi text-sm">{children}</h1>;
}
