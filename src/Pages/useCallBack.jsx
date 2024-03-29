import React, { useState, useCallback } from 'react';
// import ChildComponent from './ChildComponent';
import CryptoJS from 'crypto-js';
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Function that increments count passing a function as a call back using use call back
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  const handleEncryption = () => {
    const dataToEncrypt = { message: 'This is a secret message!' };
    const secretKey = 'your-secret-key'; // Replace with your actual secret key

    // Encrypt the data
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(dataToEncrypt), secretKey).toString();
    console.log('Encrypted data:', encryptedData);

    // Store encrypted data in localStorage
    localStorage.setItem('encryptedData', encryptedData);
  };

  const handleDecryption = () => {
    const encryptedData = localStorage.getItem('encryptedData');
    const secretKey = 'your-secret-key'; // Replace with your actual secret key

    if (encryptedData) {
      // Decrypt the data
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
      const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
      console.log('Decrypted data:', decryptedData);
    } else {
      console.log('No encrypted data found.');
    }
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleEncryption}>Encrypt Data</button>
      <button onClick={handleDecryption}>Decrypt Data</button>
    </div>
  );
};

export default ParentComponent;
