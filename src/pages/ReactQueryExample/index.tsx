import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useReactQuery } from "@/hooks/useReactQuery";
import axios from "axios";

const fetchUserData = async (): Promise<any> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

export default function ReactQueryExample() {
  const fetchId = "useData";
  const { data, error, isError, isLoading } = useReactQuery(
    fetchId,
    fetchUserData
  );

  if (isLoading) {
    return (
      <MainLayout>
        <HeadingFont>Loading...</HeadingFont>
      </MainLayout>
    );
  }
  if (isError) {
    return (
      <MainLayout>
        <HeadingFont>Error fetching data</HeadingFont>
        <BodyFont>{isError}</BodyFont>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <HeadingFont>useReactQuery</HeadingFont>
      <BodyFont> 리액트 쿼리 연습</BodyFont>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </MainLayout>
  );
}
