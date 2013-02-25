function printResult(r) {
 print(tojson(r))
}

var years_range = {}
years_range['$lt'] = 2009
years_range['$gt'] = 1995
db.movies.find({ year : years_range } ).forEach(printResult)


