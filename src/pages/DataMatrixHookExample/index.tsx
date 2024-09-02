import PrimaryButton from "@/component/Button";
import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useDataMatrixDecoder } from "@/hooks/useDataMatrixDecoder";

export default function DataMatrixHookExample() {
  const IMG_URL = "images/datamatrixSolo2.jpg";
  const { imgRef, result, handleDecode } = useDataMatrixDecoder();
  return (
    <MainLayout>
      <HeadingFont>useDataMatrix</HeadingFont>
      <BodyFont>Zxing 라이브러를 활용한 데이타 매트릭스 출력 하는 훅</BodyFont>
      <PrimaryButton className="rounded-md" onClick={handleDecode}>
        Decode
      </PrimaryButton>
      <pre className="text-xs">데이터 매트릭스 정보</pre>
      <BodyFont className="p-1 border">
        {" "}
        {result ? result : "decode 버튼을 눌러주세요"}
      </BodyFont>
      <img ref={imgRef} src={IMG_URL} alt="dataMatrix" />
    </MainLayout>
  );
}
