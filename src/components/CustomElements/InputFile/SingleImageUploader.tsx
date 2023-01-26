import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import useImageCompression from '@hooks/useImageCompression';

import {
  ImageContainer,
  ImageHolder,
  Image,
  ImageButton,
  ImageTitle,
  ImageErrorMessage,
} from '@components/styles/image.style';
import {
  ContentBox,
  ImageFileNameView,
} from '@components/styles/display.style';

import upload from '@assets/Images/upload.png';

function SingleImageUploader<Model extends Record<string, string>>({
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
      <ContentBox display="flex">
        <ImageHolder width="60%" height="80px">
          {base64 ? (
            <Image src={base64} alt="upload" />
          ) : (
            <Image src={upload} alt="upload" />
          )}
        </ImageHolder>

        <input
          type="file"
          id="fileupload"
          disabled={isSubmitting}
          {...register(zodValidationKey.toString())}
          style={{ display: 'none' }}
        />

        <ImageFileNameView
          display="flex"
          width="60%"
          flexDirection="column"
          textAlign="left"
          padding="10px"
          margin="auto 0 0 0"
        >
          <ImageButton htmlFor="fileupload">{btnTxt}</ImageButton>
          {watch(zodValidationKey.toString()) &&
          watch(zodValidationKey.toString())[0] ? (
            <ImageTitle>
              {watch(zodValidationKey.toString())[0]?.name}
            </ImageTitle>
          ) : null}
        </ImageFileNameView>
      </ContentBox>

      {errors[zodValidationKey.toString()] ? (
        <ImageErrorMessage>
          {errors[zodValidationKey.toString()]?.message?.toString()}
        </ImageErrorMessage>
      ) : null}
    </ImageContainer>
  );
}

export default SingleImageUploader;
