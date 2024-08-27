import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useBeforeLeave } from "@/hooks/useBeforeLeave";

export default function BeforeLeaveExample() {
  const beforeLife = () => console.log("pls don't leave");
  useBeforeLeave(beforeLife);

  return (
    <MainLayout>
      <HeadingFont> useBeforeLeave</HeadingFont>
      <BodyFont>페이지를 닫을 떄 실행 되는 함수</BodyFont>
    </MainLayout>
  );
}
