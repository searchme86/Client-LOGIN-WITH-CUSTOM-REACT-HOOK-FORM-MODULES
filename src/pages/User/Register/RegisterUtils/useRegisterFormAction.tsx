import { SubmitHandler } from 'react-hook-form';
import { RegisterSchemaType } from './RegisterSchema';
import useImageCompression from '../../../../hooks/useImageCompression';
import useCreateFormData from '../../../../hooks/useCreateFormData';

function useRegisterFormAction() {
  const { CompressImage } = useImageCompression();
  const { createFormData } = useCreateFormData();

  const onRegisterSubmit: SubmitHandler<RegisterSchemaType> = async (data) => {
    if (data) {
      // console.log('data', data);
      // console.log('나옴?', data.files);
      let Image = data.userImage[0];

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

  return { onRegisterSubmit };
}

export default useRegisterFormAction;
