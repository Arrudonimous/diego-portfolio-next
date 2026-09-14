import { useTranslations } from "next-intl";

export interface Recomendation {
  description: string;
  name: string;
  role: string;
}

export const useRecomendations = (): Recomendation[] => {
  const t = useTranslations("Default.Recomendations");

  return [
    {
      description: t("Recomendation_1.CONTENT"),
      name: "Mario de Jesus",
      role: t("Recomendation_1.ROLE"),
    },
    {
      description: t("Recomendation_2.CONTENT"),
      name: "Geraldo Junior",
      role: t("Recomendation_2.ROLE"),
    }
  ];
};
