import PrimaryButton from "@/component/Button";
import MainLayout from "@/component/LayOut/MainLayout";
import BodyFont from "@/component/typography/BodyFont";
import HeadingFont from "@/component/typography/HeadingFont";
import { useAxios } from "@/hooks/useAxios";

export default function AxiosHookExample() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://jsonplaceholder.typicode.com/posts",
  });
  console.log(`loading : ${loading}  data : ${data} error : ${error}`);
  return (
    <MainLayout>
      <HeadingFont>useAxios</HeadingFont>
      <BodyFont>axios 통신 훅</BodyFont>
      <div className="flex justify-center items-center">
        {loading ? (
          <BodyFont>로딩중...</BodyFont>
        ) : (
          <PrimaryButton onClick={refetch}>다시 불러오기</PrimaryButton>
        )}
      </div>
      <pre className="text-xs">{data && JSON.stringify(data, null, 2)}</pre>{" "}
    </MainLayout>
  );
}
