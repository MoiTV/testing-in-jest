const fetch = require('node-fetch');
const swapi = require('./script2');

// it('calls swapi to get people', (done) => {
//     expect.assertions(1)
//     swapi.getPeopleAsync(fetch).then(data => {
//         expect(data.count).toEqual(87)
//     })
//     done()
// });

it('calls swapi to get people', () => {
    expect.assertions(2)
    return swapi.getPeopleAsync(fetch).then(data => {

        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(1)
    })
});