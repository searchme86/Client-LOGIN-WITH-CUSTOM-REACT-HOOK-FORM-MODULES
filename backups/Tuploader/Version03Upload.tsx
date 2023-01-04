/**
 * 주안점
 *    {...register('files')}에서 files 부분을 props로 받을 수 있도록 변경
 *
 *
 *
 */

import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { encode as base64_encode } from 'base-64';
import './ImageUploaderStyle.css';

interface DataSchema extends Record<string, any> {}

const schema = yup.object().shape({
  files: yup.mixed().test('required', '먼저 파일을 등록해주세요', (value) => {
    return value && value.length;
  }),
});

function Version03Upload() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
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

  console.log('what', getValues('files'));

  return (
    <div>
      {image ? (
        <div className="imgContainer">
          <img src={image} alt="upload" />
        </div>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        {!watch('files') || watch('files').length === 0 ? (
          // 만약 watch로 files키를 조회할때, 값이 없다면, 이것이 보인다.
          // 'files'를 제네릭하게 만들어야 하지 않을까
          //props로 넘겨준다!
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
          // watch로 인풋에 입력한 텍스트 files에 바인딩된 값, 즉 여기서 파일의 값, 즉 이미지가 있으면 파일 name이 보인다.
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

export default Version03Upload;
