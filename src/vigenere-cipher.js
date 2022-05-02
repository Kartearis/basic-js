const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    // if (inversed === undefined) throw new Error("Incorrect arguments!");
    this.inversed = !direct;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphabet = this.alphabet.repeat(2);
    this.tabulaRecta = [];
    for (let i = 0; i<26; i++)
      this.tabulaRecta.push(alphabet.slice(i, i + 26));
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error("Incorrect arguments!");
    message = message.toLowerCase();
    key = key.toLowerCase();
    let encrypted = [];
    for (let i = 0, kki = 0; i < message.length; i++)
    {
      if (!this.alphabet.includes(message[i]))
      {
        encrypted.push(message[i]);
        continue;
      }
      let k = key[kki];
      let ki = this.alphabet.indexOf(k);
      let mi = this.alphabet.indexOf(message[i]);
      encrypted.push(this.tabulaRecta[ki][mi]);
      kki = (kki + 1)%key.length;
    }
    if (this.inversed)
      encrypted.reverse();
    return encrypted.join('').toUpperCase();
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error("Incorrect arguments!");
    let decrypted = "";
    encryptedMessage = encryptedMessage.toLowerCase().split('');
    key = key.toLowerCase();
    for (let i = 0, kki = 0; i < encryptedMessage.length; i++)
    {
      if (!this.alphabet.includes(encryptedMessage[i]))
      {
        decrypted += encryptedMessage[i];
        continue;
      }
      let k = key[kki];
      let ki = this.alphabet.indexOf(k);
      let di = this.tabulaRecta[ki].indexOf(encryptedMessage[i]);
      decrypted += this.alphabet[di];
      kki = (kki + 1)%key.length;
    }
    if (this.inversed)
      decrypted = decrypted.split('').reverse().join('');
    return decrypted.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};

// let vcm = new VigenereCipheringMachine(true);
// const testStr = "A%F";
// const reversedTestStr = testStr.split('').reverse().join('');
// const testKey = "FDFSFSDFlk";
// const encrypted = vcm.encrypt(reversedTestStr, testKey);
// const reversedEncrypted = encrypted.split('').reverse().join('');
// console.log(vcm.decrypt(reversedEncrypted, testKey), testStr)