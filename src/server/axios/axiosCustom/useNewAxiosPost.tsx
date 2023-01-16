import React, { useState } from 'react';
import { AxiosError } from 'axios';
import axios from '@server/axios/axiosCustom';

function useNewAxiosPost() {
  const AxiosPost = async (data: any) => {
    try {
      const result = await axios.post('/img', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log('axios error', error);
      }
    }
  };

  return { AxiosPost };
}

export default useNewAxiosPost;
