const AdminMessage = ({ content }: { content: string }) => {
  return (
    <div className="flex items-start">
      <div className="p-3 bg-darkbordo sm:text-base text-sm rounded-t-2xl rounded-e-2xl sm:max-w-sm md:max-w-lg lg:w-2xl  max-w-xs">
        {content}
      </div>
    </div>
  );
};

export default AdminMessage;
