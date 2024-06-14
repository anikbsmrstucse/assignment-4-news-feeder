import { useContext } from "react";
import { CategoryContext } from "../../contexts";
import { categories } from "../../data/category-data";

export default function Category() {
    const {selectedCategory,setSelectedCategory} = useContext(CategoryContext);
    const data = categories();
    return (
        <div className="container mx-auto mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
                {data.map((item) => {
                    return (
                        <li key={item.id}>
                            <a
                                href="#"
                                onClick={() => setSelectedCategory(`?category=${item.value}`)}
                                className={`${
                                    selectedCategory === `?category=${item.value}`
                                        ? 'text-[#00d991]'  
                                        : 'text-[#000]' 
                                }`}
                            >
                                {item.category}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
