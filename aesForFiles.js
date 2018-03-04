import CryptoJS from 'crypto-js'

export const _encryptAESForFiles = (file, token) => {
  const base64String = btoa(String.fromCharCode(...new Uint8Array(file)))
  return CryptoJS.AES.encrypt(base64String, token).toString()
}

export const _decryptAESForFiles = (file, token) => {
  const bytes = CryptoJS.AES.decrypt(JSON.parse(new TextDecoder('utf-8').decode(file)).file, token)
  return bytes.toString(CryptoJS.enc.Utf8)
}
