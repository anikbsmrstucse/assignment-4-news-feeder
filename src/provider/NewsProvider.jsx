import { NewsContext } from "../contexts";
import { useNewsQuery } from "../hooks";

const NewsProvider = ({ children }) => {
    const {error,loading,news} = useNewsQuery();
    console.log(loading);
    return <NewsContext.Provider value={{error,loading,news}}>{children}</NewsContext.Provider>;
};

export default NewsProvider;
