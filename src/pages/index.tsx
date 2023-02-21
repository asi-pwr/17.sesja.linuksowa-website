import Head from "next/head";
import { Inter } from "@next/font/google";
import HeadSlice from "../slices/HeadSlice";
import AboutUs from "../slices/AboutUs";
import config from "../config";
import Agenda from "../slices/agenda/Index";
import PreviousEdition from "@/slices/PreviousEdition";
import Contact from "@/slices/Contact";
import Map from "../slices/Map";
import ParticlesBackground from "@/components/ParticlesBackground";
import Sponsorship from "@/slices/Sponsorship";

const inter = Inter({ subsets: ["latin"] });

const Main = () => {
  return (
    <main>
      <HeadSlice />
      <AboutUs />
      <PreviousEdition />
      {config.SHOW_AGENDA && <Agenda />}
      <Sponsorship />
      <Map />
      {config.SEND_MESSAGE_URL && (
        <Contact sendMessageUrl={config.SEND_MESSAGE_URL} />
      )}

      <ParticlesBackground />
    </main>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>17. Sesja Linuksowa</title>
        <meta name="description" content="17. Sesja Linuksowa" />
        <meta content="17. Sesja Linuksowa" property="og:site_name"></meta>
        <meta content="pl_PL" property="og:locale"></meta>
        <meta
          content="17. Sesja Linuksowa | Wrocław, Polska"
          property="og:title"
        ></meta>
        <meta content="http://17.sesja.linuksowa.pl/" property="og:url"></meta>
        <meta
          content="Sesja Linuksowa to największa w Polsce konferencja poświęcona rozwiązaniom Open Source oraz najnowszym trendom w systemach z rodziny GNU/Linux."
          property="og:description"
        ></meta>
        <meta content="website" property="og:type"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta
          name="google-site-verification"
          content="_XX2o2FKgUfRENSsUKxtqytQmXUjiPSlIVqFgmlXdts"
        />
      </Head>
      <Main />
    </>
  );
}
