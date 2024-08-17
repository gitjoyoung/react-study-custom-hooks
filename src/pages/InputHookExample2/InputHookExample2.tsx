import { useInput2 } from "@/hooks/useInput2";

export default function InputHookExample2() {
  const maxlenth = (value: string): boolean => value.length < 10;
  const name = useInput2("", maxlenth);
  return (
    <div>
      <h1>인풋 훅 2 연습</h1>
      <p>
        인풋 텍스트가 길이가 10자를 초과할 수 없고 넘으면 색이 바뀌는 훅을 사용
      </p>
      <input type="text" placeholder="name" {...name} />
    </div>
  );
}
