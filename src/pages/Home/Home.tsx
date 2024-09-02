import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";

export default function Home() {
  return (
    <MainLayout>
      <HeadingFont>메인 홈</HeadingFont>
      <BodyFont>커스텀 훅스를 만들고 공부하기 위한 프로젝트</BodyFont>
    </MainLayout>
  );
}
