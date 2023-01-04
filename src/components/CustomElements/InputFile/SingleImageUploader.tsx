import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import useImageCompression from '../../../hooks/useImageCompression';

function SingleImageUploader<Model extends Record<string, any>>({
  zodValidationKey,
  btnTxt,
}: {
  zodValidationKey: keyof Model;
  btnTxt: string;
}) {
  const [base64, setBase64] = useState<string>();
  const { CompressImage } = useImageCompression();

  const {
    watch,
    register,
    formState: { isSubmitting, errors },
  } = useFormContext();

  let isImage =
    watch(zodValidationKey.toString()) && watch(zodValidationKey.toString())[0];

  useEffect(() => {
    const transformBase64 = async () => {
      if (
        watch(zodValidationKey.toString()) &&
        watch(zodValidationKey.toString())[0]
      ) {
        let compressed = await CompressImage(
          watch(zodValidationKey.toString())[0]
        );
        const reader = new FileReader();
        if (compressed) reader.readAsDataURL(compressed);
        reader.onloadend = () => {
          setBase64(reader?.result as string);
        };
      }
    };
    transformBase64();
  }, [isImage]);

  return (
    <div>
      {base64 ? (
        <div className="">
          <img src={base64} alt="upload" />
        </div>
      ) : null}

      <input
        type="file"
        id="fileupload"
        disabled={isSubmitting}
        {...register(zodValidationKey.toString())}
        style={{ display: 'none' }}
      />

      <label htmlFor="fileupload" className="imageUploadBtn">
        {btnTxt}
      </label>

      {watch(zodValidationKey.toString()) &&
      watch(zodValidationKey.toString())[0] ? (
        <span>{watch(zodValidationKey.toString())[0]?.zodValidationKey}</span>
      ) : (
        <span>등록값이 없어서 watch가 안나옴</span>
      )}

      {errors[zodValidationKey.toString()] ? (
        <div>{errors[zodValidationKey.toString()]?.message?.toString()}</div>
      ) : null}
    </div>
  );
}

export default SingleImageUploader;
