import { useState, useEffect } from 'react';
// import {Login} from "@/infrastruture"
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
        document.body.style.overflow = 'auto';
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};
        if (!email) {
        validationErrors.email = 'Email harus diisi';
        }
        if (!password) {
        validationErrors.password = 'Password harus diisi';
        }

        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        } else {
        console.log('Data login:', { email, password });
        }
    };

    return (
        <div className="flex justify-center items-center pt-20">
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-8 pb-8 w-full sm:max-w-md"
        >
            <h2 className="text-3xl text-center font-bold mb-6">Selamat Datang di Website SIKETAN</h2>
            <p className="text-lg text-center mb-6">Silahkan login terlebih dahulu</p>
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
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full"
                >
                Login
            </button>
            <p className="text-gray-700 text-sm mt-4">
                Belum punya akun?{' '}
                <a href="/register" className="text-blue-500 hover:text-blue-600 font-medium">
                    Daftar di sini
                </a>
            </p>
        </form>
        </div>
    );
};

export default LoginPage;
