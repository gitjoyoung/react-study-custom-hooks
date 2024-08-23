import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { usePreventLeave } from "@/hooks/PreventLeaveExample";

export default function PreventLeaveExample() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <MainLayout>
      <HeadingFont>버튼 훅 : usePreventLeave</HeadingFont>
      <BodyFont>
        usePreventLeave 훅은 페이지 이동시 제어를 하는 훅 enablePrevent 버튼을
        활성화 시키면 윈도우의 이벤트리스너가 활성화 되어 페이지 이동시 경고창이
        뜨게 된다. disablePrevent 버튼으로 해당 기능 비활성화
      </BodyFont>
      <button className="border p-1" onClick={enablePrevent}>
        enablePrevent
      </button>
      <button className="border p-1" onClick={disablePrevent}>
        disablePrevent
      </button>
    </MainLayout>
  );
}
