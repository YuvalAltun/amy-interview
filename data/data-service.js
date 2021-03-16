const dataSet = require('./cities.json');

module.exports.delta = (pointA, pointB) => {
    var x = Number.parseFloat(pointA.x) - Number.parseFloat(pointB.x),
    y = Number.parseFloat(pointA.y) - Number.parseFloat(pointB.y);

return Math.sqrt(x*x + y*y);
}

module.exports.jsonResultsConvertor = (results) => {
    return results.map( x => (
        {
            name: `${x.name}${x.feat_code ? ', ' + x.feat_code : ''}${x.country ? ', ' + x.country : ''}`, 
            latitude: x.lat,
            longitude: x.longitude
        }));
}

function verifyRecord (record) {
    return record && record.name && record.lat && record.long;
}
// return a list of records that starts with q and aranged by the distance from the location
module.exports.getSugestion =  async (q, latitude, longitude) => {
    const results = dataSet
    .filter( record => verifyRecord(record) && record.name.toLowerCase().includes(q.toLowerCase()))
    .sort( (a,b) => this.delta({x: a.lat, y: a.long}, {x: latitude, y: longitude}) - this.delta({x: b.lat, y: b.long}, {x: latitude, y: longitude}));   
    return this.jsonResultsConvertor(results);
}
