import React, { useState, useCallback } from 'react';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [encryptedData, setEncryptedData] = useState(null);
  const [decryptedData, setDecryptedData] = useState(null);

  // Function that increments count passing a function as a callback using useCallback
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleEncryption = () => {
    const dataToEncrypt = { message: 'This is a secret message!' };
    const secretKey = 'your-secret-key'; // Replace with your actual secret key

    // Encrypt the data
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(dataToEncrypt), secretKey).toString();
    console.log('Encrypted data:', encryptedData);

    // Store encrypted data in a cookie
    Cookies.set('encryptedData', encryptedData);
    // Cookies.set('encryptedData', encryptedData, { expires: 1 });
    // Update state to display encrypted data
    setEncryptedData(encryptedData);

    // Clear decrypted data from state
    setDecryptedData(null);
  };

  const handleDecryption = () => {
    const encryptedData = Cookies.get('encryptedData');
    const secretKey = 'your-secret-key'; // Replace with your actual secret key

    if (encryptedData) {
      // Decrypt the data
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
      const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
      console.log('Decrypted data:', decryptedData);

      // Update state to display decrypted data
      setDecryptedData(decryptedData);

      // Clear encrypted data from state
      setEncryptedData(null);
    } else {
      console.log('No encrypted data found.');
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleEncryption}>Encrypt Data</button>
      <button onClick={handleDecryption}>Decrypt Data</button>

      {encryptedData && <p>Encrypted Data: {encryptedData}</p>}
      {decryptedData && <p>Decrypted Data: {JSON.stringify(decryptedData)}</p>}
    </div>
  );
};

export default ParentComponent;
