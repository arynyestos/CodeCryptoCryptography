const { createECDH, createDecipheriv } = require('crypto')
const { exit } = require('process')
const args = require('yargs').argv
const fs = require('fs')


if (!(args.private && args.public && args.file)) {
    console.log("Faltan argumentos.")
    exit(0)
}

const origin = createECDH('secp521r1')
const privateKey = fs.readFileSync(`./data/${args.private}.key`).toString()
origin.setPrivateKey(privateKey, "hex")

const publicKey = fs.readFileSync(`./data/${args.public}.pb`).toString()

// Creation of shared secret key
const secretKey = Uint8Array.from(origin.computeSecret(publicKey, "hex", 'binary'))

// File deciphering
const algorithm = "aes-256-cbc"
var decipher = createDecipheriv(algorithm, secretKey.slice(0, 32), secretKey.slice(0, 16))

fs.createReadStream("./data/" + args.file)
    .pipe(decipher)
    .pipe(new fs.createWriteStream("./data/" + args.file.toString().substring(0, args.file.toString().indexOf('.enc'))))
