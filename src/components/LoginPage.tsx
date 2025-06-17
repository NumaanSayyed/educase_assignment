import React from 'react';

interface Props {
    email: string;
    password: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginPage: React.FC<Props> = ({ email, password, onChange }) => (
    <div className="flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-2">Signin to your</h1>
            <h2 className="text-3xl font-bold mb-6">PopX account</h2>
            <div className="mb-4">
                <label className="block text-purple-600 mb-2">Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Enter email address"
                />
            </div>
            <div className="mb-6">
                <label className="block text-purple-600 mb-2">Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Enter password"
                />
            </div>
            <button className="w-full bg-purple-600 text-white py-3 !rounded-button cursor-pointer">
                Login
            </button>
        </div>
    </div>
);

export default LoginPage;
