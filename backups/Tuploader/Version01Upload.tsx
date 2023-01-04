import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

function Version01Upload() {
  const actionImgCompress = async (event: any) => {
    const imageFile = event?.target?.files[0];
    console.log('imageFile', imageFile);
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1260,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log('compressedFile', compressedFile);
      return compressedFile;
    } catch (error) {
      console.log('Error is up in process of ImageCompresstion', error);
    }
  };

  return (
    <div>
      <p>input</p>
      <label htmlFor="upload">이미지 업로드</label>
      <input
        name="upload"
        type="file"
        id="upload"
        accept="image/*"
        onChange={(e) => actionImgCompress(e)}
      />
    </div>
  );
}

export default Version01Upload;
