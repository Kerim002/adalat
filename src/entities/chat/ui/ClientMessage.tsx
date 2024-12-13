const ClientMessage = ({ content }: { content: string }) => {
  return (
    <div className="flex items-end justify-end">
      <div className="p-3 bg-marble bg-bgprimary text-black sm:text-base text-sm rounded-t-2xl rounded-s-2xl sm:max-w-sm md:max-w-lg lg:w-2xl  max-w-xs">
        {content}
      </div>
    </div>
  );
};

export default ClientMessage;
