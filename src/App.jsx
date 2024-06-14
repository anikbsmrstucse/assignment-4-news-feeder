import Page from "./Page";
import NewsProvider from "./provider/NewsProvider";

export default function App() {
    return (
        <NewsProvider>
            <Page />
        </NewsProvider>
    );
}
