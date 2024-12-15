type Props = {
  title: string;
};

const Paragraph = ({ title }: Props) => {
  return (
    <p className="text-gray-200 truncate-lines truncate-4-lines md:text-base text-sm">
      {title}
    </p>
  );
};

export default Paragraph;
