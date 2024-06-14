import Page from "./Page";
import { CategoryProvider, SearchProvider } from "./provider";
import NewsProvider from "./provider/NewsProvider";

export default function App() {
    return (
        <SearchProvider>
            <CategoryProvider>
                <NewsProvider>
                    <Page />
                </NewsProvider>
            </CategoryProvider>
        </SearchProvider>
    );
}
