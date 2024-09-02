import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { boxCoordinatesArray } from "./data";
import { useImageLabel } from "@/hooks/useImageLabel";

export default function ImageHookExample() {
  const imageUrl = "images/dataMatrix3.png";
  const { svgRef, containerRef, handleToggle, visible } = useImageLabel(
    imageUrl,
    boxCoordinatesArray
  );

  return (
    <MainLayout className="">
      <HeadingFont>useImageLabel</HeadingFont>
      <BodyFont>이미지에 라벨을 표시하는 훅</BodyFont>
      <BodyFont>
        이미지의 좌표 배열을 받아서 이미지에 라벨을 표시합니다
      </BodyFont>
      <div className="flex my-2 items-center gap-2`">
        <input
          className="border p-2 font-bold rounded-sm"
          type="button"
          value="Toggle"
          onClick={handleToggle}
        />
        <BodyFont>{visible ? "라벨을 표시합니다" : "라벨을 숨깁니다"}</BodyFont>
      </div>
      <div className="relative w-full h-full my-10  border-red-200">
        <img
          ref={containerRef}
          src={imageUrl}
          className="w-full h-auto object-contain bg-no-repeat "
        />
        <svg ref={svgRef} className="absolute top-0 left-0" />
      </div>
    </MainLayout>
  );
}
