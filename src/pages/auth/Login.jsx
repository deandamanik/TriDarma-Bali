import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { PiSignInBold } from 'react-icons/pi';
import AuthLayout from '../../components/auth/AuthLayout';
import AuthInput from '../../components/auth/AuthInput';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: sambungkan ke API autentikasi kamu di sini.
    navigate('/profile');
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-brown-normal tracking-tight">Welcome Back</h2>
      <p className="mt-2 text-sm text-brown-normal/60 leading-relaxed">
        Sign in to access cultural guides, save articles, and manage your reports.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
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

        <div className="flex items-center justify-end -mt-1">
          <button
            type="button"
            className="text-sm font-semibold text-orange-dark hover:text-brown-normal transition cursor-pointer"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="h-12 w-full bg-brown-normal text-orange-light font-bold text-sm rounded-full flex items-center justify-center gap-2 hover:bg-brown-normal-hover active:scale-[0.99] transition cursor-pointer"
        >
          <PiSignInBold size={18} />
          Sign In Now
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-brown-normal/60">
        Don&apos;t have an account?{' '}
        <Link to="/register" className="font-bold text-orange-dark hover:text-brown-normal transition">
          Sign Up for Free
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;