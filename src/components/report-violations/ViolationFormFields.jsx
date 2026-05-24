import CustomSelect from './CustomSelect';
import EvidenceUpload from './EvidenceUpload';

const ViolationFormFields = ({ 
  formData, 
  files, 
  violationOptions, 
  locationOptions, 
  handleInputChange, 
  handleSelectChange, 
  handleFileChange, 
  handleRemoveFile 
}) => {
  return (
    <div className="lg:col-span-2 flex flex-col gap-8">
      <div className="bg-white border border-orange-normal/20 p-6 sm:p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md">
        <label className="block text-sm sm:text-base font-bold text-brown-normal mb-3">
          1. Type of Violation<span className="text-red-500">*</span>
        </label>
        <CustomSelect
          placeholder="Pilih jenis pelanggaran yang disaksikan"
          options={violationOptions}
          value={formData.type}
          onChange={(value) => handleSelectChange('type', value)}
        />
      </div>

      <div className="bg-white border border-orange-normal/20 p-6 sm:p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md">
        <label className="block text-sm sm:text-base font-bold text-brown-normal mb-3">
          2. Location of the Incident<span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CustomSelect
            placeholder="Select the location of the temple / area"
            options={locationOptions}
            value={formData.locationType}
            onChange={(value) => handleSelectChange('locationType', value)}
          />
          <input
            type="text"
            name="locationDetails"
            placeholder="Coordinates / Location details (optional)"
            value={formData.locationDetails}
            onChange={handleInputChange}
            className="w-full h-12.5 px-4 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-600 bg-gray-50/50 focus:outline-none focus:border-orange-normal focus:bg-white focus:ring-2 focus:ring-orange-normal/10 transition-all duration-200"
          />
        </div>
      </div>

      <div className="bg-white border border-orange-normal/20 p-6 sm:p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md">
        <label className="block text-sm sm:text-base font-bold text-brown-normal mb-3">
          3. Deskripsi Kejadian<span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          maxLength={2000}
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe the violation you witnessed briefly, clearly, and objectively..."
          className="w-full h-40 px-4 py-3 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-600 bg-gray-50/50 focus:outline-none focus:border-orange-normal focus:bg-white focus:ring-2 focus:ring-orange-normal/10 transition-all duration-200 resize-none"
        />
        <div className="flex justify-between items-center mt-2 text-[10px] sm:text-xs text-gray-400">
          <span>Minimum 150 characters for a complete description</span>
          <span>{formData.description.length}/2000</span>
        </div>
      </div>

      <EvidenceUpload 
        files={files} 
        onFileChange={handleFileChange} 
        onRemoveFile={handleRemoveFile} 
      />
    </div>
  );
};

export default ViolationFormFields;