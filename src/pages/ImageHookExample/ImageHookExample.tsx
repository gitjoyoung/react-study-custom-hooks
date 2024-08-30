import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { boxCoordinatesArray } from "./data";

type BoxCoordinates = Record<
  "IMG_LEFT" | "IMG_TOP" | "IMG_WIDTH" | "IMG_HEIGHT",
  number
>;

const useImageLabel = (src: string, boxCoordinates: Array<BoxCoordinates>) => {
  const [visible, setVisible] = useState(true);
  const handleToggle = () => {
    setVisible(!visible);
  };
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current); // svg 선택
    svg.selectAll("*").remove(); // svg 초기화
    if (!visible || !containerRef.current) return; // visible 이 false 이거나 container 가 없으면 return

    const updateSVG = () => {
      svg.selectAll("*").remove(); // svg 초기화
      const containerWidth = containerRef.current?.clientWidth || 0; // container 의 width
      const containerHeight = containerRef.current?.clientHeight || 0; // container 의 height

      const img = new Image(); // 이미지 객체 생성
      img.src = src;
      img.onload = () => {
        // 이미지 로드가 완료되면 실행
        svg.attr("width", containerWidth).attr("height", containerHeight); // svg 의 width, height 설정

        boxCoordinates.forEach((item) => {
          const { IMG_LEFT, IMG_TOP, IMG_WIDTH, IMG_HEIGHT } = item; // 좌표값 데이터

          const adjustedLeft = (IMG_LEFT / img.width) * containerWidth; //
          const adjustedTop = (IMG_TOP / img.height) * containerHeight;
          const adjustedWidth = (IMG_WIDTH / img.width) * containerWidth;
          const adjustedHeight = (IMG_HEIGHT / img.height) * containerHeight;

          const group = svg.append("g");

          group
            .append("rect")
            .attr("x", adjustedLeft)
            .attr("y", adjustedTop)
            .attr("width", adjustedWidth)
            .attr("height", adjustedHeight)
            .attr("stroke", "red")
            .attr("stroke-width", 2)
            .attr("fill", "none");

          group
            .append("rect")
            .attr("x", adjustedLeft + adjustedWidth)
            .attr("y", adjustedTop)
            .attr("width", 100)
            .attr("height", adjustedHeight)
            .attr("fill", "red")
            .attr("stroke-width", 2)
            .attr("stroke", "red");

          group
            .append("text")
            .attr("x", adjustedLeft + adjustedWidth + 5)
            .attr("y", adjustedTop + adjustedHeight / 2)
            .attr("fill", "black")
            .text("text")
            .style("alignment-baseline", "middle");
        });
      };
    };

    const resizeObserver = new ResizeObserver(() => {
      updateSVG();
    });

    resizeObserver.observe(containerRef.current);

    updateSVG();

    return () => {
      resizeObserver.disconnect();
    };
  }, [src, boxCoordinates, visible]);
  return { svgRef, containerRef, visible, handleToggle };
};

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
