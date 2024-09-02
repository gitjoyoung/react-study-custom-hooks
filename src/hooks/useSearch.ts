import { useState } from "react";

export interface ISearchList {
  name: string;
  price: number;
}

export const useSearch = (searchList: ISearchList[]) => {
  const [state, setState] = useState<string>("");
  const [result, setResult] = useState<ISearchList[]>([]);

  const searchFilter = (
    _searchList: ISearchList[],
    _query: string
  ): ISearchList[] => {
    return _searchList.filter((item: ISearchList) =>
      item.name.includes(_query)
    );
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const src = event.currentTarget.value;
    setState(src);
    const result = searchFilter(searchList, src);
    setResult(result);
  };
  return { state, handleSearch, result };
};
