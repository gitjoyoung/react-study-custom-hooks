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
      <BodyFont>
        검색을 위한 커스텀 훅입니다. 검색 단어에 포함 된 단어가 있으면 검색결과{" "}
      </BodyFont>
      <article className="flex w-full gap-3">
        <div>
          <input
            className="border border-black rounded-md px-1 font-bold "
            value={state}
            type="text"
            placeholder="Search"
            onChange={handleSearch}
          />
          <div className="border border-green-400">
            <HeadingFont>검색 결과</HeadingFont>
            {result.length === 0 ? (
              <BodyFont>검색 결과가 없습니다.</BodyFont>
            ) : (
              result.map((item, index) => (
                <div key={index}>
                  <pre>
                    {item.group} - {item.name} : {item.price}
                  </pre>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="border border-orange-500">
          <HeadingFont>검색 데이터 목록</HeadingFont>
          <pre>{JSON.stringify(Object(searchListData), null, 2)}</pre>
        </div>
      </article>
    </MainLayout>
  );
}
