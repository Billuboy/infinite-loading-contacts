import 'styles/components/input.css';

import { FC } from 'react';

import type { InputProps } from 'types/form';

const Input: FC<InputProps> = ({ register, name, error, disabled }) => {
  const inputClass = error
    ? 'border md:border-2 border-red'
    : 'border md:border-2 border-blue-250';

  return (
    <fieldset className="input-container">
      <label htmlFor={name}>
        <p>{name}</p>
        <input
          type="text"
          {...register(name)}
          disabled={disabled}
          className={inputClass}
        />
      </label>
      <p>{error}</p>
    </fieldset>
  );
};

export default Input;
