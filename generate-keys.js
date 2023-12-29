const { createECDH } = require('crypto')
const args = require('yargs').argv
const fs = require('fs')

console.log(args.name)

if (!args.name) {
    console.log("Name not provided in command. Please provide a name (--name nameToGenerateKeysFor).")
    exit(0)
}

const keyObject = createECDH("secp521r1")
const publicKey = keyObject.generateKeys("hex")
const privateKey = keyObject.getPrivateKey("hex")
fs.writeFileSync(`./data/${args.name}.key`, privateKey)
fs.writeFileSync(`./data/${args.name}.pb`, publicKey)