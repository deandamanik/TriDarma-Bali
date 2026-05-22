import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white font-poppins gap-4">
      <h1 className="text-3xl font-bold text-brown-normal">Halaman Register</h1>
      <Link to="/" className="text-sm text-orange-normal underline">Kembali ke Home</Link>
    </div>
  );
};

export default Register;