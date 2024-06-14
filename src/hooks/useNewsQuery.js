import { useContext, useEffect, useState } from "react";
import { CategoryContext, SearchContext } from "../contexts";

const useNewsQuery = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [error, setError] = useState(null);

    const {selectedCategory} = useContext(CategoryContext);
    const {searchTerm} = useContext(SearchContext);
    console.log(searchTerm);

    const fetchNews = async (category) => {
        try {
            setLoading({ ...loading, state: true, message: "Loading news..." });
            const response = await fetch(
                `http://localhost:8000/v2/top-headlines${category}`
            );
            if (!response.ok) {
                const errorMessage = "Fetching news failed" + response.message;
                throw new Error(errorMessage);
            }
            const data = await response.json();
            setNews(data.articles);
        } catch (error) {
            setError(error);
        } finally {
            setLoading({ ...loading, state: false, message: "" });
        }
    };
    
    const searchNews = async (searchText) => {
        try {
            setLoading({ ...loading, state: true, message: "Searching news..." });
            const response = await fetch(
                `http://localhost:8000/v2/search?q=${searchText}`
            );
            if (!response.ok) {
                const errorMessage = "Fetching news failed" + response.message;
                throw new Error(errorMessage);
            }
            const data = await response.json();
            setNews(data.result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading({ ...loading, state: false, message: "" });
        }
    }

    useEffect(() => {
        setLoading({ ...loading, state: true, message: "Starting fetching..."})
        if (selectedCategory) {
            fetchNews(selectedCategory);
        } else {
            fetchNews('/')
        }
    }, [selectedCategory]);

    useEffect(() => {
        if(searchTerm){
            searchNews(searchTerm);
        }else {
            fetchNews('/');
        }
    },[searchTerm])

    return { news, loading, error };
};

export default useNewsQuery;
