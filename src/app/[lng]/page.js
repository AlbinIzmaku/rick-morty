"use client";
import { ApolloProvider } from "@apollo/client";
import { client } from "../main";
import Display from "@/app/[lng]/components/display";
import { useTranslation } from "../i18n/client";
import { FooterBase } from "./components/Footer/FooterBase";

export default function Home({ params: { lng } }) {
  const { t } = useTranslation(lng, "translation");
  return (
    <div>
      <ApolloProvider client={client}>
        <Display t={t} />
      </ApolloProvider>
      <FooterBase t={t} lng={lng} />
    </div>
  );
}
