import { useRef, useState } from "react";
// @ts-ignore
import { BrowserDatamatrixCodeReader } from "@zxing/library";

export const useDataMatrixDecoder = () => {
  const imgRef = useRef(null); // 이미지에 대한 ref 생성
  const [result, setResult] = useState(""); // 디코딩 결과를 저장할 상태
  const handleDecode = async () => {
    console.log("1. handleDecode 실행");
    if (!imgRef.current) {
      console.log("error : imgRef.current 가 없습니다.");
      return;
    }
    console.log("2. BrowserDatamatrixCodeReader 생성");
    const codeReader = new BrowserDatamatrixCodeReader();
    try {
      console.log("3. decodeFromImage 실행");
      const startTime = performance.now(); // 시작 시간 기록
      const decodedResult = await codeReader.decodeFromImage(imgRef.current);
      const endTime = performance.now(); // 종료 시간 기록

      console.log(`4. 실행 완료  ${endTime - startTime}ms`);
      console.log("Decoded Result:", decodedResult);

      setResult(decodedResult.getText()); // 결과를 상태에 저장
    } catch (error) {
      console.error("5. Error during decoding:", error);
      setResult("Decoding failed.");
    }
  };

  return { imgRef, result, handleDecode }; // ref, 결과, 디코딩 함수, 로딩 상태 반환
};
