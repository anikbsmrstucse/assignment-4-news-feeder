const rightSideNews = (news) => {
    if (news.length > 0) {
        const filteredNews = news.filter(
            (singleNews) =>
                singleNews.description === null && singleNews.content === null
        );
        return filteredNews;
    }
};

const leftSideNews = (news) => {
    if (news.length > 0) {
        const filteredNews = news.filter(
            (singleNews) =>
                singleNews.description !== null && singleNews.content !== null
        );
        return filteredNews;
    }
};

function getRandomNumber() {
    return Math.random() < 0.5 ? 6 : 8;
}

function getFormattedDate(value, type, inMS) {
    if (!type) return value;

    if (!inMS) {
        value = Date.parse(value); // Convert ISO 8601 date string to milliseconds
    }

    const date = new Date(value);
    let options;

    if (type === 'date') {
        options = {
            day: "2-digit",
            month: "short",
            year: "numeric",
        };
    } else if (type === 'time') {
        options = {
            hour: "numeric",
            minute: "numeric",
        };
    }

    return new Intl.DateTimeFormat("en-US", options).format(date);
}

function getCurrentDate() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    const dayOfMonth = now.getDate();
    const year = now.getFullYear();
    
    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
}



export { getCurrentDate, getFormattedDate, getRandomNumber, leftSideNews, rightSideNews };

