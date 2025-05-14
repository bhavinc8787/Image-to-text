import React, { useState } from 'react';
import ImageUploader from '../componants/ImageUploader';
import TextExtractor from '../componants/TextExtractor';

const OCRPage = () => {
  const [imageFile, setImageFile] = useState(null);

  return (
    <div className="ocr-page">
      <h1>Image to Text Converter</h1>
      <ImageUploader onImageUpload={setImageFile} />
      {imageFile && <TextExtractor imageFile={imageFile} />}
    </div>
  );
};

export default OCRPage;
