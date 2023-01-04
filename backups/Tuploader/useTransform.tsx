import React from 'react';
import { useFormContext } from 'react-hook-form';

function useTransform() {
  const { setValue } = useFormContext();

  type something = (arg: any) => any;

  const transformed: something = (data) => {
    if (data && data[0]) {
      // const fileObj = getValues(data.toString());
      // console.log('data', data);
      const fileJson = {
        lastModified: data[0].lastModified,
        lastModifiedDate: data[0].lastModifiedDate,
        name: data[0].name,
        size: data[0].size,
        type: data[0].type,
      };
      console.log('transformed', fileJson);
      setValue('files', fileJson);
    }
  };

  return { transformed };
}

export default useTransform;
