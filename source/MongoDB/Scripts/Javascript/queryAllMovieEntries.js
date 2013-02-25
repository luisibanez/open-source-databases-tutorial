function printResult(r) {
 print(tojson(r))
}

db.movies.find().forEach(printResult)

