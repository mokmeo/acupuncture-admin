import { QueryClient } from "@tanstack/react-query";

const queryErrorHandler = (error: unknown) => {
  console.error("queryErrorHandler : ", error);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
    mutations: {
      onError: (err) => queryErrorHandler(err),
    },
  },
});

export default queryClient;
