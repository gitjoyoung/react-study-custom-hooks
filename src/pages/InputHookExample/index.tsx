import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useInput } from "@/hooks/useInput";

export default function InputHookExample() {
  const name = useInput("초기값");
  return (
    <MainLayout>
      <HeadingFont>인풋 훅 1 연습</HeadingFont>
      <BodyFont>
        이 컴포넌트는 인풋 입력값을 useState 로 관리 제어를 하기위한 훅{" "}
      </BodyFont>
      <input placeholder="name" {...name} />
    </MainLayout>
  );
}
