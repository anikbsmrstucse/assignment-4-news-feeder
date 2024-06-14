import { useContext } from 'react';
import searchIcon from '../../assets/icons/search.svg';
import { SearchContext } from '../../contexts';
import useDebounce from '../../hooks/useDebounce';
export default function Search() {

    const {setSearchTerm} = useContext(SearchContext);

    const doSearch = useDebounce((term) => {
        setSearchTerm(term);
    }, 500);

    function handleChange(e) {
        const value = e.target.value;
        doSearch(value);
    }

    return (
        <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search News..."
                    onChange={handleChange}
                    required
                />
                <button type="submit">
                    <img src={searchIcon} alt="Search" />
                </button>
            </div>
        </form>
    );
}
