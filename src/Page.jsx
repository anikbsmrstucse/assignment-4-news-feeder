import { useContext } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Newsboard from "./components/Newsboard/Newsboard";
import Loader from "./components/loader/Loader";
import { NewsContext } from "./contexts";

export default function Page() {
    const { loading } = useContext(NewsContext);
    return (
        <>
            <Header />
            {loading.state ? (
                <Loader />
            ) : (
                <main className="my-10 lg:my-14">
                    <Newsboard />
                </main>
            )}
            <Footer />
        </>
    );
}
