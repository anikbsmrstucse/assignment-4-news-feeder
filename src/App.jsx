import Page from "./Page";
import { CategoryProvider } from "./provider";
import NewsProvider from "./provider/NewsProvider";

export default function App() {
    return (
        <CategoryProvider>
            <NewsProvider>
                <Page />
            </NewsProvider>
        </CategoryProvider>
    );
}
