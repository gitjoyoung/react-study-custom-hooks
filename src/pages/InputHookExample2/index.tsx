import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useInput2 } from "@/hooks/useInput2";

export default function InputHookExample2() {
  const maxlenth = (value: string): boolean => value.length < 10;
  const name = useInput2("", maxlenth);
  return (
    <MainLayout>
      <HeadingFont>인풋 훅 2 : useInput2</HeadingFont>
      <BodyFont>
        인풋훅의 조건을 활용 텍스트가 길이가 10자를 초과할 수 없고 넘으면 색이
        바뀌는 훅을 사용
      </BodyFont>
      <input type="text" placeholder="name" {...name} />
    </MainLayout>
  );
}
