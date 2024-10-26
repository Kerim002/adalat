import { useScreenWidth } from "@/shared/hooks/useScreenWidth";

type Props = {
  title: string;
};

const Paragraph = ({ title }: Props) => {
  const screen = useScreenWidth();

  return (
    <p className="text-gray-200 md:text-base text-sm">
      {screen < 500
        ? title.slice(0, 100)
        : screen < 768
        ? title.slice(0, 150)
        : title.slice(0, 150)}
      {title.length > 150 && "..."}
    </p>
  );
};

export default Paragraph;
