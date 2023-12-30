import { useState, useEffect } from "react";
import { Login } from "@/infrastruture";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../components/loading";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (window.localStorage.getItem("token")) {
      navigate("/dashboard")
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const validationErrors = {};
    if (!email) {
      validationErrors.email = "Email harus diisi";
    }
    if (!password) {
      validationErrors.password = "Password harus diisi";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const data = {
        email,
        password,
      };
      Login(data).then(() => setLoading(false));
    }
  };

  return (
    <div className="grid md:grid-cols-2 bg-gradient-to-l from-blue-300 to-white h-[100vh]">
      <div className="hidden md:flex py-3 justify-center items-center bg-gradient-to-t from-green-primary to-green-secondary">
        <div>
          {loading &&
            <LoadingAnimation />}
          <img src="/image/logo-navbar.png" alt="Icon Navbar" />
          <p className="text-base md:text-3xl font-bold py-10 text-white">
            Melesat Lebih Cepat <br /> Bertumbuh Lebih Baik
          </p>
          <img src="/image/icon-login.png" alt="Icon Login" width={400} />
        </div>
      </div>
      <div className="flex justify-center items-center px-3">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded px-8 pt-8 pb-8 w-full sm:max-w-md"
        >
          <div className="flex justify-between py-5">
            <p className="text-base md:text-3xl text-green-secondary font-bold">
              Login Admin Siketan
            </p>
            <img
              src="/image/icon-home.png"
              className="justify-end"
              width={50}
              alt="Logo Home"
            />
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1 px-1 py-2"
            >
              <img src="/image/icon-email.png" alt="Logo Key" width={30} />
            </label>
            <input
              type="email"
              id="email"
              className={`border text-green-secondary rounded-md px-3 py-2 w-full ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1 px-1 py-1"
            >
              <img src="/image/icon-key.png" alt="Logo Key" width={30} />
            </label>
            <input
              type="password"
              id="password"
              className={`border text-green-secondary rounded-md px-3 py-2 w-full ${errors.password ? "border-red-500" : "border-gray-300"
                }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-green-secondary hover:bg-green-primary text-white py-2 px-4 rounded-md w-full"
          >
            Login
          </button>
          <div className="flex justify-between">
            <p className="text-gray-700 text-base mt-4 cursor-pointer">
              <a href="/register">Buat Akun Baru</a>
            </p>
            <p className="text-red-500 hover:text-red-600 text-base mt-4 cursor-pointer">
              Lupa Password?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
