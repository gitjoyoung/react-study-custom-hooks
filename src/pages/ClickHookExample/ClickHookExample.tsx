import { useClick } from "@/hooks/useClick";

export default function ClickHookExample() {
  const InputPrint = (event: InputEvent) => {
    const inputElement = event.currentTarget as HTMLInputElement;
    console.log("Click Event 발생 :", inputElement.value);
  };

  const { ref } = useClick(InputPrint);

  return (
    <section>
      <h1>클릭 이벤트 Hook 연습</h1>
      <p>
        이 훅은 클릭 이벤트를 useRef 를 사용하여 관리 하기 위한 훅 외부의
        함수인자를 선언하여 훅에 넣어준다
      </p>
      <p>클릭시 해당 참조값이 콘솔에 찍힘</p>
      <input placeholder="입력하세요" ref={ref} type="text" />
    </section>
  );
}
