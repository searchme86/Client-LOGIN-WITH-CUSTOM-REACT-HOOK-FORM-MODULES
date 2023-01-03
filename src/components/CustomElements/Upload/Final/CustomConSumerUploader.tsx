import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { decode as base64_decode, encode as base64_encode } from 'base-64';
function CustomConSumerUploader<Model extends Record<string, any>>({
  name,
  btnTxt,
}: {
  name: keyof Model;
  btnTxt: string;
}) {
  const [base64, setBase64] = useState<string>();

  const {
    watch,
    register,
    formState: { isSubmitting, errors },
  } = useFormContext();

  let isImage = watch(name.toString()) && watch(name.toString())[0];

  useEffect(() => {
    if (watch(name.toString()) && watch(name.toString())[0]) {
      let file = watch(name.toString())[0];
      console.log('useEffect안의 file', file);
      const fileRef = watch(name.toString())[0] || '';
      const fileType: string = fileRef.type || '';
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        let encoded = base64_encode(`${ev.target.result}`);
        setBase64(`data:${fileType};base64,${encoded}`);
      };
    }
  }, [isImage, name, watch]);

  // console.log('base64', base64);
  return (
    <div>
      <div className="">
        <img src={base64} alt="upload" />
      </div>
      <input
        type="file"
        multiple
        id="fileupload"
        disabled={isSubmitting}
        {...register(name.toString())}
      />

      <label htmlFor="fileupload" className="imageUploadBtn">
        {btnTxt}
      </label>

      {watch(name.toString()) && watch(name.toString())[0] ? (
        <span>{watch(name.toString())[0]?.name}</span>
      ) : (
        <span>등록값이 없어서 watch가 안나옴</span>
      )}

      {errors[name.toString()] ? (
        <div>{errors[name.toString()]?.message?.toString()}</div>
      ) : null}
    </div>
  );
}

export default CustomConSumerUploader;
