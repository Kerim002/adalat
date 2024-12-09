const ClientMessage = ({ content }: { content: string }) => {
  return (
    <div className="flex items-end justify-end">
      <div className="p-3 bg-darkbordo bg-bgprimary text-white sm:text-base text-sm rounded-2xl sm:max-w-sm md:max-w-lg lg:w-2xl  max-w-xs">
        {content}
      </div>
    </div>
  );
};

export default ClientMessage;
