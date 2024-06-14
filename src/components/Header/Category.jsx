import { useState } from "react";
import { categories } from "../../data/category-data";

export default function Category() {
    const [categoryValue, setCategoryValue] = useState("/");
    const data = categories();
    console.log(categoryValue);
    return (
        <div className="container mx-auto mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
                {data.map((item) => {
                    return (
                        <li key={item.id}>
                            <a
                                href="#"
                                onClick={() => setCategoryValue(`?category=${item.value}`)}
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
