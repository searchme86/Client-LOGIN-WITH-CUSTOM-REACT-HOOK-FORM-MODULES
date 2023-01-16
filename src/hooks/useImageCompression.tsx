import imageCompression from 'browser-image-compression';

function ImageCompression() {
  const CompressImage = async (data: any) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(data, options);
      return compressedFile;
    } catch (error) {
      console.log(
        'ImageCompression으로 이미지 압축 중 에러가 발생했습니다.',
        error
      );
    }
  };

  return { CompressImage };
}

export default ImageCompression;
