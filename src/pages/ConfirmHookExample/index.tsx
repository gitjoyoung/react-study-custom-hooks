import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useConfirm } from "@/hooks/useConfirm";

export default function ConfirmHookExample() {
  const deleteWorld = () => console.log("delete the world");
  const abort = () => console.log("aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

  return (
    <MainLayout>
      <HeadingFont>버튼 훅 : useConfirm</HeadingFont>
      <BodyFont>버튼 클릭시 알럿 창에서 승인과 거절을 관리 하는 훅</BodyFont>
      <button onClick={confirmDelete}>Delete the world</button>
    </MainLayout>
  );
}
