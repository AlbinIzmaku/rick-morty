import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/app/i18n/settings";
import CustomLink from "../customLink";

export const FooterBase = ({ t, lng }) => {
  return (
    <footer className="fixed bottom-4 right-4">
      <CustomLink href="/en">English</CustomLink>
      <CustomLink href="/de">Deutsch</CustomLink>
    </footer>
  );
};
