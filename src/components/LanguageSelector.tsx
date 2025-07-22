
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Language, useLanguage } from "@/hooks/use-language";
import { Check, Languages } from "lucide-react";

const LanguageSelector = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();

  const languages = [
    { code: "en", name: t("language.english") },
    { code: "ur", name: t("language.urdu") },
    { code: "pa", name: t("language.punjabi") },
    { code: "sd", name: t("language.sindhi") },
    { code: "ps", name: t("language.pashto") },
    { code: "bl", name: t("language.balochi") },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2 h-8">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:block">{t("language.select")}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0" align="end">
        <div className="grid grid-cols-1">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              className="justify-start font-normal"
              onClick={() => setLanguage(lang.code as Language)}
            >
              {currentLanguage === lang.code && <Check className="mr-2 h-4 w-4" />}
              <span className={currentLanguage !== lang.code ? "ml-6" : ""}>{lang.name}</span>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
