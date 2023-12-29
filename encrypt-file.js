const { createCipheriv, createECDH } = require('crypto')
const { exit } = require('process')
const args = require('yargs').argv
const fs = require('fs')

if (!(args.private && args.public && args.file)) {
    console.log("Missing arguments.")
    exit(0)
}

const origin = createECDH('secp521r1')
const privateKey = fs.readFileSync(`./data/${args.private}.key`).toString()
origin.setPrivateKey(privateKey, "hex")

const publicKey = fs.readFileSync(`./data/${args.public}.pb`).toString()

// Creation of shared secret key
const secretKey = Uint8Array.from(origin.computeSecret(publicKey, "hex", 'binary'))

// File ciphering
const algorithm = "aes-256-cbc"
const cipher = createCipheriv(algorithm, secretKey.slice(0, 32), secretKey.slice(0, 16))
const text = fs.readFileSync(`./data/${args.file}`)

console.log(text.toString())

let encrypted = cipher.update(text, 'utf-8', 'hex')
encrypted += cipher.final('hex')
console.log(encrypted)
fs.writeFileSync("./data/" + args.private + "-" + args.file + ".enc", encrypted)