import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        console.log("Login clicked");
    };
    const goToSignup = () => {
        navigate("/signup");
    };

    return (
        <div className="flex flex-col items-center justify-start space-y-8 pt-20 min-h-screen">
            <h1 className="font-bold text-white text-4xl">Login</h1>
            <h1 className="font-bold text-white text-xl">For security reasons, all users must log in</h1>
            <div className="flex flex-col space-y-6 w-80">
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-800 text-white px-4 py-3 rounded-2xl outline-none"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="bg-gray-800 text-white px-4 py-3 rounded-2xl outline-none"
                />

                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-2xl shadow"
                    onClick={handleLogin}
                >
                    Log In
                </button>
            </div>

            <button
                className="text-blue-400 hover:text-blue-300 text-sm pt-2"
                onClick={goToSignup}
            >
                No account? Sign up
            </button>
        </div>
    );
};

export default LoginPage;
