import React from 'react';
import { useFormContext } from 'react-hook-form';

function PreElm() {
  const { watch } = useFormContext();

  return (
    <pre style={{ color: 'white' }}>{JSON.stringify(watch(), null, 2)}</pre>
  );
}

export default PreElm;
