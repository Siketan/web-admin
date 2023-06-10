import { useState } from 'react';

const RegisterPage = () => {
  const [nik, setNik] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form
    const validationErrors = {};
    if (!nik) {
      validationErrors.nik = 'NIK harus diisi';
    }
    if (!name) {
      validationErrors.name = 'Nama harus diisi';
    }
    if (!email) {
      validationErrors.email = 'Email harus diisi';
    }
    if (!password) {
      validationErrors.password = 'Password harus diisi';
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Konfirmasi password tidak sesuai';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Kirim data pendaftaran ke server atau lakukan tindakan lainnya
      console.log('Data pendaftaran:', { name, email, password });
    }
  };

  return (
    <div className="flex justify-center items-center py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full sm:max-w-md"
      >
        <h2 className="text-3xl text-center font-bold mb-6">Pendaftaran Akun</h2>
        <div className="mb-4">
          <label htmlFor="nik" className="block text-gray-700 font-medium mb-1">
            NIK
          </label>
          <input
            type="text"
            id="nik"
            className={`border rounded-md px-3 py-2 w-full ${errors.nik ? 'border-red-500' : 'border-gray-300'}`}
            value={nik}
            onChange={(e) => setNik(e.target.value)}
          />
          {errors.nik && <p className="text-red-500 text-sm mt-1">{errors.nik}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Nama
          </label>
          <input
            type="text"
            id="name"
            className={`border rounded-md px-3 py-2 w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`border rounded-md px-3 py-2 w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`border rounded-md px-3 py-2 w-full ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">
            Konfirmasi Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={`border rounded-md px-3 py-2 w-full ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full"
            >
            Register
        </button>
        <p className="text-gray-700 text-sm mt-4">
            Sudah punya akun?{' '}
            <a href="/login" className="text-blue-500 hover:text-blue-600 font-medium">
                Masuk di sini
            </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
