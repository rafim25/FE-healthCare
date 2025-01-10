"use client";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  const navigateTo = (path) => {
    router.push(path);
  };
  const LoginSubmit = () => {
    navigateTo("/Paitent/HomePage");
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <img
            src="images/logo.svg"
            alt="Company Logo"
            className="mx-auto mb-4 h-16"
          />
          <h2 className="text-2xl font-bold text-center text-blue-600">
            Login
          </h2>
          <form className="mt-4">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              onSubmit={() => LoginSubmit()}
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-600">
              Forgot Password?
            </a>
            <p className="mt-2">
              New User?{" "}
              <button
                onClick={() => navigateTo("/Registration")}
                className="text-blue-600 pointer-events-auto"
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
