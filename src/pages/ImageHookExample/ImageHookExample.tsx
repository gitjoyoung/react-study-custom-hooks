import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

// Custom hook to handle image labeling with bounding box
type BoxCoordinates = {
  IMG_LEFT: number;
  IMG_TOP: number;
  IMG_WIDTH: number;
  IMG_HEIGHT: number;
};

const useImageLabel = (src: string, boxCoordinates: Array<BoxCoordinates>) => {
  const [visible, setVisible] = useState(true);
  const handleToggle = () => {
    setVisible(!visible);
  };

  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    if (!visible) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      const imgWidth = img.width;
      const imgHeight = img.height;

      const containerWidth = containerRef.current?.clientWidth || 0;
      const containerHeight = containerRef.current?.clientHeight || 0;

      const scaleX = containerWidth / imgWidth;
      const scaleY = containerHeight / imgHeight;

      svg.attr("width", containerWidth).attr("height", containerHeight);

      boxCoordinates.forEach((item) => {
        const { IMG_LEFT, IMG_TOP, IMG_WIDTH, IMG_HEIGHT } = item;
        const text = "dataMatrix";

        const adjustedLeft = IMG_LEFT * scaleX;
        const adjustedTop = IMG_TOP * scaleY;
        const adjustedWidth = IMG_WIDTH * scaleX;
        const adjustedHeight = IMG_HEIGHT * scaleY;

        svg
          .append("rect")
          .attr("x", adjustedLeft)
          .attr("y", adjustedTop)
          .attr("width", adjustedWidth)
          .attr("height", adjustedHeight)
          .attr("stroke", "red")
          .attr("stroke-width", 2)
          .attr("fill", "none");

        svg
          .append("rect")
          .attr("x", adjustedLeft + adjustedWidth)
          .attr("y", adjustedTop)
          .attr("width", 100)
          .attr("height", adjustedHeight)
          .attr("fill", "red")
          .attr("stroke-width", 2)
          .attr("stroke", "red");

        svg
          .append("text")
          .attr("x", adjustedLeft + adjustedWidth + 5)
          .attr("y", adjustedTop + adjustedHeight / 2)
          .attr("fill", "black")
          .text(text)
          .style("alignment-baseline", "middle");
      });
    };
  }, [src, boxCoordinates, visible]);

  return { svgRef, containerRef, visible, handleToggle };
};

export default function ImageHookExample() {
  const boxCoordinatesArray = [
    {
      IMG_LEFT: 2158,
      IMG_TOP: 4424,
      IMG_WIDTH: 77,
      IMG_HEIGHT: 77,
    },
    {
      IMG_LEFT: 2436,
      IMG_TOP: 1519,
      IMG_WIDTH: 79,
      IMG_HEIGHT: 79,
    },
    {
      IMG_LEFT: 3497,
      IMG_TOP: 1492,
      IMG_WIDTH: 87,
      IMG_HEIGHT: 88,
    },
    {
      IMG_LEFT: 4654,
      IMG_TOP: 1436,
      IMG_WIDTH: 77,
      IMG_HEIGHT: 76,
    },
    {
      IMG_LEFT: 3106,
      IMG_TOP: 4558,
      IMG_WIDTH: 74,
      IMG_HEIGHT: 73,
    },
    {
      IMG_LEFT: 4435,
      IMG_TOP: 3377,
      IMG_WIDTH: 74,
      IMG_HEIGHT: 75,
    },
    {
      IMG_LEFT: 4482,
      IMG_TOP: 4110,
      IMG_WIDTH: 96,
      IMG_HEIGHT: 97,
    },
    {
      IMG_LEFT: 4019,
      IMG_TOP: 2792,
      IMG_WIDTH: 72,
      IMG_HEIGHT: 72,
    },
  ];
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
      <div
        ref={containerRef}
        className="relative w-full h-full my-10  border-red-200"
      >
        <img
          src={imageUrl}
          className="w-full h-auto object-contain bg-no-repeat "
        />
        <svg ref={svgRef} className="absolute top-0 left-0" />
      </div>
    </MainLayout>
  );
}
