import { FormSchemaType } from './LoginFormType';
import { SubmitHandler } from 'react-hook-form';
import useImageCompression from '../../src/hooks/useImageCompression';
import useCreateFormData from '../../src/hooks/useCreateFormData';

function useLoginFormAction() {
  const { CompressImage } = useImageCompression();
  const { createFormData } = useCreateFormData();

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    if (data) {
      // console.log('data', data);
      // console.log('나옴?', data.files);
      let Image = data.files[0];

      let compress = await CompressImage(Image);
      // console.log('compress', compress);
      const reader = new FileReader();
      if (compress) reader.readAsDataURL(compress);
      reader.onloadend = () => {
        // console.log('base64data', reader.result);
        createFormData(reader.result as string, data);
      };
    }

    await new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data));
        resolve(undefined);
      }, 3000);
    });
  };

  return { onSubmit };
}

export default useLoginFormAction;
