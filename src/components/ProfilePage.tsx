import React from 'react';

interface Props {
    fullName: string;
    email: string;
}

const ProfilePage: React.FC<Props> = ({ fullName, email }) => (
    <div className="flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-4xl p-6">
            <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
            <div className="flex items-start space-x-6">
                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                    <img
                        src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-xl font-semibold">{fullName}</h2>
                    <p className="text-gray-600">{email}</p>
                    <p className="text-gray-500 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default ProfilePage;
