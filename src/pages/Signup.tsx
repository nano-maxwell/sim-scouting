import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../scripts/firebase";

const SignupPage: React.FC = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = () => {
        if (password.length <= 6) {
            alert("Password must be longer than 6 characters.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        } else {
            registerUser(email, password)
        }
    };

    const goToLogin = () => {
        navigate("/login");
    };

    return (
        <div className="flex flex-col items-center justify-start space-y-8 pt-20 min-h-screen">
            <h1 className="font-bold text-white text-4xl">Sign Up</h1>

            <p className="font-bold text-white text-xl">Use your school email. Submissions not attached to a school email will not be accepted.</p>
            <div className="flex flex-col space-y-6 w-80">
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-800 text-white px-4 py-3 rounded-2xl outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="bg-gray-800 text-white px-4 py-3 rounded-2xl outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-gray-800 text-white px-4 py-3 rounded-2xl outline-none"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-2xl shadow"
                    onClick={handleSignup}
                >
                    Create Account
                </button>
            </div>

            <button
                className="text-blue-400 hover:text-blue-300 text-sm pt-2"
                onClick={goToLogin}
            >
                Already have an account? Log in
            </button>
        </div>
    );
};

export default SignupPage;
