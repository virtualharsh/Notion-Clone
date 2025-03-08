import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(location.state?.isLogin);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="flex p-4 items-center justify-center min-h-screen w-full bg-gray-900 text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-lg rounded-2xl"
            >
                <h2 className="text-2xl font-bold text-center text-gray-200">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full p-3 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer font-semibold"
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>

                {/* Google Sign-in Button with Professional Styling */}
                <div className="flex items-center justify-center">
                    <button className="w-full p-3 text-white bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer font-semibold text-lg transition">
                        Sign in with Google
                    </button>
                </div>

                {/* Toggle between Login & Signup */}
                <p className="text-base text-center text-gray-300 font-medium">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="ml-2 text-blue-400 underline cursor-pointer text-lg font-semibold"
                    >
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </p>
            </motion.div>
        </div>
    );
}
