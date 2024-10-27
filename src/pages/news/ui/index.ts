import { lazy } from "react";
const SingleNews = lazy(() => import("./SingleNews"));
const News = lazy(() => import("./News"));
export { News, SingleNews };
