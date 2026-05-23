import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiPhone, FiMail, FiLock } from 'react-icons/fi';
import { PiUserPlusBold } from 'react-icons/pi';
import AuthLayout from '../../components/auth/AuthLayout';
import AuthInput from '../../components/auth/AuthInput';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: sambungkan ke API registrasi kamu di sini.
    navigate('/profile');
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-brown-normal tracking-tight">Create Account</h2>
      <p className="mt-2 text-sm text-brown-normal/60 leading-relaxed">
        Join TriDarma Bali to explore Balinese culture responsibly.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <AuthInput
          label="Full Name"
          icon={FiUser}
          placeholder="Ahmad Fauzi"
          required
        />
        <AuthInput
          label="WhatsApp Number"
          icon={FiPhone}
          type="tel"
          placeholder="0812-3456-7890"
          required
        />
        <AuthInput
          label="Email Address"
          icon={FiMail}
          type="email"
          placeholder="you@example.com"
          required
        />
        <AuthInput
          label="Password"
          icon={FiLock}
          isPassword
          placeholder="Min. 6 characters"
          minLength={6}
          required
        />

        <button
          type="submit"
          className="mt-1 h-12 w-full bg-brown-normal text-orange-light font-bold text-sm rounded-full flex items-center justify-center gap-2 hover:bg-brown-normal-hover active:scale-[0.99] transition cursor-pointer"
        >
          <PiUserPlusBold size={18} />
          Register Free Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-brown-normal/60">
        Already have an account?{' '}
        <Link to="/login" className="font-bold text-orange-dark hover:text-brown-normal transition">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Register;