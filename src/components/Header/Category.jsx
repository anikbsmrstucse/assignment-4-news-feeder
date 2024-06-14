import { useContext } from "react";
import { CategoryContext } from "../../contexts";
import { categories } from "../../data/category-data";

export default function Category() {
    const {setSelectedCategory} = useContext(CategoryContext);
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
