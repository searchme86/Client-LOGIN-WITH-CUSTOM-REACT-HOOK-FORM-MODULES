import React, { useState } from 'react';
import { AxiosError } from 'axios';
import axios from '../axiosCustom';

function useNewAxiosPost() {
  const AxiosPost = async (data: any) => {
    console.log('useNewAxiosPost data', data);

    try {
      const result = await axios.post('/img', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });
      console.log('result', result);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log('axios error', error);
      }
    }
  };

  return { AxiosPost };
}

export default useNewAxiosPost;
