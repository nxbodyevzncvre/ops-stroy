import Scroll from "./components/Scroll/Scroll";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>OPS Quzet - Главная</title>
                <meta name="description" content="Охранное предприятие ОПС Строй. Защита вашего имущества и безопасности." />
                <meta name="keywords" content="охрана, безопасность, ОПС Строй, OPS Stroy, актобе" />
                <meta property="og:title" content="OPS Stroy - Охранное предприятие" />
                <meta property="og:description" content="Надежные охранные услуги для вашего бизнеса и дома." />
                <meta property="og:image" content="/images/preview.jpg" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
            </Head>
            <Scroll />
        </>
    );
}
