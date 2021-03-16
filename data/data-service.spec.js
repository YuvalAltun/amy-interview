const dataService = require('./data-service');

test('no city found', async () => {
    expect(await dataService.getSugestion('wierdCityTahtDosentExists', '', '')).toEqual([]);
  });

test('no city found', async () => {
    const latitude = '43.70011';
    const longitude = '-79.4163';
    const results = await dataService.getSugestion('Londo', latitude, longitude )
    expect(dataService.delta({x: results[1].lat, y: results[1].long}, {x: latitude, y: longitude}))
    .toBeGreaterThan(dataService.delta({x: results[0].lat, y: results[0].long}, {x: latitude, y: longitude}));
});