/***
 * Dev.community
 *  */

import React, { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';
import Logo from '../assets/Images/upload.png';
import { decode as base64_decode, encode as base64_encode } from 'base-64';
// import { setTimeout } from 'timers';

import {
  ImageUploadContainer,
  ImageUploadCard,
  ImageUploadPerfil,
  ImageUploadSpinner,
} from './NewImageUploader.style';

function NewImageUploader() {
  const [file, setFile] = useState<string>();
  const [imagePreview, setImagePreview] = useState<any>('');
  const [base64, setBase64] = useState<string>();
  const [name, setName] = useState<string>();
  const [size, setSize] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const _handleReaderLoaded = (readerEvt: any) => {
    let binaryString = readerEvt.target.result;
    let encoded = base64_encode(`${binaryString}`);
    setBase64(encoded);
  };

  const onChange = (e: any) => {
    console.log('file', e.target.files[0]);
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const onFileSubmit = (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    console.log('bine', base64);
    let payload = { image: base64 };
    console.log('payload', payload);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const photoUpload = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log('reader', reader);
    console.log('file', file);
    if (reader !== undefined && file !== undefined) {
      reader.onloadend = () => {
        setFile(file);
        setSize(file.size);
        setName(file.name);
        setImagePreview(reader.result);
        console.log('reader.result', reader?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const remove = () => {
    setFile('');
    setImagePreview('');
    setBase64('');
    setName('');
    setSize('');
  };

  console.log('file', file);
  return (
    <ImageUploadContainer>
      <form onSubmit={(e) => onFileSubmit(e)} onChange={(e) => onChange(e)}>
        <ImageUploadCard
          logo={Logo}
          width={imagePreview === '' ? 310 : 310}
          height={imagePreview === '' ? 400 : 480}
        >
          <ImageUploadPerfil
            top={imagePreview === '' ? 0 : -140}
            width={imagePreview === '' ? 120 : 145}
            height={imagePreview === '' ? 120 : 145}
          >
            {imagePreview === '' ? (
              <BsUpload />
            ) : (
              <img src={imagePreview} alt="Icone adicionar" />
            )}
            <input
              type="file"
              name="avatar"
              id="file"
              accept=".jpef, .png, .jpg"
              onChange={photoUpload}
              src={imagePreview}
            />
          </ImageUploadPerfil>
          {imagePreview !== '' && (
            <>
              <section>
                <label>File Name</label>
                <span>{name}</span>

                <label>File size</label>
                <span>{size}</span>
              </section>

              <button type="submit">
                {isLoading ? (
                  <ImageUploadSpinner>
                    <ImSpinner2 />
                  </ImageUploadSpinner>
                ) : (
                  <>Salvar</>
                )}
              </button>
              <button type="button" onClick={remove}>
                Remove
              </button>
            </>
          )}
        </ImageUploadCard>
      </form>
    </ImageUploadContainer>
  );
}

export default NewImageUploader;
