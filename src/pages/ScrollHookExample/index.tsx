import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useScroll } from "@/hooks/useScroll";

export default function ScrollHookExample() {
  const { x, y } = useScroll();
  return (
    <MainLayout className="h-[500vh]">
      <HeadingFont>useScrollExample</HeadingFont>
      <BodyFont> window.scroll 을 출력하는 훅</BodyFont>
      <BodyFont className="sticky top-0 text-red">
        현재 스크롤 좌표
        <span className="font-bold">{`X 스크롤 : ${x}, Y 스크롤 : ${y}`}</span>
      </BodyFont>
    </MainLayout>
  );
}
