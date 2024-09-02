import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function FadeInHookExample() {
  const fadeInH1 = useFadeIn(0.5, 1);
  const fadeInP = useFadeIn(1, 2);
  return (
    <MainLayout>
      <HeadingFont>useFadeIn</HeadingFont>
      <BodyFont {...fadeInP}>
        페이지가 로드될 때 fade in 효과를 주는 훅
      </BodyFont>
      <div className="space-y-2 my-2">
        <p className="font-bold" {...fadeInH1}>
          1. 페이드 인 효과 0.5초 뒤 실행 1초 동안 지속
        </p>
        <p className="font-bold" {...fadeInP}>
          2. 페이드 인 효과 1초 뒤 실행 2초 동안 지속
        </p>
      </div>
    </MainLayout>
  );
}
