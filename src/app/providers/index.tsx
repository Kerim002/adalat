import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { router } from "../router/router";
import ModalContext from "./ModalProvider";
import "../../shared/lang/i18n";
export const Providers = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchInterval: 60 * 1000 * 5, // 5 minutes
        staleTime: 60 * 1000 * 10, // 10 minutes
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <ModalContext>
          <RouterProvider router={router} />
        </ModalContext>
      </Suspense>
    </QueryClientProvider>
  );
};
