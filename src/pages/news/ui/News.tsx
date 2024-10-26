import { useNews } from "@/entities/news";
import { PageAnimationWrapper } from "@/widget/animationwrapper";
import { NewsCard } from "@/widget/cards";

const News = () => {
  // const { isLoading, data } = useNews();
  const data = {
    news: [
      {
        id: 1,
        image: "/test/satranc.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 6544,
        image: "/test/test1.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 1234,
        image: "/test/test2.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 89,
        image: "/test/test3.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 456,
        image: "/test/satranc.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 78,
        image: "/test/test1.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 56,
        image: "/test/test2.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 5,
        image: "/test/test3.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 34,
        image: "/test/satranc.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 33,
        image: "/test/test1.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 78,
        image: "/test/test1.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 56,
        image: "/test/test2.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 5,
        image: "/test/test3.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 34,
        image: "/test/satranc.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
      {
        id: 33,
        image: "/test/test1.jpg",
        title: "Lorem test test",
        date: "12.12.2024 14:56",
      },
    ],
  };
  return (
    <PageAnimationWrapper className="px-2 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-x-6 gap-x-3 xl:gap-y-8 gap-y-4 min-h-screen">
      {data?.news.map((news) => (
        <NewsCard key={news.id} item={news} />
      ))}
    </PageAnimationWrapper>
  );
};

export default News;

// home
// {
//     "banner": [
//         {
//             "id": "1727619442",
//             "title": "test",
//             "description": "tmm",
//             "image": "http://192.168.100.242:5000/./uploads/banners//1727619442_593.jpg",
//             "link": "http://tm.com"
//         },
//         {
//             "id": "1727619507",
//             "title": "tm",
//             "description": "t",
//             "image": "http://192.168.100.242:5000/./uploads/banners//1727619507_110.png",
//             "link": "http://salam.com"
//         }
//     ],
//     "employ": [
//         {
//             "id": "1727600083",
//             "name": "Abdulla",
//             "major": "",
//             "image": "http://192.168.100.242:5000/./uploads/employers/1727600083_110.jpg"
//         },
//         {
//             "id": "1727600278",
//             "name": "salam",
//             "major": "salam",
//             "image": "http://192.168.100.242:5000/./uploads/employers/1727600278_176.jpg"
//         }
//     ],
//     "media": [
//         {
//             "id": "1727759122",
//             "video": "http://192.168.100.242::5000/./uploads/media/1727759122_351.mp4",
//             "title": "Salam",
//             "entitle": "hello",
//             "rutitle": "privet",
//             "date": "2024-10-01"
//         }
//     ],
//     "news": [
//         {
//             "id": 4,
//             "image": "http://192.168.100.242:5000/api/home/./uploads/news/1727718001_351.jpg",
//             "description": "salam",
//             "title": "salam",
//             "date": "30.09.2024 22:40",
//             "entitle": "hello",
//             "rutitle": "privet",
//             "endescription": "salam",
//             "rudescription": "salam",
//             "count": 13
//         },
//         {
//             "id": 5,
//             "image": "http://192.168.100.242:5000/api/home/./uploads/news/1727718001_351.jpg",
//             "description": "salam",
//             "title": "salam",
//             "date": "30.09.2024 22:40",
//             "entitle": "hello",
//             "rutitle": "privet",
//             "endescription": "salam",
//             "rudescription": "salam",
//             "count": 7
//         },
//         {
//             "id": 1727718001,
//             "image": "http://192.168.100.242:5000/api/home/./uploads/news/1727718001_351.jpg",
//             "description": "s",
//             "title": "s",
//             "date": "30.09.2024 22:40",
//             "entitle": "",
//             "rutitle": "",
//             "endescription": "",
//             "rudescription": "",
//             "count": 8
//         }
//     ]
// }

// News

// [
//   {
//     id: 4,
//     image: "http://192.168.100.242:5000/./uploads/news/1727718001_351.jpg",
//     description: "salam",
//     title: "salam",
//     date: "30.09.2024 22:40",
//     entitle: "hello",
//     rutitle: "privet",
//     endescription: "salam",
//     rudescription: "salam",
//     count: 13,
//   },
//   {
//     id: 5,
//     image: "http://192.168.100.242:5000/./uploads/news/1727718001_351.jpg",
//     description: "salam",
//     title: "salam",
//     date: "30.09.2024 22:40",
//     entitle: "hello",
//     rutitle: "privet",
//     endescription: "salam",
//     rudescription: "salam",
//     count: 7,
//   },
//   {
//     id: 1727718001,
//     image: "http://192.168.100.242:5000/./uploads/news/1727718001_351.jpg",
//     description: "s",
//     title: "s",
//     date: "30.09.2024 22:40",
//     entitle: "",
//     rutitle: "",
//     endescription: "",
//     rudescription: "",
//     count: 8,
//   },
// ];

// video url

// [
//   {
//     id: "1727759122",
//     video: "http://192.168.100.242::5000/./uploads/media/1727759122_351.mp4",
//     title: "Salam",
//     entitle: "hello",
//     rutitle: "privet",
//     date: "2024-10-01",
//   },
// ];
