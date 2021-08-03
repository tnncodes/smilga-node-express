// Modules - Código Encapsulado (compartilhe apenas o mínimo)
// CommonJS - cada arquivo é um módulo (por padrão)

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-flavor')

sayHi(names.john)
sayHi(names.peter)

console.log('data:', data)