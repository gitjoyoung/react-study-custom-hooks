import PrimaryButton from "@/component/Button";
import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useNotification } from "@/hooks/useNotification";

export default function NotificationExample() {
  const triggerNotify = useNotification("알람 표시!?", {
    body: "네 알람이 보입니다.",
  });
  return (
    <MainLayout>
      <HeadingFont>useNotification</HeadingFont>
      <BodyFont>Notification 훅 알람을 출력하는 훅 </BodyFont>
      <PrimaryButton onClick={triggerNotify}>알림</PrimaryButton>
    </MainLayout>
  );
}
