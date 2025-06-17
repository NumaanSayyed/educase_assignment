import React from 'react';

interface Props {
    formData: {
        fullName: string;
        phone: string;
        email: string;
        password: string;
        companyName: string;
        isAgency: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRadioChange: (value: string) => void;
    onNext: () => void;
}

const RegisterPage: React.FC<Props> = ({ formData, onChange, onRadioChange, onNext }) => (
    <div className="flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-2">Create your</h1>
            <h2 className="text-3xl font-bold mb-6">PopX account</h2>
            <div className="space-y-4">
                {['fullName', 'phone', 'email', 'password', 'companyName'].map(field => (
                    <div key={field}>
                        <label className="block text-purple-600 mb-2 capitalize">
                            {field === 'fullName' ? 'Full Name' :
                                field === 'companyName' ? 'Company Name' :
                                    field.charAt(0).toUpperCase() + field.slice(1).replace('phone', 'Phone number')}
                            {['fullName', 'phone', 'email', 'password'].includes(field) && <span className="text-red-500">*</span>}
                        </label>
                        <input
                            type={field === 'email' ? 'email' : field === 'password' ? 'password' : 'text'}
                            name={field}
                            value={(formData as any)[field]}
                            onChange={onChange}
                            className="w-full p-3 border rounded-lg"
                            placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                        />
                    </div>
                ))}
                <div>
                    <label className="block text-purple-600 mb-2">Are you an Agency?<span className="text-red-500">*</span></label>
                    <div className="flex space-x-4">
                        {['yes', 'no'].map(value => (
                            <label key={value} className="flex items-center">
                                <input
                                    type="radio"
                                    name="isAgency"
                                    checked={formData.isAgency === value}
                                    onChange={() => onRadioChange(value)}
                                    className="mr-2"
                                />
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <button
                onClick={onNext}
                className="w-full bg-purple-600 text-white py-3 mt-6 !rounded-button cursor-pointer"
            >
                Create Account
            </button>
        </div>
    </div>
);

export default RegisterPage;
