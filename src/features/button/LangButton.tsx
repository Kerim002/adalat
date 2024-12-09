import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/entities/lang";
import { useTranslation } from "react-i18next";

const LangButton = () => {
  const { language, setLanguage } = useLanguage();
  const { i18n } = useTranslation();
  const changeLanguage = (lng: LanguageVariants) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };
  return (
    <Select
      value={language}
      onValueChange={(value: LanguageVariants) => changeLanguage(value)}
    >
      <SelectTrigger className="w-fit h-fit p-1 bg-transparent border-none ring-0 focus:ring-0 focus:ring-offset-0">
        <SelectValue defaultValue={language} />
      </SelectTrigger>
      <SelectContent className="bg-mainblack text-white border border-gray-500">
        <SelectItem
          className="focus:bg-neutral-700 focus:text-white"
          value="tm"
        >
          TM
        </SelectItem>
        <SelectItem
          className="focus:bg-neutral-700 focus:text-white"
          value="ru"
        >
          RU
        </SelectItem>
        <SelectItem
          className="focus:bg-neutral-700 focus:text-white"
          value="en"
        >
          EN
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LangButton;

// <div className="">
//   <select
//     className="flex flex-col w-20 "
//     value={language}
//     onChange={({ target: { value } }) => {
//       const lang = value as LanguageVariants;
//       setLanguage(lang);
//       changeLanguage(lang);
//     }}
//   >
//     <option className="" value="tm">
//       TM
//     </option>
//     <option value="ru">RU</option>
//     <option value="en">EN</option>
//   </select>
// </div>
