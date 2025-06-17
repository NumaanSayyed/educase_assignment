import React from 'react';

interface Props {
    goToLogin: () => void;
    goToRegister: () => void;
}

const WelcomePage: React.FC<Props> = ({ goToLogin, goToRegister }) => (
    <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to PopX</h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button onClick={goToRegister} className="w-full max-w-md bg-purple-600 text-white py-3 mb-4 !rounded-button cursor-pointer">
            Create Account
        </button>
        <button onClick={goToLogin} className="w-full max-w-md bg-purple-100 text-purple-600 py-3 !rounded-button cursor-pointer">
            Already Registered? Login
        </button>
    </div>
);

export default WelcomePage;
