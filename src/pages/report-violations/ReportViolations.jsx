import { useState, useEffect } from 'react';
import ReportHero from '../../components/report-violations/ReportHero';
import ViolationFormFields from '../../components/report-violations/ViolationFormFields';
import FormStatus from '../../components/report-violations/FormStatus';
import AlertBox from '../../components/report-violations/AlertBox';
import SuccessModal from '../../components/report-violations/SuccessModal';

const ReportViolations = () => {
  const [formData, setFormData] = useState({
    type: '',
    locationType: '',
    locationDetails: '',
    description: '',
    fullName: '',
    email: '',
    whatsapp: '',
    isAnonymous: false,
  });

  const [files, setFiles] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  const violationOptions = [
    { value: 'pakaian', label: 'Pakaian tidak sopan di area suci' },
    { value: 'perilaku', label: 'Perilaku tidak pantas di pura' },
    { value: 'perusakan', label: 'Perusakan situs atau fasilitas adat' },
    { value: 'komersial', label: 'Komersialisasi budaya ilegal' },
  ];

  const locationOptions = [
    { value: 'uluwatu', label: 'Pura Luhur Uluwatu' },
    { value: 'mengning', label: 'Pura Mengning' },
    { value: 'sada', label: 'Pura Sada Kapal' },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (files.length + selectedFiles.length <= 4) {
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const handleRemoveFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const isFormValid = 
    formData.type && 
    formData.locationType && 
    formData.description.length >= 10 && 
    (formData.isAnonymous || (formData.fullName && formData.email && formData.whatsapp));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setShowSuccessModal(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleCloseModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setShowSuccessModal(false);
      setFormData({
        type: '',
        locationType: '',
        locationDetails: '',
        description: '',
        fullName: '',
        email: '',
        whatsapp: '',
        isAnonymous: false,
      });
      setFiles([]);
    }, 300);
  };

  return (
    <div className="w-full min-h-screen bg-white font-poppins relative overflow-x-hidden">
      <ReportHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-12 py-16">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <ViolationFormFields
            formData={formData}
            files={files}
            violationOptions={violationOptions}
            locationOptions={locationOptions}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            handleFileChange={handleFileChange}
            handleRemoveFile={handleRemoveFile}
            className={`transition-all duration-1000 ease-out delay-100 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          />

          <div className={`flex flex-col gap-6 transition-all duration-1000 ease-out delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white border border-orange-normal/20 p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm sm:text-base font-bold text-brown-normal">
                  5. Reporter's identity
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Anonymous</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="isAnonymous"
                      checked={formData.isAnonymous}
                      onChange={handleInputChange}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-normal"></div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  name="fullName"
                  disabled={formData.isAnonymous}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-600 bg-gray-50/50 focus:outline-none focus:border-orange-normal focus:bg-white focus:ring-2 focus:ring-orange-normal/10 disabled:opacity-40 transition-all duration-200"
                />
                <input
                  type="email"
                  name="email"
                  disabled={formData.isAnonymous}
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-600 bg-gray-50/50 focus:outline-none focus:border-orange-normal focus:bg-white focus:ring-2 focus:ring-orange-normal/10 disabled:opacity-40 transition-all duration-200"
                />
                <input
                  type="text"
                  name="whatsapp"
                  disabled={formData.isAnonymous}
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="WhatsApp number"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-600 bg-gray-50/50 focus:outline-none focus:border-orange-normal focus:bg-white focus:ring-2 focus:ring-orange-normal/10 disabled:opacity-40 transition-all duration-200"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full py-3.5 bg-brown-light-active hover:bg-brown-light-hover text-brown-dark font-bold rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:bg-gray-200 disabled:text-gray-400 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed transform active:scale-[0.99]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 animate-pulse">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              Send to the Tourism Office
            </button>

            <FormStatus formData={formData} filesCount={files.length} />
            <AlertBox />
          </div>
        </form>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        isAnimating={isAnimating}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ReportViolations;