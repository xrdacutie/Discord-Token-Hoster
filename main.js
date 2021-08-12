const fs = require('fs')
const eris = require('eris')
let arr = []

fs.readFileSync('tokens.txt').toString().split('\n').forEach(t => {
    arr.push(new eris(t))
})

for (let i = 0; i < arr.length; i++) {
    const b = arr[i]
    b.on('hello', function () { console.log(`token #${i+1} is now being hosted online`) })
    b.on('error', function () { b.disconnect() })
    b.connect()
}
