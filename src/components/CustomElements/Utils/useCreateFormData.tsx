import React from 'react';

function useCreateFormData() {
  const createFormData = async (base64: string, data: any) => {
    // console.log('base64', base64);
    console.log('formData', data);

    const { email, username } = data;

    const byteString = window.atob(base64.split(',')[1]);

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const jpegblob = new Blob([ia], {
      type: 'image/jpeg',
    });
    const jpgblob = new Blob([ia], {
      type: 'image/jpg',
    });
    const pngblob = new Blob([ia], {
      type: 'image/png',
    });

    const jpegfile = new File([jpegblob], 'image.jpeg', { type: 'image/jpeg' });
    const jpgfile = new File([jpgblob], 'image.jpg', { type: 'image/jpg' });
    const pngfile = new File([pngblob], 'image.png', { type: 'image/png' });

    const formData = new FormData();
    formData.append('jpegImg', jpegfile);
    formData.append('jpgfile', jpgfile);
    formData.append('pngfile', pngfile);

    formData.append('email', email);
    formData.append('username', username);
  };

  return { createFormData };
}

export default useCreateFormData;
