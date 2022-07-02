export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '354123b114msh0e29d5407bcd150p16c842jsnd81d00829ee5',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3b6ff59018msh32b9e1a12e93216p162addjsnd4dd18b15368',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data
}
