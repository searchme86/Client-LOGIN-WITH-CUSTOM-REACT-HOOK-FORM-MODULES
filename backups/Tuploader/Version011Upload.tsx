/**
 *
 * React Hook Form과 input file 유튜브
 *
 *  */

import React, { useState, BaseSyntheticEvent } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { decode as base64_decode, encode as base64_encode } from 'base-64';
import imageCompression from 'browser-image-compression';
interface DataSchema extends Record<string, any> {}
type OnSubmit = (data: DataSchema, event?: BaseSyntheticEvent) => void;

const schema = yup.object().shape({
  files: yup.mixed().test('required', '먼저 파일을 등록해주세요', (value) => {
    return value && value.length;
  }),
});

function Version011Upload() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [image, setImage] = useState<string>('');

  const onSubmit = async (data: DataSchema) => {
    if (data) {
      const files = data.files;
      const fileRef = files[0] || '';
      const fileType: string = fileRef.type || '';
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        let encoded = base64_encode(`${ev.target.result}`);
        setImage(`data:${fileType};base64,${encoded}`);
      };
    }
  };

  return (
    <div>
      {image ? <img src={image} width="450" alt="upload" /> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        {!watch('files') || watch('files').length === 0 ? (
          <div className="">
            <input
              type="file"
              id="fileupload"
              accept=".jpeg, .png, .jpg"
              {...register('files')}
              style={{ display: 'none' }}
            />
            <label htmlFor="fileupload" style={{ cursor: 'pointer' }}>
              파일을 등록하려면 클릭해주세요!
            </label>
          </div>
        ) : (
          <strong>{watch('files')[0].name}</strong>
        )}
        <button type="submit" className="btn">
          업로드
        </button>
        {errors.files && (
          <div className="error">{errors.files.message?.toString()}</div>
        )}
      </form>
    </div>
  );
}

export default Version011Upload;
