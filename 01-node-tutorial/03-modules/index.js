// Modules - Código Encapsulado (compartilhe apenas o mínimo)
// CommonJS - cada arquivo é um módulo (por padrão)

const names = require('./names')
const sayHi = require('./utils')

sayHi(names.john)
sayHi(names.peter)