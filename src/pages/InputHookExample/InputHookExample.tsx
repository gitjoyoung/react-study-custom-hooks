import { useInput } from "@/hooks/useInput";

export default function InputHookExample() {
  const name = useInput("초기값");
  return (
    <div>
      <h1>인풋 훅 1 연습</h1>
      <p>이 컴포넌트는 인풋에 제어를 하기위한 훅 </p>
      <input placeholder="name" {...name} />
    </div>
  );
}
