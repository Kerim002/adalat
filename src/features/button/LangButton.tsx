import { useLanguage } from "@/entities/lang";

const LangButton = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="">
      <select
        className="flex flex-col w-20 bg-black"
        value={language}
        onChange={({ target: { value } }) => {
          const lang = value as LanguageVariants;
          setLanguage(lang);
        }}
      >
        <option className="" value="tm">
          TM
        </option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LangButton;
