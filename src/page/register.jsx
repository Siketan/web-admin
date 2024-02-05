import { useState } from 'react';
import { Register } from '@/infrastruture';
const RegisterPage = () => {
  const [no_wa, StNoWa] = useState('');
  const [nama, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form
    const validationErrors = {};
    if (!no_wa) {
      validationErrors.nik = 'NIK harus diisi';
    }
    if (!nama) {
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
      const data = {
        nama,
        email,
        password,
        no_wa
      };
      Register(data);
    }
  };

  return (
    <div className="grid md:grid-cols-2 bg-gradient-to-l from-blue-300 to-white h-[100vh]">
      <div className="hidden md:flex py-3 justify-center items-center bg-gradient-to-t from-green-primary to-green-secondary">
        <div>
          <img src="/image/logo-navbar.png" alt="Icon Navbar" />
          <p className="text-base md:text-3xl font-bold py-10 text-white">
            Melesat Lebih Cepat <br /> Bertumbuh Lebih Baik
          </p>
          <img src="/image/icon-login.png" alt="Icon Login" width={400} />
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center px-3 pt-20">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-8 pb-8 w-full sm:max-w-md">
            <div className="flex justify-between py-5">
              <p className="text-base md:text-3xl text-green-secondary font-bold">
                Register Admin Siketan
              </p>
              <img src="/image/icon-home.png" className="justify-end" width={50} alt="Logo Home" />
            </div>
            <div className="mb-4">
              <label htmlFor="NoWa" className="block text-green-secondary font-medium mb-1">
                No Wa
              </label>
              <input
                type="text"
                id="NoWa"
                className={`border rounded-md px-3 py-2 w-full ${
                  errors.NoWa ? 'border-red-500' : 'border-gray-300'
                }`}
                value={no_wa}
                onChange={(e) => StNoWa(e.target.value)}
              />
              {errors.nik && <p className="text-red-500 text-sm mt-1">{errors.nik}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-green-secondary font-medium mb-1">
                Nama
              </label>
              <input
                type="text"
                id="name"
                className={`border rounded-md px-3 py-2 w-full ${
                  errors.nama ? 'border-red-500' : 'border-gray-300'
                }`}
                value={nama}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-green-secondary font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`border rounded-md px-3 py-2 w-full ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-green-secondary font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`border rounded-md px-3 py-2 w-full ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-green-secondary font-medium mb-1">
                Konfirmasi Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className={`border rounded-md px-3 py-2 w-full ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full">
              Masuk
            </button>
            <p className="text-black text-sm mt-4">
              Sudah punya akun?{' '}
              <a href="login" className="text-blue-500 hover:text-blue-600 font-medium">
                Masuk di sini
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
