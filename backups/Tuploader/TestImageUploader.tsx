/***
 * DreamCoding, Cloudinary
 *  */

import React, { useState } from 'react';
import { uploadImage } from './TestUpload';

function TestImageUploader() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      console.log(files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        console.log('url', url);

        // addProduct.mutate(
        //   { product, url },
        //   {
        //     onSuccess: () => {
        //       setSuccess('성공적으로 제품이 추가되었습니다.');
        //       setTimeout(() => {
        //         setSuccess(null);
        //       }, 4000);
        //     },
        //   }
        // );
      })
      .finally(() => setIsUploading(false));
  };
  console.log('product', product);

  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
      {success && <p className="my-2">✅ {success}</p>}
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />

        {/* <button
          className="bg-brand text-white py-2 px-4 rounded-sm hover:brightness-110"
          // onClick={}
          disabled={isUploading}
        >
          {isUploading ? '업로드중...' : '제품 등록하기'}
        </button> */}
      </form>
    </section>
  );
}

export default TestImageUploader;
