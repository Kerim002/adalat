const TopSlogan = () => {
  return (
    <div className="w-full bg-secondary md:py-7 py-3 px-2 rounded-2xl border  mt-5 flex  flex-col lg:gap-5 sm:gap-3">
      {/* <div className="w-full bg-gray-800 md:py-7 py-3 px-2 rounded-2xl border  mt-5 flex  flex-col lg:gap-5 sm:gap-3"> */}
      <h1 className="text-center lg:text-4xl  sm:text-3xl text-2xl  font-thin">
        Hos Geldiniz !
      </h1>
      <p className="text-center lg:text-3xl sm:text-2xl text-xl">
        Taze habarlar we kanunlar bilen{" "}
        <span className="text-red-500">video</span> 📽️ gornusunde yada{" "}
        <br className="xl:block hidden" />
        <span className="text-red-500">makala</span> 🧾 gornusunde tanys bolun.
      </p>
    </div>
  );
};

export default TopSlogan;
