import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

// Custom hook to handle image labeling with bounding box
const useImageLabel = (
  src: string,
  boxCoordinates: Array<{
    x_min: number;
    y_min: number;
    x_max: number;
    y_max: number;
  }>,
  visible: boolean
) => {
  const svgRef = useRef<SVGSVGElement>(null); // svg 엘리먼트를 참조하기 위한 ref

  useEffect(() => {
    const svg = d3.select(svgRef.current); // svg 엘리먼트 선택
    svg.selectAll("*").remove(); // 이전에 그려진 svg 요소를 모두 제거

    if (!visible) return; // visible 값이 false 일 경우 렌더링하지 않음

    const img = new Image();
    img.src = src;
    img.onload = () => {
      const imgWidth = img.width;
      const imgHeight = img.height;

      console.log("imgWidth", imgWidth, "imgHeight", imgHeight);
      svg.attr("width", imgWidth).attr("height", imgHeight);

      boxCoordinates.forEach((item) => {
        const { x_min, y_min, x_max, y_max } = item;
        const width = x_max - x_min;
        const height = y_max - y_min;
        svg
          .append("rect")
          .attr("x", x_min) // 투명 구멍 사각형의 x 위치
          .attr("y", y_min) // 투명 구멍 사각형의 y 위치
          .attr("width", width) // 투명 구멍 사각형의 너비
          .attr("height", height) // 투명 구멍 사각형의 높이
          .attr("stroke", "red") // 테두리 색상
          .attr("stroke-width", 2) // 테두리 두께
          .attr("fill", "none"); // 투명 구멍을 나타내기 위해 채우기 없음

        // 라벨링 사각형 추가
        svg
          .append("rect")
          .attr("x", x_min + width) // 라벨링 사각형의 x 위치 (구멍 사각형 옆에 위치)
          .attr("y", y_min) // 라벨링 사각형의 y 위치
          .attr("width", 100) // 라벨링 사각형의 너비
          .attr("height", height) // 라벨링 사각형의 높이 (구멍 사각형과 동일한 높이)
          .attr("fill", "red") // 라벨링 사각형의 배경 색상
          .attr("stroke", "red"); // 라벨링 사각형의 테두리 색상

        // 라벨 텍스트 추가
        svg
          .append("text")
          .attr("x", x_min + width) // 텍스트의 x 위치 (라벨링 사각형 안에 위치)
          .attr("y", y_min + 10) // 텍스트의 y 위치 (라벨링 사각형의 중앙)
          .attr("dy", ".35em") // 텍스트 세로 정렬
          .attr("fill", "black") // 텍스트 색상
          .text("Label Text"); // 텍스트 내용
      });
    };
  }, [src, boxCoordinates, visible]);

  return svgRef;
};

export default function ImageHookExample() {
  const [visible, setVisible] = useState(true);
  const handleToggle = () => {
    setVisible(!visible);
  };

  const boxCoordinatesArray = [
    { x_min: 0, y_min: 0, x_max: 45, y_max: 55 },
    { x_min: 160, y_min: 120, x_max: 230, y_max: 190 },
    { x_min: 300, y_min: 80, x_max: 380, y_max: 150 },
  ];
  const imageUrl = "/images/dataMatrix.jpg";
  const svgRef = useImageLabel(imageUrl, boxCoordinatesArray, visible);

  return (
    <MainLayout>
      <HeadingFont>useImageLabel</HeadingFont>
      <BodyFont>이미지에 라벨을 표시하는 훅</BodyFont>
      <BodyFont>
        이미지의 좌표 배열을 받아서 이미지에 라벨을 표시합니다
      </BodyFont>

      <div className="flex my-2 items-center gap-2`">
        <input
          className="border p-2 font-bold rounded-sm "
          type="button"
          value="Toggle"
          onClick={handleToggle}
        />
        <BodyFont>{visible ? "라벨을 표시합니다" : "라벨을 숨깁니다"}</BodyFont>
      </div>

      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={` inline-block border border-black bg-contain bg-no-repeat`}
      >
        <svg ref={svgRef} />
      </div>
    </MainLayout>
  );
}
