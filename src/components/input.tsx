import { FC } from 'react';

import type { InputProps } from 'types/form';

const Input: FC<InputProps> = ({ register, name, error, disabled }) => (
  <fieldset>
    <label htmlFor={name}>
      <p>{name.toUpperCase()}</p>
      <input type="text" {...register(name)} disabled={disabled} />
    </label>
    <p>{error}</p>
  </fieldset>
);

export default Input;
