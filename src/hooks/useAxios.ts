import defaultAxios from "axios";
import { useEffect, useState } from "react";

interface IOptions {
  url?: string;
  method?: "get" | "post";
}

interface IState {
  loading?: boolean;
  data?: any;
  error?: any;
  refetch?: () => void;
}
export const useAxios = (
  opts: IOptions,
  axiosInstance = defaultAxios
): IState => {
  const [state, setState] = useState<IState>({
    loading: true,
    data: null,
    error: null,
  });

  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  if (!opts.url) {
    return state;
  }
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        const res = data.data;
        setState({ ...state, loading: false, data: res });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  return { ...state, refetch };
};
