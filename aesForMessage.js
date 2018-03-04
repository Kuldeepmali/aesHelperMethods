import CryptoJS from 'crypto-js'

export const _encryptAESForString = (msg, aesKey) => CryptoJS.AES.encrypt(msg, aesKey).toString()

export const _decryptAESForString = (string, token) => {
  const bytes = CryptoJS.AES.decrypt(string, token)
  return bytes.toString(CryptoJS.enc.Utf8)
}
