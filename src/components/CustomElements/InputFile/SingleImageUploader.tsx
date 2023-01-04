import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import useImageCompression from '../../../hooks/useImageCompression';

import {
  ImageContainer,
  ImageWrapper,
  ImageElmn,
  ImageClickBtn,
  ImageTitle,
  ImageErrorMessage,
} from '../../../assets/styles/Image.style';

import {
  DisplayContainer,
  DisplayItem,
} from '../../../assets/styles/Display.style';

import upload from '../../../assets/Images/upload.png';

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
    <ImageContainer>
      <DisplayContainer display="flex">
        <ImageWrapper width="40%" height="80px">
          {base64 ? (
            <ImageElmn src={base64} alt="upload" />
          ) : (
            <ImageElmn src={upload} alt="upload" />
          )}
        </ImageWrapper>

        <input
          type="file"
          id="fileupload"
          disabled={isSubmitting}
          {...register(zodValidationKey.toString())}
          style={{ display: 'none' }}
        />

        <DisplayItem
          display="flex"
          width="60%"
          flexDirection="column"
          textAlign="left"
          padding="10px"
          margin="auto 0 0 0"
        >
          <ImageClickBtn htmlFor="fileupload">{btnTxt}</ImageClickBtn>
          {watch(zodValidationKey.toString()) &&
          watch(zodValidationKey.toString())[0] ? (
            <ImageTitle>
              {watch(zodValidationKey.toString())[0]?.name}
            </ImageTitle>
          ) : null}
        </DisplayItem>
      </DisplayContainer>

      {errors[zodValidationKey.toString()] ? (
        <ImageErrorMessage>
          {errors[zodValidationKey.toString()]?.message?.toString()}
        </ImageErrorMessage>
      ) : null}
    </ImageContainer>
  );
}

export default SingleImageUploader;
