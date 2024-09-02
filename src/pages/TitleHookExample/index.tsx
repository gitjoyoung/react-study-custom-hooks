import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useTitle } from "@/hooks/useTitle";

export default function TitleHookExample() {
  const title = useTitle("로딩...");
  setTimeout(() => title("Title 컴포넌트"), 3000); // 지연 설정
  return (
    <MainLayout>
      <HeadingFont>타이틀 훅 : useTitle</HeadingFont>
      <BodyFont>
        useTitle 훅은 페이지가 로딩 중일 때 htmlTitle을 관리하는 역할을 합니다.
      </BodyFont>
    </MainLayout>
  );
}
