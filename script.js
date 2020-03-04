const googleDatabase = [
    'cats.com',
    'soup.com',
    'flower.com',
    'animals.com',
    'catpictures.com',
    'myFavoritecat.com',
    'catacatacat.com'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => website.includes(searchInput));

    return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;