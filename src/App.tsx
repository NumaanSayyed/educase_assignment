import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProfilePage from './components/ProfilePage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    companyName: '',
    isAgency: 'no'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, isAgency: value }));
  };

  const navigatePage = (direction: 'prev' | 'next') => {
    if (direction === 'next' && currentPage < 4) setCurrentPage(prev => prev + 1);
    else if (direction === 'prev' && currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <WelcomePage goToLogin={() => setCurrentPage(2)} goToRegister={() => setCurrentPage(3)} />;
      case 2:
        return <LoginPage email={formData.email} password={formData.password} onChange={handleInputChange} />;
      case 3:
        return <RegisterPage formData={formData} onChange={handleInputChange} onRadioChange={handleRadioChange} onNext={() => setCurrentPage(4)} />;
      case 4:
        return <ProfilePage fullName={formData.fullName} email={formData.email} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 min-h-screen flex flex-col">
        {renderPage()}
        <div className="flex justify-between items-center mt-auto p-4">
          <button onClick={() => setCurrentPage(1)} className="text-gray-600 cursor-pointer">
            <i className="fas fa-home text-xl"></i>
          </button>
          <div className="flex items-center space-x-4">
            <button onClick={() => navigatePage('prev')} className="text-gray-600 cursor-pointer" disabled={currentPage === 1}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <span className="text-gray-600">{currentPage} of 4</span>
            <button onClick={() => navigatePage('next')} className="text-gray-600 cursor-pointer" disabled={currentPage === 4}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
