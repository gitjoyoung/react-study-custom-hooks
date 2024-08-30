import PrimaryButton from "@/component/Button";
import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useFullScreen } from "@/hooks/useFullScreen";
import { useState } from "react";

export default function FullScreenHookExample() {
  const [visible, setVisible] = useState(true);
  const { element, triggerFull, exitFull } = useFullScreen(setVisible);
  return (
    <MainLayout>
      <HeadingFont>useFullScreen</HeadingFont>
      <BodyFont>풀 스크린을 컨트롤 하는 훅</BodyFont>
      <HeadingFont>현재 상태 : {visible.toString()} </HeadingFont>

      <div
        ref={element}
        className="border border-black flex flex-col py-2 items-center justify-center"
      >
        <div className="flex gap-2 ">
          <PrimaryButton onClick={triggerFull}>전체 화면 보기</PrimaryButton>
          <PrimaryButton onClick={exitFull}>전체 화면 종료</PrimaryButton>
        </div>
        <img src="images/dataMatrix.jpg" alt="random" />
      </div>
    </MainLayout>
  );
}
