import PrimaryFont from "../typography/PrimaryFont";

interface Props {
  children?: React.ReactNode;
}
export default function MainLayout({ children }: Props) {
  return (
    <div className="border border-black w-full p-2 rounded-xl ">{children}</div>
  );
}
