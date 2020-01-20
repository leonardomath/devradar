module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(tech => tech.trim()) // split tira a , e a cada tech remove o espaco em branco com o trim()
}