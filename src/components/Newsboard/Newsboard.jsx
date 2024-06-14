import { useContext } from "react";
import { NewsContext } from "../../contexts";
import {
    getFormattedDate,
    leftSideNews,
    rightSideNews,
} from "../../utils/utils";

export default function Newsboard() {
    const { news } = useContext(NewsContext);
    const leftSide = leftSideNews(news);
    const rightSide = rightSideNews(news);
    return (
        <div className="container mx-auto grid grid-cols-12 gap-8">
            {/* left side news */}
            <div className={`col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-${rightSide?.length === 0 ? 12 : 8}`}>
                {leftSide?.length > 0 &&
                    leftSide?.map((item) => {
                        return (
                            <div
                                key={item.title}
                                className="col-span-12 grid grid-cols-12 gap-4"
                            >
                                <div className="col-span-12 lg:col-span-6">
                                    <a href={item.url}>
                                        <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                                            {item.title}
                                        </h3>
                                    </a>
                                    <p className="text-base text-[#5C5955]">
                                        {item.description}
                                    </p>
                                    <p className="mt-5 text-base text-[#5C5955]">
                                        {getFormattedDate(
                                            item.publishedAt,
                                            "date",
                                            false
                                        )}
                                    </p>
                                </div>

                                {item.urlToImage ? (
                                    <div className="col-span-12 lg:col-span-6">
                                        <img
                                            className="w-full"
                                            src={item.urlToImage}
                                            alt="thumb"
                                            onError={(e) => {
                                                e.target.src =
                                                    "https://via.placeholder.com/400x200?text=Image+Not+Found";
                                                e.target.alt =
                                                    "Image not found";
                                            }}
                                        />
                                        {item.author ? (
                                            <p className="mt-5 text-base text-[#5C5955]">
                                                Illustration: {item.author}
                                            </p>
                                        ) : null}
                                    </div>
                                ) : null}
                            </div>
                        );
                    })}
            </div>
            {/* right side news */}
            <div className="col-span-12 self-start xl:col-span-4">
                <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                    {rightSide?.length > 0 &&
                        rightSide?.map((item) => {
                            return (
                                <div key={item.title} className="col-span-12 mb-6 md:col-span-8">
                                    {item.urlToImage && <img
                                        className="w-full"
                                        src="./assets/thumb.png"
                                        alt="thumb"
                                    />}

                                    <div className="col-span-12 mt-6 md:col-span-4">
                                        <a href={item.url}>
                                            <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                                                {item.title}
                                            </h3>
                                        </a>
                                        {item.description && <p className="text-base text-[#292219]">
                                            {item.description}
                                        </p>}
                                        <p className="mt-5 text-base text-[#94908C]">
                                            {getFormattedDate((item.publishedAt),'date',false)}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
