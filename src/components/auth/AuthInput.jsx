import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

// Input berlabel, dengan ikon di kiri & toggle password opsional
const AuthInput = ({
  label,
  icon: Icon,
  type = 'text',
  isPassword = false,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const inputType = isPassword ? (show ? 'text' : 'password') : type;

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-brown-normal/60 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-brown-normal/40"
          />
        )}
        <input
          type={inputType}
          className={`w-full h-12 rounded-xl bg-orange-light/40 border border-brown-normal/15 text-sm text-brown-dark placeholder:text-brown-normal/35 outline-none focus:border-orange-normal focus:ring-2 focus:ring-orange-normal/30 transition ${
            Icon ? 'pl-11' : 'pl-4'
          } ${isPassword ? 'pr-11' : 'pr-4'}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            aria-label={show ? 'Hide password' : 'Show password'}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center text-brown-normal/40 hover:text-brown-normal transition cursor-pointer"
          >
            {show ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthInput;