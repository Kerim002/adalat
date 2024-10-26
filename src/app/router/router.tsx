import { createBrowserRouter } from "react-router-dom";
import { routerLocation } from "../../shared/contants";
import { Layout } from "@/pages/layout";
import { Home } from "@/pages/home";
import { News } from "@/pages/news";
import { Videos } from "@/pages/videos";
import { Laws } from "@/pages/laws";
import { Workers } from "@/pages/workers";
import { About } from "@/pages/about";
import { Law } from "@/pages/law";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: routerLocation.news,
        Component: News,
      },

      {
        path: routerLocation.videos,
        Component: Videos,
      },
      {
        path: routerLocation.laws,
        children: [
          {
            index: true,
            Component: Laws,
          },
          {
            path: ":id",
            Component: Law,
          },
        ],
      },
      {
        path: routerLocation.workers,
        Component: Workers,
      },
      {
        path: routerLocation.about,
        Component: About,
      },
    ],
  },
]);
