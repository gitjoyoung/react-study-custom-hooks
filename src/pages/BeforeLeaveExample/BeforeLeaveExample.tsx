import { useBeforeLeave } from "@/hooks/useBeforeLeave";

export default function BeforeLeaveExample() {
  const beforeLife = () => console.log("pls don't leave");
  useBeforeLeave(beforeLife);

  return (
    <div>
      <h1> useBeforeLeave</h1>
      <p>페이지를 닫을 떄 실행 되는 함수</p>
    </div>
  );
}
