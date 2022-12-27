import React, { forwardRef } from 'react';
import { CustomSelectProps } from '../../src/hooks/useCustomElmType';

// function SelectElm() {
//   return <div></div>;
// }

// export default SelectElm;

export const SelectElm = forwardRef<HTMLSelectElement, CustomSelectProps>(
  function SelectElm() {
    return (
      <div className="">
        <label>ddd</label>
        <select>
          <option value="20">20</option>
        </select>
      </div>
    );
  }
);
