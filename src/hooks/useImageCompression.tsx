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
      console.log(error);
    }
  };

  return { CompressImage };
}

export default ImageCompression;
