import { useTitle } from "@/hooks/useTitle";

export default function TitleHookExmple() {
  const title = useTitle("로딩...");
  setTimeout(() => title("Title 컴포넌트"), 3000); // 지연 설정
  return (
    <div>
      <p>
        useTitle 훅은 페이지가 로딩 중일 때 htmlTitle을 관리하는 역할을 합니다.{" "}
      </p>
    </div>
  );
}
