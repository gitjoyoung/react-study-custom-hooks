import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useNetwork } from "@/hooks/useNetwork";

export default function NetworkHookExample() {
  const handleNetworkMassage = (msg: any) => {
    console.log("network status changed :", msg);
  };
  const networkStatus = useNetwork(handleNetworkMassage);
  const statusStyle = networkStatus ? "text-green-600" : "text-red-600";
  return (
    <MainLayout>
      <HeadingFont>useNetwork</HeadingFont>
      <BodyFont>
        네트워크 상태를 확인하는 훅 네트워크 상태를 변경을 감지하여 상태를
        나타냄
      </BodyFont>
      <div className="flex gap-2 items-center">
        <span className="font-bold">현재 네트워크 상태 :</span>
        <BodyFont className={`font-bold ${statusStyle}`}>
          {networkStatus ? "온라인" : "오프라인"}
        </BodyFont>
      </div>
    </MainLayout>
  );
}
