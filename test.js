/* global WebAssembly */

const fs = require('fs')
const path = require('path')

const code = fs.readFileSync(path.join(__dirname, 'test.wasm'))
const wasmModule = new WebAssembly.Module(code)
const instance = new WebAssembly.Instance(wasmModule, { env: {} })

console.log('instance.exports.malloc(1454860)')
instance.exports.malloc(1454860)

console.log('instance.exports.free(131088)')
instance.exports.free(131088)

console.log('instance.exports.malloc(4786736)')
instance.exports.malloc(4786736)
