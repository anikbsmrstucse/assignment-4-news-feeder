import { useEffect, useState } from "react";

const useNewsQuery = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [error, setError] = useState(null);

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

    useEffect(() => {
        setLoading({ ...loading, state: true, message: "Starting fetching..."})
        // if (category) {
        //     fetchNews(category);
        // } else {
        //     fetchNews('/')
        // }
        fetchNews('/');
    }, []);

    return { news, loading, error };
};

export default useNewsQuery;
