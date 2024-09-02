import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useSearch } from "@/hooks/useSearch";
import { searchListData } from "./SerachListData";

export default function SearchHookExample() {
  const { state, handleSearch, result } = useSearch(searchListData);
  return (
    <MainLayout>
      <HeadingFont>useSearch</HeadingFont>
      <BodyFont>검색을 위한 커스텀 훅입니다.</BodyFont>
      <input
        className="border border-black rounded-md px-1 font-bold "
        value={state}
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
      <div>
        {result.length === 0 ? (
          <BodyFont>검색 결과가 없습니다.</BodyFont>
        ) : (
          result.map((item, index) => (
            <div key={index}>
              <pre>
                {item.name} : {item.price}
              </pre>
            </div>
          ))
        )}
      </div>
    </MainLayout>
  );
}
