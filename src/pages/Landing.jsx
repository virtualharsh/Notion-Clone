import { React, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RotatingText from '../components/ReactBits/RotatingText';
import TextPressure from '../components/ReactBits/TextPressure';

const Landing = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);

    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col">
            {/* Navbar */}
            <nav className="flex items-center justify-between md:justify-around lg:justify-between py-4 lg:px-48 px-6 text-white">
                <h1 className="font-family-kirang text-4xl cursor-pointer md:text-5xl underline underline-offset-4">
                    Taskk
                </h1>

                <div className="flex gap-4 text-lg">
                    <button
                        className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition"
                        onClick={() => navigate('/login', { state: { isLogin: false } })}
                    >
                        Register
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition"
                        onClick={() => navigate('/login', { state: { isLogin: true } })}
                    >
                        Login
                    </button>
                </div>
            </nav>

            {/* Body Section */}
            <div className="flex gap-x-3.5 flex-col-reverse md:flex-row items-center justify-between flex-1 w-full px-6 md:px-24 lg:px-48 py-6">
                {/* Left Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left text-white text-5xl md:text-7xl leading-tight">
                    <div className='relative h-max flex flex-col gap-10'>
                        <TextPressure
                            text="Writing down your taskks !"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={true}
                            textColor="#ffffff"
                            strokeColor="#ff0000"
                            minFontSize={36}
                        />
                        <TextPressure
                            text="makes it half complete !"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={true}
                            textColor="#ffffff"
                            strokeColor="#ff0000"
                            minFontSize={36}
                        />
                    </div>
                </div>

                {/* Right Image & Rotating Text Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
                    <div className="w-full max-w-md">
                        <img className="w-full rounded-lg shadow-lg" src="laptop.png" alt="Task Management" />
                    </div>

                    <div className="w-max flex items-baseline text-2xl md:text-2xl gap-2">
                        <p>Note Down Your</p>
                        <RotatingText
                            texts={['Notes', 'Tasks', 'Plans', 'Projects']}
                            mainClassName="px-3 bg-gray-700 text-white overflow-hidden rounded-md"
                            staggerFrom="last"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "tween", damping: 30, stiffness: 400 }}
                            rotationInterval={2500}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
