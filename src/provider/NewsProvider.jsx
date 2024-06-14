import { NewsContext } from "../contexts";
import { useNewsQuery } from "../hooks";

const NewsProvider = ({ children }) => {
    const {error,loading,news,setNews} = useNewsQuery();
    return <NewsContext.Provider value={{error,loading,news,setNews}}>{children}</NewsContext.Provider>;
};

export default NewsProvider;
