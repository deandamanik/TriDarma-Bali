import { FiCheckCircle, FiX } from 'react-icons/fi';

const SuccessModal = ({ isOpen, isAnimating, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white rounded-2xl max-w-md w-full p-6 text-center shadow-2xl relative border border-orange-normal/10 transition-all duration-300 transform ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors"
        >
          <FiX className="text-xl" />
        </button>

        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-orange-light text-orange-normal mb-4 animate-bounce">
          <FiCheckCircle className="text-4xl" />
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-brown-normal mb-2">
          Report Sent Successfully!
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
          Thank you for contributing to maintaining the cultural sanctity of Bali. Your violation report has been forwarded to the Badung Regency Tourism Office for verification.
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 bg-brown-normal hover:bg-brown-normal-hover text-white font-bold rounded-xl text-xs sm:text-sm transition-colors shadow-md active:scale-[0.98] transform"
        >
          Understood
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;