# Cryptography Project

## Goals
1. Facilitate reliable file exchange.
1. Users possess a key pair (public and private).
1. Maintain security of the private key, while the public key can be shared.
1. Utilize elliptic cryptography to generate keys.
1. Encryption using AES 256 CBC.
1. Symmetric key generation (AES-256) via Diffie-Hellman.

## Project Overview
This Node.js project comprises three programs:

1. Key Generation: Creates private and public keys using elliptic cryptography.
1. Encryption: Uses the private key of the sender and the public key of the recipient.
1. Decryption: Allows decryption of encrypted files.

## Setup
Navigate to the project folder and open the terminal: yarn init -y

### Key Generation
Create the file generar-claves.js

### Key Generation Process
- Use npx nodemon generar-claves.js --nombre alice to generate keys for "alice".
- Keys are stored in the "datos" directory.

### Encryption
- Create a file named fichero-a-encrkptar.txt
- Create the program encriptar-fichero.js
- Usage: node encriptar-fichero.js --privada alice --publica bob --fichero info-sensible.txt
    - Encrypts "info-sensible.txt" using Alice's private key and Bob's public key.
    - Utilizes AES-256-CBC encryption.
    - Outputs the encrypted file to the "datos" directory.
  
### Decryption
- Create a program for decryption, e.g., desencriptar-fichero.js
- Usage: node desencriptar-fichero.js --privada bob --publica alice --fichero alice-info-sensible.txt.enc
   - Decrypts the encrypted file using Bob's private key and Alice's public key.
   - Outputs the decrypted file to the "datos" directory.
     
### Streams
Stream-based modification for encryption and decryption:
- encriptar-fichero-stream.js: Encrypts files using streams.
- desencriptar-fichero-stream.js: Decrypts files using streams.
  
## Implementation Details
The programs use elliptic cryptography (secp521r1) to generate key pairs. Encryption is achieved via AES-256-CBC. Key exchange is facilitated using Diffie-Hellman for symmetric key generation.

## This README provides an overview of the project and its functionality. Detailed implementation and code can be found in the respective files within the project directory.
