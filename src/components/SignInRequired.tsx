
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SignInRequiredProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInRequired: React.FC<SignInRequiredProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;
  
  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign In Required</h2>
        <p className="mb-6 text-gray-600">
          You need to sign in before you can add products to your cart or make a purchase.
        </p>
        <div className="flex space-x-4">
          <button 
            className="flex-1 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="flex-1 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
            onClick={() => {
              onClose();
              navigate('/login');
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default SignInRequired;
