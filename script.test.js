const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheese.com',
    'animal.com',
    'hello.com',
    'catas.com',
    'human.com'
];

describe('googleSearch', () => {
    it('silly test', () => {
        // googleSearch('testtest', dbMock);
        expect(10).toBe(10);
    });

    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([]);
        expect(googleSearch('cat', dbMock)).toEqual(['catas.com']);
    });

    it('works with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });

    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
});