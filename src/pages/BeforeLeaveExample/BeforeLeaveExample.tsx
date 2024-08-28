import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useBeforeLeave } from "@/hooks/useBeforeLeave";

export default function BeforeLeaveExample() {
  const beforeLife = () => alert("나갈거야?");
  useBeforeLeave(beforeLife);

  return (
    <MainLayout>
      <HeadingFont> useBeforeLeave</HeadingFont>
      <BodyFont>페이지를 벗어 날 때 실행 되는 함수</BodyFont>
      <BodyFont>* 브라우저 밖으로 마우스를 꺼내면 알럿 창이 뜹니다</BodyFont>
    </MainLayout>
  );
}
