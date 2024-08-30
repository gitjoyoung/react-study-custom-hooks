import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";

export default function Example() {
  return (
    <MainLayout>
      <HeadingFont>타이틀</HeadingFont>
      <BodyFont>버튼 클릭시 알럿 창에서 승인과 거절을 관리 하는 훅</BodyFont>
    </MainLayout>
  );
}
