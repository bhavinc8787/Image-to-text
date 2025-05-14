import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const TextExtractor = ({ imageFile }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const extractText = () => {
    if (imageFile) {
      setLoading(true);
      Tesseract.recognize(imageFile, 'eng', {
        logger: (m) => console.log(m), // Logs OCR progress
      })
        .then(({ data: { text } }) => {
          setText(text);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };

  return (
    <div className="text-extractor">
      <button onClick={extractText} className="extract-button">
        Extract Text
      </button>
      {loading && <p>Processing...</p>}
      {text && <textarea readOnly value={text} className="output-text" />}
    </div>
  );
};

export default TextExtractor;
