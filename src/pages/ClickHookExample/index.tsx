import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import PrimaryFont from "@/component/typography/PrimaryFont";
import { useClick } from "@/hooks/useClick";

export default function ClickHookExample() {
  const InputPrint = (event: InputEvent) => {
    const inputElement = event.currentTarget as HTMLInputElement;
    console.log("Click Event 발생 :", inputElement.value);
  };

  const { ref } = useClick(InputPrint);

  return (
    <MainLayout>
      <HeadingFont>클릭 이벤트 Hook 연습</HeadingFont>
      <BodyFont>
        이 훅은 클릭 이벤트를 useRef 를 사용하여 관리 하기 위한 훅 외부의
        함수인자를 선언하여 훅에 넣어준다
      </BodyFont>
      <input
        placeholder="입력하세요"
        className="border p-2"
        ref={ref}
        type="text"
      />
      <PrimaryFont>
        *input 클릭 이벤트 참조로 클릭시 입력값이 콘솔에 찍힘
      </PrimaryFont>
    </MainLayout>
  );
}
