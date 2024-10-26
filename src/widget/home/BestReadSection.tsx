const BestReadSection = () => {
  return (
    <div className="w-full flex xl:gap-8 md:gap-4 gap-3 sm:gap-1 items-center flex-col md:flex-row">
      <div className="flex-1 w-full">
        <img
          src="/test/satranc.jpg"
          className="w-full h-48 lg:h-72 sm:h-60 md:rounded-2xl sm:rounded-xl rounded-xl object-cover"
          alt=""
        />
        <p className="text-sm text-gray-200 hidden md:block lg:hidden mt-2">
          12.12.2024 15:45
        </p>
      </div>
      <div className="flex-1 flex flex-col md:gap-2 ">
        <h1 className="text-2xl font-medium font-serif xl:leading-[55px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quod
          quos quibusdam mollitia accusamus consequuntur est, quaerat iste
          laboriosam, fugiat neque optio harum iure nihil natus velit maiores ut
          corporis ullam iusto quia. Veniam quia adipisci aspernatur, error
          quisquam consectetur?
        </p>
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-semibold">
            In kop okalan habar
          </span>
          •<span>455 okaldy</span>
        </div>
        <p className="text-sm lg:block md:hidden text-gray-200">
          12.12.2024 15:45
        </p>
      </div>
    </div>
  );
};

export default BestReadSection;
