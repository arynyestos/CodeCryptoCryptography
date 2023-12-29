# Cryptography Project
This was the fifth of the CodeCrypto web 2 projects. Here the aim was to dig deeper into cryptography, since it is ultimately the base of cryptocurrencies and Blockchain technology.

## Goals
1. Facilitate reliable file exchange. Users shall possess a key pair (public and private).
1. Maintain security of the private key, while the public key can be shared.
1. Utilize elliptic cryptography to generate keys.
1. Encryption using AES 256 CBC.
1. Symmetric key generation (AES-256) via Diffie-Hellman.

## Project Overview
This Node.js project is comprised of three programs:

1. Key Generation: Creates private and public keys using elliptic cryptography.
1. Encryption: Uses the private key of the sender and the public key of the recipient.
1. Decryption: Allows decryption of encrypted files.

## Setup
Navigate to the project folder and open the terminal: yarn init -y

### Key Generation
Create the file generate-keys.js

### Key Generation Process
- Use ```node generate-keys --name alice``` to generate the keys for Alice.
- And ```node generate-keys --name bob``` to generate the keys for Bob.
- Keys are stored in the "data" directory.

### Encryption
- Create a file named secret-message.txt in the data directory, with a sample text: "This is the secret message Alice sends to Bob."
- Create the program encrypt-file.js
- Usage: ```node encrypt-file --private alice --public bob --file secret-message.txt```
    - Encrypts "secret-message.txt" using Alice's private key and Bob's public key.
    - Utilizes AES-256-CBC encryption.
    - Outputs the encrypted file to the "data" directory.
    - Output generated: File "alice-secret-message.txt.enc", containing: "d8774393ac2f8ec678900f93447d3e52286c5fc1447b1ef4395b5b4ac8be2e146b8d8262a3e6a3753686d5e11e5a9bcb"
  
### Decryption
- Create a program for decryption, e.g., decrypt-file.js
- Usage: ```node decrypt-file --private bob --public alice --file alice-secret-message.txt.enc```
    - Decrypts the encrypted file using Bob's private key and Alice's public key.
    - Outputs the decrypted file to the "data" directory.
    - Output generated: File "alice-secret-message.txt", containing: "This is the secret message Alice sends to Bob."
     
### Streams
Stream-based modification for encryption and decryption:
- encrypt-file-stream.js: Encrypts files using streams.
- Usage: ```node encrypt-file-stream --private alice --public bob --file secret-message.txt```
    - Output generated: File "stream-alice-secret-message.txt.enc", containing: "�wC��/��x��D}>R(l_�D{�9[[JȾ.k��b��u6���Z��"
- decrypt-file-stream.js: Decrypts files using streams.
- Usage: ```node decrypt-file-stream --private alice --public bob --file stream-alice-secret-message.txt.enc```
    - Output generated: File "stream-alice-secret-message.txt", containing: "This is the secret message Alice sends to Bob."
  
## Implementation Details
The programs use elliptic cryptography (secp521r1) to generate key pairs. Encryption is achieved via AES-256-CBC. Key exchange is facilitated using Diffie-Hellman for symmetric key generation.

### Note
This README provides an overview of the project and its functionality. Detailed implementation and code can be found in the respective files within the project directory.
