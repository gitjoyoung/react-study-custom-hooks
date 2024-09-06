import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { boxCoordinatesArray } from "./data";
import { useImageLabel } from "@/hooks/useImageLabel";

export default function ImageLabelHookExample() {
  const IMG_URL = "images/dataMatrix3.png";
  const { svgRef, containerRef, handleToggle, visible } = useImageLabel(
    IMG_URL,
    boxCoordinatesArray
  );
  return (
    <MainLayout className="">
      <HeadingFont>useImageLabel</HeadingFont>
      <BodyFont>이미지에 라벨을 표시하는 훅</BodyFont>
      <BodyFont>
        이미지의 좌표 배열을 받아서 이미지에 라벨을 표시합니다
      </BodyFont>

      <div className="flex justify-center  flex-col items-center">
        <div className="flex my-2 items-center gap-2 border border-black">
          <input
            className="border p-2 font-bold rounded-sm"
            type="button"
            value="Toggle"
            onClick={handleToggle}
          />
          <BodyFont className="w-[200px] items-center flex">
            {visible ? "라벨을 표시합니다" : "라벨을 숨깁니다"}
          </BodyFont>
        </div>

        <div className="relative w-[80%] h-full my-10  border-red-200">
          <img
            ref={containerRef}
            src={IMG_URL}
            className="w-full h-auto object-contain bg-no-repeat "
          />

          <svg ref={svgRef} className="absolute top-0 left-0" />
        </div>
      </div>
    </MainLayout>
  );
}
